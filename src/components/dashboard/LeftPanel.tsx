import React from 'react';

export default function LeftPanel() {
  return (
    <div className="devos-panel">
      <h2 className="accent mono" style={{ marginBottom: 24 }}>IDENTITY</h2>
      
      <div style={{ marginBottom: 28 }}>
        <h1 style={{ margin: 0, fontSize: 22, letterSpacing: 1 }}>DARPAN KANANI</h1>
        <div className="muted mono" style={{ fontSize: 13, marginTop: 4 }}>Software Development Engineer 1</div>
        <div className="muted mono" style={{ fontSize: 12, marginTop: 2 }}>Star Health and Allied Insurance</div>
        <div className="muted mono" style={{ fontSize: 11, marginTop: 2 }}>Gurugram, Haryana, India</div>
      </div>

      <div style={{ marginBottom: 24 }}>
        <div className="muted mono" style={{ fontSize: 12, marginBottom: 8 }}>CURRENT STATUS</div>
        <div className="status-indicator" style={{ background: 'rgba(0, 255, 204, 0.1)', padding: '8px 12px', border: '1px solid rgba(0, 255, 204, 0.2)' }}>
          <div className="status-dot"></div>
          OPEN TO OPPORTUNITIES
        </div>
      </div>

      <div className="mono" style={{ fontSize: 13, display: 'flex', flexDirection: 'column', gap: 10, marginBottom: 28 }}>
        <div><span className="muted">Experience: </span>2+ Years</div>
        <div><span className="muted">Education:  </span>B.Tech CS, IIIT Vadodara (2020 - 2024)</div>
        <div><span className="muted">DSA Solved: </span>600+ Problems</div>
        <div><span className="muted">Prod Bugs:  </span>40+ Fixed</div>
      </div>

      <div style={{ paddingTop: 20, borderTop: '1px solid var(--border-color)' }}>
        <div className="muted mono" style={{ fontSize: 12, marginBottom: 12 }}>SYS_CONFIG.YAML</div>
        <pre className="mono" style={{ fontSize: 11, background: 'rgba(0,0,0,0.3)', padding: 12, border: '1px solid var(--border-color)', whiteSpace: 'pre-wrap', lineHeight: 1.7 }}
             dangerouslySetInnerHTML={{ __html: `<span class="yaml-key">developer:</span>
  <span class="yaml-key">name:</span> <span class="yaml-value">"Darpan Kanani"</span>
  <span class="yaml-key">role:</span> <span class="yaml-value">"SDE-1"</span>
  <span class="yaml-key">company:</span> <span class="yaml-value">"Star Health"</span>

<span class="yaml-key">stack:</span>
  - <span class="yaml-array">Java</span>
  - <span class="yaml-array">Spring Boot</span>
  - <span class="yaml-array">MySQL</span>
  - <span class="yaml-array">Redis</span>
  - <span class="yaml-array">Kafka</span>
  - <span class="yaml-array">Docker</span>
  - <span class="yaml-array">AWS</span>

<span class="yaml-key">certifications:</span>
  - <span class="yaml-array">AWS Cloud Practitioner</span>
  - <span class="yaml-array">Spring Security 6</span>
  - <span class="yaml-array">Spring Microservices</span>` }}
        />
      </div>
    </div>
  );
}
