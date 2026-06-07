import React from 'react';
import Image from 'next/image';
import { experiences } from '@/static/Experience';

const skills = [
  {
    name: 'Languages',
    items: ['Java', 'C'],
  },
  {
    name: 'Frameworks',
    items: ['Spring Boot', 'Spring AI', 'Spring MVC', 'Spring Security', 'Spring Data JPA', 'Hibernate', 'JUnit', 'Mockito', 'Angular', 'React.js'],
  },
  {
    name: 'Databases_&_Caching',
    items: ['MySQL', 'PostgreSQL', 'Redis', 'Elasticsearch'],
  },
  {
    name: 'Cloud_&_DevOps',
    items: ['AWS (Cloud Practitioner)', 'Docker', 'Jenkins', 'Kafka', 'Git', 'Linux', 'Postman'],
  },
  {
    name: 'Concepts',
    items: ['REST APIs', 'Microservices Architecture', 'OOP', 'Design Patterns', 'Agile / Scrum', 'Maven', 'Unit Testing'],
  },
];

const education = [
  { institution: 'IIIT Vadodara', degree: 'B.Tech — Computer Science', grade: 'CPI: 7.0/10', period: 'Dec 2020 – Dec 2024' },
  { institution: 'S.S. Divine School', degree: 'Senior Secondary (XII)', grade: '74%', period: 'Mar 2019 – Mar 2020' },
  { institution: 'Modi School', degree: 'Secondary (X)', grade: '91%', period: 'Mar 2017 – Mar 2018' },
];

const certifications = [
  { name: 'AWS Cloud Practitioner Essentials', issuer: 'Amazon Web Services' },
  { name: 'Spring Boot – Microservices', issuer: 'Udemy' },
  { name: 'Spring Boot 3, REST, JPA, Hibernate', issuer: 'Udemy' },
  { name: 'Spring Security 6', issuer: 'Udemy' },
  { name: 'SQL', issuer: 'HackerRank' },
];

const achievements = [
  'Resolved 15+ critical production bugs at Dash Technologies',
  'Solved 600+ DSA problems on LeetCode & CodeChef',
  'Boosted system performance 10x via Redis Template integration',
  'Resolved 2200+ static analysis blockers in CI/CD pipeline',
];

export default function RightPanel() {
  return (
    <div className="devos-panel">

      {/* ── Experience ── */}
      <h2 id="experience" className="accent mono" style={{ marginBottom: 20 }}>EXPERIENCE: ACTIVITY_LOG</h2>
      <div className="mono" style={{ fontSize: 12, display: 'flex', flexDirection: 'column', gap: 16, marginBottom: 40 }}>
        {experiences.map((exp, idx) => (
          <div key={idx} style={{ borderLeft: idx === 0 ? '2px solid var(--accent-color)' : '2px solid var(--border-color)', paddingLeft: 12 }}>
            <span className="muted">[{exp.date}]</span><br />
            <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginTop: 4 }}>
              {exp.logo && exp.logo[0] && (
                <Image src={exp.logo[0]} alt={exp.title} width={20} height={20} style={{ borderRadius: 3 }} />
              )}
              <span style={{ color: 'var(--text-main)', textTransform: 'uppercase', fontWeight: 600 }}>
                {exp.title}
              </span>
            </div>
            <div className="muted" style={{ marginBottom: 4 }}>{exp.position}</div>
            {exp.desc.map((d, dIdx) => (
              <span key={dIdx} className="muted" style={{ display: 'block', marginTop: 4, lineHeight: 1.5 }}>• {d}</span>
            ))}
          </div>
        ))}
      </div>

      {/* ── Skills ── */}
      <h2 id="skills" className="accent mono" style={{ marginBottom: 20 }}>SKILLS: INFRA_TOPOLOGY</h2>
      <div className="mono" style={{ fontSize: 12, lineHeight: 1.8, marginBottom: 40 }}>
        {skills.map((layer, lIdx) => (
          <div key={lIdx} style={{ marginBottom: 14 }}>
            <div style={{ color: 'var(--text-main)', marginBottom: 2 }}>{layer.name}/</div>
            <div className="muted">
              {layer.items.map((item, iIdx) => (
                <div key={iIdx}>
                  {iIdx < layer.items.length - 1 ? '├── ' : '└── '}
                  {item}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* ── Education ── */}
      <h2 className="accent mono" style={{ marginBottom: 20 }}>EDUCATION: BOOT_LOG</h2>
      <div className="mono" style={{ fontSize: 12, display: 'flex', flexDirection: 'column', gap: 14, marginBottom: 40 }}>
        {education.map((e, idx) => (
          <div key={idx} style={{ borderLeft: idx === 0 ? '2px solid var(--accent-color)' : '2px solid var(--border-color)', paddingLeft: 12 }}>
            <div style={{ color: 'var(--text-main)', fontWeight: 600 }}>{e.institution}</div>
            <div className="muted">{e.degree}</div>
            <div style={{ display: 'flex', gap: 16, marginTop: 2 }}>
              <span style={{ color: 'var(--accent-color)', fontSize: 11 }}>{e.grade}</span>
              <span className="muted" style={{ fontSize: 11 }}>{e.period}</span>
            </div>
          </div>
        ))}
      </div>

      {/* ── Certifications & Achievements ── */}
      <h2 className="accent mono" style={{ marginBottom: 20 }}>CERTS: VERIFIED_MODULES</h2>
      <div className="mono" style={{ fontSize: 12, marginBottom: 32 }}>
        {certifications.map((c, idx) => (
          <div key={idx} style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 6 }}>
            <span className="muted">{idx < certifications.length - 1 ? '├── ' : '└── '}{c.name}</span>
            <span style={{ color: 'var(--accent-color)', fontSize: 10, marginLeft: 8, flexShrink: 0 }}>{c.issuer}</span>
          </div>
        ))}
      </div>

      <h2 className="accent mono" style={{ marginBottom: 16 }}>ACHIEVEMENTS</h2>
      <div className="mono" style={{ fontSize: 12 }}>
        {achievements.map((a, idx) => (
          <div key={idx} className="muted" style={{ marginBottom: 8, lineHeight: 1.5 }}>
            {idx < achievements.length - 1 ? '├── ' : '└── '}{a}
          </div>
        ))}
      </div>

    </div>
  );
}
