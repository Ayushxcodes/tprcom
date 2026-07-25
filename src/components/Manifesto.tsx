import React from 'react';

export function Manifesto() {
  return (
    <section className="manifesto">
      <div className="manifesto-bg">
        <img src="https://picsum.photos/seed/tpr-manifesto-2026/1800/900" alt="" role="presentation" />
      </div>
      <div className="wrap">
        <blockquote className="reveal">
          &ldquo;Perception is not an accident. It is authored, defended, and earned — one sentence, one story, one relationship at a time.&rdquo;
        </blockquote>
        <div className="rule"></div>
      </div>
    </section>
  );
}
