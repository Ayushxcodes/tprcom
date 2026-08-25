'use client';

import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { useContent } from '@/context/ContentContext';
import { SiteContent } from '@/data/initialContent';

interface ImageUploadInputProps {
  label?: string;
  value: string;
  onChange: (newUrl: string) => void;
}

function ImageUploadInput({ label = 'Image URL / Upload File', value, onChange }: ImageUploadInputProps) {
  const [isUploading, setIsUploading] = useState(false);

  const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    setIsUploading(true);
    try {
      const formData = new FormData();
      formData.append('file', file);

      const res = await fetch('/api/upload', {
        method: 'POST',
        body: formData,
      });

      if (res.ok) {
        const data = await res.json();
        if (data.success && data.url) {
          onChange(data.url);
          setIsUploading(false);
          return;
        }
      }
    } catch (err) {
      console.error('File upload failed:', err);
    }

    // Fallback to FileReader Base64 if server upload fails
    const reader = new FileReader();
    reader.onload = (event) => {
      if (event.target?.result) {
        onChange(event.target.result as string);
      }
      setIsUploading(false);
    };
    reader.readAsDataURL(file);
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '6px', width: '100%' }}>
      {label && <label style={{ fontSize: '12px', color: '#475569', fontWeight: 600 }}>{label}</label>}
      <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
        {value ? (
          <div
            style={{
              width: '42px',
              height: '42px',
              borderRadius: '8px',
              border: '1px solid #B8995E',
              overflow: 'hidden',
              flexShrink: 0,
              background: '#F8FAFC',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <img src={value} alt="Preview" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
          </div>
        ) : (
          <div
            style={{
              width: '42px',
              height: '42px',
              borderRadius: '8px',
              border: '1px dashed #CBD5E1',
              flexShrink: 0,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '11px',
              fontWeight: 700,
              color: '#64748B',
              background: '#F1F5F9',
            }}
          >
            Img
          </div>
        )}

        <input
          type="text"
          value={value || ''}
          onChange={(e) => onChange(e.target.value)}
          placeholder="Enter image URL or choose file..."
          style={{ ...inputStyle, flex: 1 }}
        />

        <label
          style={{
            background: 'rgba(184, 153, 94, 0.15)',
            border: '1px solid #B8995E',
            color: '#946E29',
            padding: '9px 14px',
            borderRadius: '8px',
            fontSize: '12px',
            fontWeight: 700,
            cursor: isUploading ? 'not-allowed' : 'pointer',
            whiteSpace: 'nowrap',
            display: 'flex',
            alignItems: 'center',
            gap: '6px',
            opacity: isUploading ? 0.7 : 1,
          }}
          title="Upload image file from your device"
        >
          {isUploading ? 'Uploading...' : 'Upload'}
          <input type="file" accept="image/*" disabled={isUploading} onChange={handleFileChange} style={{ display: 'none' }} />
        </label>
      </div>
    </div>
  );
}

type TabId =
  | 'hero'
  | 'philosophy'
  | 'approach'
  | 'services'
  | 'work'
  | 'sectors'
  | 'leadership'
  | 'clientLogos'
  | 'contact'
  | 'footer';

export default function AdminDashboardPage() {
  const { content, updateContent, resetToDefault, isAdminLoggedIn, logoutAdmin, isLoading, exportContentJson } = useContent();
  const router = useRouter();

  const [activeTab, setActiveTab] = useState<TabId>('hero');

  const [prevContent, setPrevContent] = useState<SiteContent>(content);
  const [formData, setFormData] = useState<SiteContent>(content);
  const [saveStatus, setSaveStatus] = useState<{ message: string; type: 'success' | 'error' | '' }>({
    message: '',
    type: '',
  });
  const [isSaving, setIsSaving] = useState<boolean>(false);

  // Adjust state during render when context content changes (avoids cascading effect renders)
  if (content !== prevContent) {
    setPrevContent(content);
    setFormData(content);
  }

  useEffect(() => {
    if (!isLoading && !isAdminLoggedIn) {
      router.push('/admin/login');
    }
  }, [isAdminLoggedIn, isLoading, router]);

  if (isLoading || !isAdminLoggedIn) {
    return (
      <div
        style={{
          minHeight: '100vh',
          background: '#F8FAFC',
          color: '#0F172A',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontFamily: 'var(--sans)',
        }}
      >
        <p style={{ color: '#946E29', fontWeight: 600 }}>Verifying admin authorization...</p>
      </div>
    );
  }

  const handleSave = async () => {
    setIsSaving(true);
    setSaveStatus({ message: '', type: '' });

    const result = await updateContent(formData);
    setIsSaving(false);

    if (result.success) {
      setSaveStatus({ message: 'All content updated and persisted successfully!', type: 'success' });
      setTimeout(() => setSaveStatus({ message: '', type: '' }), 4000);
    } else {
      setSaveStatus({ message: `Failed to save: ${result.error}`, type: 'error' });
    }
  };

  const handleReset = async () => {
    if (confirm('Are you sure you want to reset all content to site defaults? This will overwrite your changes.')) {
      setIsSaving(true);
      const result = await resetToDefault();
      setIsSaving(false);
      if (result.success) {
        setSaveStatus({ message: 'Content reset to default settings!', type: 'success' });
        setTimeout(() => setSaveStatus({ message: '', type: '' }), 4000);
      }
    }
  };

  const updateSectionField = (section: keyof SiteContent, field: string, value: unknown) => {
    setFormData((prev) => ({
      ...prev,
      [section]: {
        ...prev[section],
        [field]: value,
      },
    }));
  };

  return (
    <div
      style={{
        minHeight: '100vh',
        background: '#F1F5F9',
        color: '#0F172A',
        fontFamily: 'var(--sans)',
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      {/* CMS DASHBOARD HEADER */}
      <header
        style={{
          background: '#FFFFFF',
          borderBottom: '1px solid #E2E8F0',
          boxShadow: '0 2px 10px rgba(0, 0, 0, 0.03)',
          padding: '16px 32px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          position: 'sticky',
          top: 0,
          zIndex: 1000,
          pointerEvents: 'auto',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
          <span
            style={{
              fontFamily: 'var(--serif)',
              fontSize: '24px',
              fontWeight: 800,
              color: '#946E29',
              letterSpacing: '0.08em',
            }}
          >
            TPR CMS
          </span>
          <span
            style={{
              background: 'rgba(184, 153, 94, 0.12)',
              border: '1px solid #B8995E',
              color: '#946E29',
              fontSize: '11px',
              fontFamily: 'var(--mono)',
              padding: '3px 8px',
              borderRadius: '6px',
              fontWeight: 700,
            }}
          >
            ADMIN DASHBOARD
          </span>
        </div>

        <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
          {saveStatus.message && (
            <span
              style={{
                fontSize: '13px',
                color: saveStatus.type === 'success' ? '#059669' : '#DC2626',
                marginRight: '12px',
                fontWeight: 600,
              }}
            >
              {saveStatus.message}
            </span>
          )}

          <Link
            href="/"
            target="_blank"
            style={{
              background: '#FFFFFF',
              color: '#0F172A',
              padding: '9px 16px',
              borderRadius: '8px',
              fontSize: '13px',
              fontWeight: 600,
              textDecoration: 'none',
              border: '1px solid #CBD5E1',
            }}
          >
            Live Preview
          </Link>

          <button
            onClick={handleReset}
            disabled={isSaving}
            style={{
              background: '#FEF2F2',
              color: '#DC2626',
              border: '1px solid #FCA5A5',
              padding: '9px 16px',
              borderRadius: '8px',
              fontSize: '13px',
              fontWeight: 600,
              cursor: 'pointer',
            }}
          >
            Reset Defaults
          </button>

          <button
            onClick={exportContentJson}
            title="Download content.json for updating your static host code"
            style={{
              background: '#F8FAFC',
              color: '#0F172A',
              padding: '9px 16px',
              borderRadius: '8px',
              fontSize: '13px',
              fontWeight: 600,
              cursor: 'pointer',
              border: '1px solid #CBD5E1',
            }}
          >
            Export content.json
          </button>

          <button
            onClick={handleSave}
            disabled={isSaving}
            style={{
              background: 'linear-gradient(135deg, #B8995E 0%, #946E29 100%)',
              color: '#FFFFFF',
              border: 'none',
              padding: '9px 24px',
              borderRadius: '8px',
              fontSize: '13.5px',
              fontWeight: 800,
              cursor: isSaving ? 'not-allowed' : 'pointer',
              boxShadow: '0 4px 14px rgba(184, 153, 94, 0.35)',
            }}
          >
            {isSaving ? 'Saving...' : 'Save All Changes'}
          </button>

          <button
            onClick={logoutAdmin}
            style={{
              background: 'transparent',
              color: '#64748B',
              border: 'none',
              fontSize: '13px',
              cursor: 'pointer',
              marginLeft: '8px',
              fontWeight: 600,
            }}
          >
            Logout
          </button>
        </div>
      </header>

      {/* DASHBOARD LAYOUT: SIDEBAR TABS + CONTENT PANELS */}
      <div style={{ display: 'flex', flex: 1, minHeight: 'calc(100vh - 65px)' }}>
        {/* SIDEBAR TABS */}
        <aside
          style={{
            width: '260px',
            background: '#F8FAFC',
            borderRight: '1px solid #E2E8F0',
            padding: '24px 16px',
            display: 'flex',
            flexDirection: 'column',
            gap: '6px',
          }}
        >
          <div
            style={{
              fontFamily: 'var(--mono)',
              fontSize: '11px',
              color: '#64748B',
              letterSpacing: '0.14em',
              fontWeight: 700,
              padding: '0 12px 10px 12px',
              textTransform: 'uppercase',
            }}
          >
            Website Sections
          </div>

          {([
            { id: 'hero', label: '1. Hero Section' },
            { id: 'philosophy', label: '2. Who We Are (Philosophy)' },
            { id: 'approach', label: '3. What Sets Us Apart' },
            { id: 'services', label: '4. Services (10 Items)' },
            { id: 'work', label: '5. Work & Portfolio' },
            { id: 'sectors', label: '6. Sectors We Serve' },
            { id: 'leadership', label: '7. Leadership Team' },
            { id: 'clientLogos', label: '8. Client Logos & Partners' },
            { id: 'contact', label: '9. Contact Info' },
            { id: 'footer', label: '10. Footer Section' },
          ] as const satisfies readonly { id: TabId; label: string }[]).map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              style={{
                display: 'flex',
                alignItems: 'center',
                padding: '12px 16px',
                borderRadius: '10px',
                border: 'none',
                background: activeTab === tab.id ? 'linear-gradient(135deg, #B8995E 0%, #946E29 100%)' : 'transparent',
                color: activeTab === tab.id ? '#FFFFFF' : '#475569',
                fontWeight: activeTab === tab.id ? 700 : 600,
                fontSize: '13.5px',
                cursor: 'pointer',
                textAlign: 'left',
                transition: 'all 0.2s ease',
                boxShadow: activeTab === tab.id ? '0 2px 8px rgba(184, 153, 94, 0.3)' : 'none',
              }}
            >
              <span>{tab.label}</span>
            </button>
          ))}
        </aside>

        {/* CONTENT EDITING PANELS */}
        <main style={{ flex: 1, padding: '36px 48px', overflowY: 'auto', maxWidth: '1000px' }}>
          {/* TAB 1: HERO */}
          {activeTab === 'hero' && (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
              <h2 style={{ fontSize: '24px', fontWeight: 800, color: '#946E29' }}>Hero Section Content</h2>

              <div>
                <label style={{ display: 'block', fontSize: '13px', color: '#475569', fontWeight: 600, marginBottom: '6px' }}>Kicker Tag</label>
                <input
                  type="text"
                  value={formData.hero.kicker}
                  onChange={(e) => updateSectionField('hero', 'kicker', e.target.value)}
                  style={inputStyle}
                />
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
                <div>
                  <label style={{ display: 'block', fontSize: '13px', color: '#475569', fontWeight: 600, marginBottom: '6px' }}>Main Title Heading</label>
                  <input
                    type="text"
                    value={formData.hero.title}
                    onChange={(e) => updateSectionField('hero', 'title', e.target.value)}
                    style={inputStyle}
                  />
                </div>
                <div>
                  <label style={{ display: 'block', fontSize: '13px', color: '#475569', fontWeight: 600, marginBottom: '6px' }}>Italic Subtitle</label>
                  <input
                    type="text"
                    value={formData.hero.italicTitle}
                    onChange={(e) => updateSectionField('hero', 'italicTitle', e.target.value)}
                    style={inputStyle}
                  />
                </div>
              </div>

              <div>
                <label style={{ display: 'block', fontSize: '13px', color: '#475569', fontWeight: 600, marginBottom: '6px' }}>Main Hero Lede Paragraph</label>
                <textarea
                  rows={4}
                  value={formData.hero.lede}
                  onChange={(e) => updateSectionField('hero', 'lede', e.target.value)}
                  style={inputStyle}
                />
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
                <div>
                  <label style={{ display: 'block', fontSize: '13px', color: '#475569', fontWeight: 600, marginBottom: '6px' }}>Primary Button Text</label>
                  <input
                    type="text"
                    value={formData.hero.primaryBtnText}
                    onChange={(e) => updateSectionField('hero', 'primaryBtnText', e.target.value)}
                    style={inputStyle}
                  />
                </div>
                <div>
                  <label style={{ display: 'block', fontSize: '13px', color: '#475569', fontWeight: 600, marginBottom: '6px' }}>Secondary Button Text</label>
                  <input
                    type="text"
                    value={formData.hero.secondaryBtnText}
                    onChange={(e) => updateSectionField('hero', 'secondaryBtnText', e.target.value)}
                    style={inputStyle}
                  />
                </div>
              </div>

              <h3 style={{ fontSize: '18px', fontWeight: 700, marginTop: '16px', color: '#0F172A' }}>Slideshow Background Images</h3>
              {formData.hero.slides.map((slide, sIdx) => (
                <div
                  key={sIdx}
                  style={{
                    background: '#FFFFFF',
                    border: '1px solid #E2E8F0',
                    boxShadow: '0 2px 8px rgba(0, 0, 0, 0.04)',
                    padding: '16px',
                    borderRadius: '12px',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '12px',
                  }}
                >
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr auto', gap: '16px', alignItems: 'center' }}>
                    <ImageUploadInput
                      label={`Slide ${sIdx + 1} Image URL / Upload`}
                      value={slide.src}
                      onChange={(newUrl) => {
                        const newSlides = [...formData.hero.slides];
                        newSlides[sIdx].src = newUrl;
                        updateSectionField('hero', 'slides', newSlides);
                      }}
                    />
                    <button
                      onClick={() => {
                        const newSlides = formData.hero.slides.filter((_, idx) => idx !== sIdx);
                        updateSectionField('hero', 'slides', newSlides);
                      }}
                      style={deleteBtnStyle}
                    >
                      Remove Slide
                    </button>
                  </div>

                  <div>
                    <label style={{ fontSize: '11px', color: '#475569', fontWeight: 600 }}>Slide Overlay Label</label>
                    <input
                      type="text"
                      value={slide.label}
                      onChange={(e) => {
                        const newSlides = [...formData.hero.slides];
                        newSlides[sIdx].label = e.target.value;
                        updateSectionField('hero', 'slides', newSlides);
                      }}
                      style={inputStyle}
                    />
                  </div>
                </div>
              ))}

              <button
                onClick={() => {
                  updateSectionField('hero', 'slides', [...formData.hero.slides, { src: '/hero1.png', label: 'NEW SLIDE' }]);
                }}
                style={addBtnStyle}
              >
                Add Slide
              </button>
            </div>
          )}

          {/* TAB 2: PHILOSOPHY */}
          {activeTab === 'philosophy' && (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
              <h2 style={{ fontSize: '24px', fontWeight: 800, color: '#946E29' }}>Philosophy & Who We Are</h2>

              <div>
                <label style={{ display: 'block', fontSize: '13px', color: '#475569', fontWeight: 600, marginBottom: '6px' }}>Kicker Tag</label>
                <input
                  type="text"
                  value={formData.philosophy.kicker}
                  onChange={(e) => updateSectionField('philosophy', 'kicker', e.target.value)}
                  style={inputStyle}
                />
              </div>

              <div>
                <label style={{ display: 'block', fontSize: '13px', color: '#475569', fontWeight: 600, marginBottom: '6px' }}>Main Title Heading</label>
                <textarea
                  rows={2}
                  value={formData.philosophy.title}
                  onChange={(e) => updateSectionField('philosophy', 'title', e.target.value)}
                  style={inputStyle}
                />
              </div>

              <div>
                <label style={{ display: 'block', fontSize: '13px', color: '#475569', fontWeight: 600, marginBottom: '6px' }}>Paragraph 1</label>
                <textarea
                  rows={4}
                  value={formData.philosophy.paragraph1}
                  onChange={(e) => updateSectionField('philosophy', 'paragraph1', e.target.value)}
                  style={inputStyle}
                />
              </div>

              <div>
                <label style={{ display: 'block', fontSize: '13px', color: '#475569', fontWeight: 600, marginBottom: '6px' }}>Paragraph 2</label>
                <textarea
                  rows={4}
                  value={formData.philosophy.paragraph2}
                  onChange={(e) => updateSectionField('philosophy', 'paragraph2', e.target.value)}
                  style={inputStyle}
                />
              </div>

              <div>
                <label style={{ display: 'block', fontSize: '13px', color: '#475569', fontWeight: 600, marginBottom: '6px' }}>Highlight Tagline</label>
                <input
                  type="text"
                  value={formData.philosophy.highlightText}
                  onChange={(e) => updateSectionField('philosophy', 'highlightText', e.target.value)}
                  style={inputStyle}
                />
              </div>

              <ImageUploadInput
                label="Philosophy Section Image"
                value={formData.philosophy.image}
                onChange={(newUrl) => updateSectionField('philosophy', 'image', newUrl)}
              />
            </div>
          )}

          {/* TAB 3: APPROACH */}
          {activeTab === 'approach' && (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
              <h2 style={{ fontSize: '24px', fontWeight: 800, color: '#946E29' }}>Approach & Pillars (5 Pillars)</h2>

              <div>
                <label style={{ display: 'block', fontSize: '13px', color: '#475569', fontWeight: 600, marginBottom: '6px' }}>Kicker Tag</label>
                <input
                  type="text"
                  value={formData.approach.kicker}
                  onChange={(e) => updateSectionField('approach', 'kicker', e.target.value)}
                  style={inputStyle}
                />
              </div>

              <div>
                <label style={{ display: 'block', fontSize: '13px', color: '#475569', fontWeight: 600, marginBottom: '6px' }}>Main Title</label>
                <input
                  type="text"
                  value={formData.approach.title}
                  onChange={(e) => updateSectionField('approach', 'title', e.target.value)}
                  style={inputStyle}
                />
              </div>

              <h3 style={{ fontSize: '18px', fontWeight: 700, marginTop: '12px', color: '#0F172A' }}>Pillars List</h3>
              {formData.approach.pillars.map((pillar, pIdx) => (
                <div
                  key={pIdx}
                  style={{
                    background: '#FFFFFF',
                    border: '1px solid #E2E8F0',
                    boxShadow: '0 2px 8px rgba(0, 0, 0, 0.04)',
                    padding: '20px',
                    borderRadius: '14px',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '12px',
                  }}
                >
                  <div style={{ display: 'grid', gridTemplateColumns: 'auto 1fr 1fr', gap: '16px', alignItems: 'center' }}>
                    <span style={{ fontFamily: 'var(--mono)', color: 'var(--gold)', fontWeight: 800 }}>Pillar {pillar.num}</span>
                    <input
                      type="text"
                      placeholder="Pillar Title"
                      value={pillar.title}
                      onChange={(e) => {
                        const newPillars = [...formData.approach.pillars];
                        newPillars[pIdx].title = e.target.value;
                        updateSectionField('approach', 'pillars', newPillars);
                      }}
                      style={inputStyle}
                    />
                    <input
                      type="text"
                      placeholder="Tag (e.g. EVIDENCE-BASED)"
                      value={pillar.tag}
                      onChange={(e) => {
                        const newPillars = [...formData.approach.pillars];
                        newPillars[pIdx].tag = e.target.value;
                        updateSectionField('approach', 'pillars', newPillars);
                      }}
                      style={inputStyle}
                    />
                  </div>

                  <textarea
                    rows={3}
                    placeholder="Pillar Description"
                    value={pillar.description}
                    onChange={(e) => {
                      const newPillars = [...formData.approach.pillars];
                      newPillars[pIdx].description = e.target.value;
                      updateSectionField('approach', 'pillars', newPillars);
                    }}
                    style={inputStyle}
                  />
                </div>
              ))}
            </div>
          )}

          {/* TAB 4: SERVICES */}
          {activeTab === 'services' && (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
              <h2 style={{ fontSize: '24px', fontWeight: 800, color: '#946E29' }}>Services Offered</h2>

              <div>
                <label style={{ display: 'block', fontSize: '13px', color: '#475569', fontWeight: 600, marginBottom: '6px' }}>Section Kicker</label>
                <input
                  type="text"
                  value={formData.services.kicker}
                  onChange={(e) => updateSectionField('services', 'kicker', e.target.value)}
                  style={inputStyle}
                />
              </div>

              <div>
                <label style={{ display: 'block', fontSize: '13px', color: '#475569', fontWeight: 600, marginBottom: '6px' }}>Main Section Title</label>
                <input
                  type="text"
                  value={formData.services.title}
                  onChange={(e) => updateSectionField('services', 'title', e.target.value)}
                  style={inputStyle}
                />
              </div>

              <div>
                <label style={{ display: 'block', fontSize: '13px', color: '#475569', fontWeight: 600, marginBottom: '6px' }}>Subtitle</label>
                <textarea
                  rows={2}
                  value={formData.services.sub}
                  onChange={(e) => updateSectionField('services', 'sub', e.target.value)}
                  style={inputStyle}
                />
              </div>

              <h3 style={{ fontSize: '18px', fontWeight: 700, marginTop: '12px', color: '#0F172A' }}>Service Cards ({formData.services.items.length})</h3>

              {formData.services.items.map((service, sIdx) => (
                <div
                  key={sIdx}
                  style={{
                    background: '#FFFFFF',
                    border: '1px solid #E2E8F0',
                    boxShadow: '0 2px 8px rgba(0, 0, 0, 0.04)',
                    padding: '20px',
                    borderRadius: '14px',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '12px',
                  }}
                >
                  <div style={{ display: 'grid', gridTemplateColumns: 'auto 1fr auto', gap: '16px', alignItems: 'center' }}>
                    <span style={{ fontFamily: 'var(--mono)', color: '#946E29', fontWeight: 800 }}>{service.num}</span>
                    <input
                      type="text"
                      placeholder="Service Title"
                      value={service.title}
                      onChange={(e) => {
                        const newItems = [...formData.services.items];
                        newItems[sIdx].title = e.target.value;
                        updateSectionField('services', 'items', newItems);
                      }}
                      style={inputStyle}
                    />
                    <button
                      onClick={() => {
                        const newItems = formData.services.items.filter((_, idx) => idx !== sIdx);
                        updateSectionField('services', 'items', newItems);
                      }}
                      style={deleteBtnStyle}
                    >
                      Delete
                    </button>
                  </div>

                  <textarea
                    rows={3}
                    placeholder="Description"
                    value={service.description}
                    onChange={(e) => {
                      const newItems = [...formData.services.items];
                      newItems[sIdx].description = e.target.value;
                      updateSectionField('services', 'items', newItems);
                    }}
                    style={inputStyle}
                  />

                  <div>
                    <label style={{ fontSize: '11px', color: '#475569', fontWeight: 600 }}>Tags (comma-separated)</label>
                    <input
                      type="text"
                      value={service.tags.join(', ')}
                      onChange={(e) => {
                        const newItems = [...formData.services.items];
                        newItems[sIdx].tags = e.target.value.split(',').map((t) => t.trim()).filter(Boolean);
                        updateSectionField('services', 'items', newItems);
                      }}
                      style={inputStyle}
                    />
                  </div>
                </div>
              ))}

              <button
                onClick={() => {
                  const numStr = (formData.services.items.length + 1).toString().padStart(2, '0');
                  updateSectionField('services', 'items', [
                    ...formData.services.items,
                    { num: numStr, title: 'New Service', description: 'Service description here...', icon: 'newspaper', tags: ['Strategic PR'] },
                  ]);
                }}
                style={addBtnStyle}
              >
                + Add New Service Card
              </button>
            </div>
          )}

          {/* TAB 5: WORK */}
          {activeTab === 'work' && (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
              <h2 style={{ fontSize: '24px', fontWeight: 800, color: '#946E29' }}>Work & Portfolio</h2>

              <div>
                <label style={{ display: 'block', fontSize: '13px', color: '#475569', fontWeight: 600, marginBottom: '6px' }}>Section Kicker</label>
                <input
                  type="text"
                  value={formData.work.kicker}
                  onChange={(e) => updateSectionField('work', 'kicker', e.target.value)}
                  style={inputStyle}
                />
              </div>

              <div>
                <label style={{ display: 'block', fontSize: '13px', color: '#475569', fontWeight: 600, marginBottom: '6px' }}>Section Main Title</label>
                <textarea
                  rows={2}
                  value={formData.work.title}
                  onChange={(e) => updateSectionField('work', 'title', e.target.value)}
                  style={inputStyle}
                />
              </div>

              <h3 style={{ fontSize: '18px', fontWeight: 700, marginTop: '12px', color: '#0F172A' }}>Work Showcase Items</h3>

              {formData.work.items.map((item, wIdx) => (
                <div
                  key={wIdx}
                  style={{
                    background: '#FFFFFF',
                    border: '1px solid #E2E8F0',
                    boxShadow: '0 2px 8px rgba(0, 0, 0, 0.04)',
                    padding: '20px',
                    borderRadius: '14px',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '14px',
                  }}
                >
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr auto', gap: '16px', alignItems: 'center' }}>
                    <input
                      type="text"
                      placeholder="Title"
                      value={item.title}
                      onChange={(e) => {
                        const newWork = [...formData.work.items];
                        newWork[wIdx].title = e.target.value;
                        updateSectionField('work', 'items', newWork);
                      }}
                      style={inputStyle}
                    />
                    <input
                      type="text"
                      placeholder="Tag (e.g. Policy & Governance)"
                      value={item.tag}
                      onChange={(e) => {
                        const newWork = [...formData.work.items];
                        newWork[wIdx].tag = e.target.value;
                        updateSectionField('work', 'items', newWork);
                      }}
                      style={inputStyle}
                    />
                    <button
                      onClick={() => {
                        const newWork = formData.work.items.filter((_, idx) => idx !== wIdx);
                        updateSectionField('work', 'items', newWork);
                      }}
                      style={deleteBtnStyle}
                    >
                      Delete
                    </button>
                  </div>

                  <ImageUploadInput
                    label="Showcase Image URL / Upload"
                    value={item.image}
                    onChange={(newUrl) => {
                      const newWork = [...formData.work.items];
                      newWork[wIdx].image = newUrl;
                      updateSectionField('work', 'items', newWork);
                    }}
                  />

                  <textarea
                    rows={3}
                    placeholder="Description"
                    value={item.description}
                    onChange={(e) => {
                      const newWork = [...formData.work.items];
                      newWork[wIdx].description = e.target.value;
                      updateSectionField('work', 'items', newWork);
                    }}
                    style={inputStyle}
                  />
                </div>
              ))}

              <button
                onClick={() => {
                  updateSectionField('work', 'items', [
                    ...formData.work.items,
                    {
                      id: `item-${Date.now()}`,
                      title: 'New Work Item',
                      tag: 'Strategic PR',
                      image: '/assets/tier1.png',
                      description: 'Description of the work showcase...',
                    },
                  ]);
                }}
                style={addBtnStyle}
              >
                Add Work Showcase Item
              </button>
            </div>
          )}

          {/* TAB 6: SECTORS */}
          {activeTab === 'sectors' && (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
              <h2 style={{ fontSize: '24px', fontWeight: 800, color: '#946E29' }}>Sectors We Serve</h2>

              <div>
                <label style={{ display: 'block', fontSize: '13px', color: '#475569', fontWeight: 600, marginBottom: '6px' }}>Kicker</label>
                <input
                  type="text"
                  value={formData.sectors.kicker}
                  onChange={(e) => updateSectionField('sectors', 'kicker', e.target.value)}
                  style={inputStyle}
                />
              </div>

              <div>
                <label style={{ display: 'block', fontSize: '13px', color: '#475569', fontWeight: 600, marginBottom: '6px' }}>Section Title</label>
                <input
                  type="text"
                  value={formData.sectors.title}
                  onChange={(e) => updateSectionField('sectors', 'title', e.target.value)}
                  style={inputStyle}
                />
              </div>

              <h3 style={{ fontSize: '18px', fontWeight: 700, marginTop: '12px', color: '#0F172A' }}>Sector Cards ({formData.sectors.items.length})</h3>

              {formData.sectors.items.map((sec, secIdx) => (
                <div
                  key={secIdx}
                  style={{
                    background: '#FFFFFF',
                    border: '1px solid #E2E8F0',
                    boxShadow: '0 2px 8px rgba(0, 0, 0, 0.04)',
                    padding: '20px',
                    borderRadius: '14px',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '14px',
                  }}
                >
                  <div style={{ display: 'grid', gridTemplateColumns: 'auto 1fr auto', gap: '16px', alignItems: 'center' }}>
                    <span style={{ fontFamily: 'var(--mono)', color: '#946E29', fontWeight: 800 }}>{sec.num}</span>
                    <input
                      type="text"
                      placeholder="Sector Title (e.g. FMCG)"
                      value={sec.title}
                      onChange={(e) => {
                        const newSectors = [...formData.sectors.items];
                        newSectors[secIdx].title = e.target.value;
                        updateSectionField('sectors', 'items', newSectors);
                      }}
                      style={inputStyle}
                    />
                    <button
                      onClick={() => {
                        const newSectors = formData.sectors.items.filter((_, idx) => idx !== secIdx);
                        updateSectionField('sectors', 'items', newSectors);
                      }}
                      style={deleteBtnStyle}
                    >
                      Delete
                    </button>
                  </div>

                  <ImageUploadInput
                    label="Sector Background Image"
                    value={sec.image}
                    onChange={(newUrl) => {
                      const newSectors = [...formData.sectors.items];
                      newSectors[secIdx].image = newUrl;
                      updateSectionField('sectors', 'items', newSectors);
                    }}
                  />

                  <div>
                    <label style={{ fontSize: '11px', color: '#475569', fontWeight: 600 }}>Short Description</label>
                    <input
                      type="text"
                      value={sec.description}
                      onChange={(e) => {
                        const newSectors = [...formData.sectors.items];
                        newSectors[secIdx].description = e.target.value;
                        updateSectionField('sectors', 'items', newSectors);
                      }}
                      style={inputStyle}
                    />
                  </div>

                  <div>
                    <label style={{ fontSize: '11px', color: '#475569', fontWeight: 600 }}>Detailed Copy</label>
                    <textarea
                      rows={2}
                      value={sec.detailedCopy}
                      onChange={(e) => {
                        const newSectors = [...formData.sectors.items];
                        newSectors[secIdx].detailedCopy = e.target.value;
                        updateSectionField('sectors', 'items', newSectors);
                      }}
                      style={inputStyle}
                    />
                  </div>

                  <div>
                    <label style={{ fontSize: '11px', color: '#475569', fontWeight: 600 }}>Benchmark Highlight Quote</label>
                    <input
                      type="text"
                      value={sec.caseHighlight}
                      onChange={(e) => {
                        const newSectors = [...formData.sectors.items];
                        newSectors[secIdx].caseHighlight = e.target.value;
                        updateSectionField('sectors', 'items', newSectors);
                      }}
                      style={inputStyle}
                    />
                  </div>
                </div>
              ))}

              <button
                onClick={() => {
                  const numStr = (formData.sectors.items.length + 1).toString().padStart(2, '0');
                  updateSectionField('sectors', 'items', [
                    ...formData.sectors.items,
                    {
                      id: `sector-${Date.now()}`,
                      num: numStr,
                      icon: 'landmark',
                      image: '/assets/fmcg.jpg',
                      title: 'NEW SECTOR',
                      description: 'Short sector overview description...',
                      detailedCopy: 'Detailed sector communication copy...',
                      caseHighlight: 'Key sector benchmark case highlight quote...',
                    },
                  ]);
                }}
                style={addBtnStyle}
              >
                Add Sector Card
              </button>
            </div>
          )}

          {/* TAB 7: LEADERSHIP */}
          {activeTab === 'leadership' && (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
              <h2 style={{ fontSize: '24px', fontWeight: 800, color: '#946E29' }}>Leadership & Team</h2>

              <div>
                <label style={{ display: 'block', fontSize: '13px', color: '#475569', fontWeight: 600, marginBottom: '6px' }}>Kicker</label>
                <input
                  type="text"
                  value={formData.leadership.kicker}
                  onChange={(e) => updateSectionField('leadership', 'kicker', e.target.value)}
                  style={inputStyle}
                />
              </div>

              <div>
                <label style={{ display: 'block', fontSize: '13px', color: '#475569', fontWeight: 600, marginBottom: '6px' }}>Title</label>
                <input
                  type="text"
                  value={formData.leadership.title}
                  onChange={(e) => updateSectionField('leadership', 'title', e.target.value)}
                  style={inputStyle}
                />
              </div>

              <div>
                <label style={{ display: 'block', fontSize: '13px', color: '#475569', fontWeight: 600, marginBottom: '6px' }}>Sub-heading</label>
                <input
                  type="text"
                  value={formData.leadership.sub}
                  onChange={(e) => updateSectionField('leadership', 'sub', e.target.value)}
                  style={inputStyle}
                />
              </div>

              <h3 style={{ fontSize: '18px', fontWeight: 700, marginTop: '12px', color: '#0F172A' }}>Team Members</h3>

              {formData.leadership.members.map((member, mIdx) => (
                <div
                  key={mIdx}
                  style={{
                    background: '#FFFFFF',
                    border: '1px solid #E2E8F0',
                    boxShadow: '0 2px 8px rgba(0, 0, 0, 0.04)',
                    padding: '20px',
                    borderRadius: '14px',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '14px',
                  }}
                >
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr auto', gap: '16px', alignItems: 'center' }}>
                    <input
                      type="text"
                      placeholder="Name"
                      value={member.name}
                      onChange={(e) => {
                        const newMembers = [...formData.leadership.members];
                        newMembers[mIdx].name = e.target.value;
                        updateSectionField('leadership', 'members', newMembers);
                      }}
                      style={inputStyle}
                    />
                    <input
                      type="text"
                      placeholder="Role"
                      value={member.role}
                      onChange={(e) => {
                        const newMembers = [...formData.leadership.members];
                        newMembers[mIdx].role = e.target.value;
                        updateSectionField('leadership', 'members', newMembers);
                      }}
                      style={inputStyle}
                    />
                    <button
                      onClick={() => {
                        const newMembers = formData.leadership.members.filter((_, idx) => idx !== mIdx);
                        updateSectionField('leadership', 'members', newMembers);
                      }}
                      style={deleteBtnStyle}
                    >
                      Delete
                    </button>
                  </div>

                  <ImageUploadInput
                    label="Team Member Photo"
                    value={member.image}
                    onChange={(newUrl) => {
                      const newMembers = [...formData.leadership.members];
                      newMembers[mIdx].image = newUrl;
                      updateSectionField('leadership', 'members', newMembers);
                    }}
                  />

                  <textarea
                    rows={2}
                    placeholder="Expertise & Bio"
                    value={member.expertise}
                    onChange={(e) => {
                      const newMembers = [...formData.leadership.members];
                      newMembers[mIdx].expertise = e.target.value;
                      updateSectionField('leadership', 'members', newMembers);
                    }}
                    style={inputStyle}
                  />
                </div>
              ))}

              <button
                onClick={() => {
                  updateSectionField('leadership', 'members', [
                    ...formData.leadership.members,
                    {
                      name: 'New Leader Name',
                      role: 'Senior Advisor',
                      image: '/member1.jpeg',
                      expertise: 'Expertise summary...',
                    },
                  ]);
                }}
                style={addBtnStyle}
              >
                Add Leader Member
              </button>
            </div>
          )}

          {/* TAB 8: CLIENT LOGOS */}
          {activeTab === 'clientLogos' && (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
              <h2 style={{ fontSize: '24px', fontWeight: 800, color: '#946E29' }}>Client Logos & Partners</h2>

              <div>
                <label style={{ display: 'block', fontSize: '13px', color: '#475569', fontWeight: 600, marginBottom: '6px' }}>Kicker</label>
                <input
                  type="text"
                  value={formData.clientLogos.kicker}
                  onChange={(e) => updateSectionField('clientLogos', 'kicker', e.target.value)}
                  style={inputStyle}
                />
              </div>

              <div>
                <label style={{ display: 'block', fontSize: '13px', color: '#475569', fontWeight: 600, marginBottom: '6px' }}>Title</label>
                <input
                  type="text"
                  value={formData.clientLogos.title}
                  onChange={(e) => updateSectionField('clientLogos', 'title', e.target.value)}
                  style={inputStyle}
                />
              </div>

              <div>
                <label style={{ display: 'block', fontSize: '13px', color: '#475569', fontWeight: 600, marginBottom: '6px' }}>Subtitle</label>
                <input
                  type="text"
                  value={formData.clientLogos.sub}
                  onChange={(e) => updateSectionField('clientLogos', 'sub', e.target.value)}
                  style={inputStyle}
                />
              </div>

              <h3 style={{ fontSize: '18px', fontWeight: 700, marginTop: '12px', color: '#0F172A' }}>
                Partners List ({formData.clientLogos.partners.length})
              </h3>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
                {formData.clientLogos.partners.map((partner, pIdx) => (
                  <div
                    key={pIdx}
                    style={{
                      background: '#FFFFFF',
                      border: '1px solid #E2E8F0',
                      boxShadow: '0 2px 8px rgba(0, 0, 0, 0.04)',
                      padding: '16px',
                      borderRadius: '12px',
                      display: 'flex',
                      flexDirection: 'column',
                      gap: '12px',
                    }}
                  >
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr auto', gap: '14px', alignItems: 'center' }}>
                      <input
                        type="text"
                        placeholder="Partner Name"
                        value={partner.name}
                        onChange={(e) => {
                          const newPartners = [...formData.clientLogos.partners];
                          newPartners[pIdx].name = e.target.value;
                          updateSectionField('clientLogos', 'partners', newPartners);
                        }}
                        style={inputStyle}
                      />

                      <button
                        onClick={() => {
                          const newPartners = formData.clientLogos.partners.filter((_, idx) => idx !== pIdx);
                          updateSectionField('clientLogos', 'partners', newPartners);
                        }}
                        style={deleteBtnStyle}
                      >
                        Delete
                      </button>
                    </div>

                    <ImageUploadInput
                      label="Partner Logo Image"
                      value={partner.logo || ''}
                      onChange={(newUrl) => {
                        const newPartners = [...formData.clientLogos.partners];
                        newPartners[pIdx].logo = newUrl || undefined;
                        updateSectionField('clientLogos', 'partners', newPartners);
                      }}
                    />
                  </div>
                ))}
              </div>

              <button
                onClick={() => {
                  updateSectionField('clientLogos', 'partners', [
                    ...formData.clientLogos.partners,
                    { name: 'New Partner', logo: '/logo1.png' },
                  ]);
                }}
                style={addBtnStyle}
              >
                Add Partner Logo
              </button>
            </div>
          )}

          {/* TAB 9: CONTACT */}
          {activeTab === 'contact' && (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
              <h2 style={{ fontSize: '24px', fontWeight: 800, color: '#946E29' }}>Contact Section</h2>

              <div>
                <label style={{ display: 'block', fontSize: '13px', color: '#475569', fontWeight: 600, marginBottom: '6px' }}>Kicker</label>
                <input
                  type="text"
                  value={formData.contact.kicker}
                  onChange={(e) => updateSectionField('contact', 'kicker', e.target.value)}
                  style={inputStyle}
                />
              </div>

              <div>
                <label style={{ display: 'block', fontSize: '13px', color: '#475569', fontWeight: 600, marginBottom: '6px' }}>Title</label>
                <input
                  type="text"
                  value={formData.contact.title}
                  onChange={(e) => updateSectionField('contact', 'title', e.target.value)}
                  style={inputStyle}
                />
              </div>

              <div>
                <label style={{ display: 'block', fontSize: '13px', color: '#475569', fontWeight: 600, marginBottom: '6px' }}>Description Lede</label>
                <textarea
                  rows={3}
                  value={formData.contact.lede}
                  onChange={(e) => updateSectionField('contact', 'lede', e.target.value)}
                  style={inputStyle}
                />
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
                <div>
                  <label style={{ display: 'block', fontSize: '13px', color: '#475569', fontWeight: 600, marginBottom: '6px' }}>Address</label>
                  <input
                    type="text"
                    value={formData.contact.address}
                    onChange={(e) => updateSectionField('contact', 'address', e.target.value)}
                    style={inputStyle}
                  />
                </div>
                <div>
                  <label style={{ display: 'block', fontSize: '13px', color: '#475569', fontWeight: 600, marginBottom: '6px' }}>Email</label>
                  <input
                    type="text"
                    value={formData.contact.email}
                    onChange={(e) => updateSectionField('contact', 'email', e.target.value)}
                    style={inputStyle}
                  />
                </div>
              </div>

              <div>
                <label style={{ display: 'block', fontSize: '13px', color: '#475569', fontWeight: 600, marginBottom: '6px' }}>Phone</label>
                <input
                  type="text"
                  value={formData.contact.phone}
                  onChange={(e) => updateSectionField('contact', 'phone', e.target.value)}
                  style={inputStyle}
                />
              </div>
            </div>
          )}

          {/* TAB 10: FOOTER */}
          {activeTab === 'footer' && (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
              <h2 style={{ fontSize: '24px', fontWeight: 800, color: '#946E29' }}>Footer Branding</h2>

              <div>
                <label style={{ display: 'block', fontSize: '13px', color: '#475569', fontWeight: 600, marginBottom: '6px' }}>Brand Tagline</label>
                <input
                  type="text"
                  value={formData.footer.tagline}
                  onChange={(e) => updateSectionField('footer', 'tagline', e.target.value)}
                  style={inputStyle}
                />
              </div>

              <div>
                <label style={{ display: 'block', fontSize: '13px', color: '#475569', fontWeight: 600, marginBottom: '6px' }}>Copyright Text</label>
                <input
                  type="text"
                  value={formData.footer.copyright}
                  onChange={(e) => updateSectionField('footer', 'copyright', e.target.value)}
                  style={inputStyle}
                />
              </div>
            </div>
          )}
        </main>
      </div>
    </div>
  );
}

const inputStyle: React.CSSProperties = {
  width: '100%',
  background: '#FFFFFF',
  border: '1.5px solid #CBD5E1',
  borderRadius: '8px',
  padding: '10px 14px',
  fontSize: '14px',
  color: '#0F172A',
  outline: 'none',
  fontFamily: 'var(--sans)',
  transition: 'all 0.2s ease',
};

const deleteBtnStyle: React.CSSProperties = {
  background: '#FEF2F2',
  color: '#DC2626',
  border: '1px solid #FCA5A5',
  borderRadius: '6px',
  padding: '6px 12px',
  fontSize: '12px',
  cursor: 'pointer',
  fontWeight: 600,
};

const addBtnStyle: React.CSSProperties = {
  alignSelf: 'flex-start',
  background: '#FFFFFF',
  border: '1.5px dashed #B8995E',
  color: '#946E29',
  borderRadius: '10px',
  padding: '12px 20px',
  fontSize: '13.5px',
  fontWeight: 700,
  cursor: 'pointer',
  marginTop: '8px',
};
