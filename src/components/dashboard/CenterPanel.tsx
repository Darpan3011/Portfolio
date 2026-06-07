"use client";

import React, { useEffect, useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { projects } from '@/static/Project';
import { experiences } from '@/static/Experience';

// ── Animated Counter ──────────────────────────────────────────
function AnimatedCounter({ from, to, duration = 2 }: { from: number; to: number; duration?: number }) {
  const [count, setCount] = useState(from);
  useEffect(() => {
    let startTimestamp: number;
    const step = (timestamp: number) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / (duration * 1000), 1);
      setCount(Math.floor(progress * (to - from) + from));
      if (progress < 1) window.requestAnimationFrame(step);
    };
    window.requestAnimationFrame(step);
  }, [from, to, duration]);
  return <span>{count}</span>;
}

// ── Available Commands ────────────────────────────────────────
const AVAILABLE_COMMANDS = [
  { cmd: 'help', desc: 'List available commands' },
  { cmd: 'metrics', desc: 'Show live system metrics' },
  { cmd: 'projects', desc: 'List all deployed services' },
  { cmd: 'experience', desc: 'View work history' },
  { cmd: 'skills', desc: 'Display infrastructure topology' },
  { cmd: 'education', desc: 'View academic background' },
  { cmd: 'certifications', desc: 'List certifications & achievements' },
  { cmd: 'about', desc: 'Show system configuration' },
  { cmd: 'contact', desc: 'Open communication channel' },
  { cmd: 'clear', desc: 'Clear terminal output' },
];

// ── Terminal Line Types ───────────────────────────────────────
type TerminalEntry = {
  id: number;
  type: 'input' | 'output' | 'error' | 'system';
  content: React.ReactNode;
};

// ── Render Functions ──────────────────────────────────────────
function renderHelp(): React.ReactNode {
  return (
    <div style={{ fontFamily: 'var(--font-mono)', fontSize: 13 }}>
      <div className="accent" style={{ marginBottom: 12 }}>AVAILABLE COMMANDS:</div>
      <table style={{ borderCollapse: 'collapse', width: '100%' }}>
        <tbody>
          {AVAILABLE_COMMANDS.map(c => (
            <tr key={c.cmd}>
              <td style={{ padding: '4px 24px 4px 0', color: 'var(--accent-color)' }}>{c.cmd}</td>
              <td className="muted" style={{ padding: '4px 0' }}>{c.desc}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

function renderMetrics(): React.ReactNode {
  return (
    <div>
      <div className="accent mono" style={{ fontSize: 13, marginBottom: 16 }}>LIVE_METRICS:</div>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>
        <div className="metric-box">
          <div className="metric-value"><AnimatedCounter from={0} to={12} /></div>
          <div className="metric-label">Projects Built</div>
        </div>
        <div className="metric-box">
          <div className="metric-value"><AnimatedCounter from={0} to={20} />+</div>
          <div className="metric-label">Technologies</div>
        </div>
        <div className="metric-box">
          <div className="metric-value">2+</div>
          <div className="metric-label">Years Exp</div>
        </div>
        <div className="metric-box">
          <div className="metric-value"><AnimatedCounter from={0} to={600} />+</div>
          <div className="metric-label">DSA Problems</div>
        </div>
      </div>
    </div>
  );
}

function renderProjects(): React.ReactNode {
  return (
    <div>
      <div className="accent mono" style={{ fontSize: 13, marginBottom: 16 }}>
        PROJECTS: {projects.length} total
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
        {projects.map((project, idx) => {
          const name = project.title.split('(')[0].trim();
          const tags = project.title.includes('(')
            ? project.title.split('(')[1].replace(')', '').trim()
            : null;
          const num = String(idx + 1).padStart(2, '0');
          return (
            <div key={idx} className="service-card">
              {/* Header row: index + title + status */}
              <div className="service-header">
                <span className="mono" style={{ fontWeight: 600, textTransform: 'uppercase', fontSize: 13 }}>
                  <span style={{ color: 'var(--text-muted)', marginRight: 10 }}>[{num}]</span>
                  {name}
                </span>
                <div className="status-indicator">
                  <div className="status-dot"></div>
                  ONLINE
                </div>
              </div>

              {/* Tags */}
              {tags && (
                <div className="mono" style={{ fontSize: 11, color: 'var(--accent-color)', marginBottom: 8 }}>
                  STACK: {tags}
                </div>
              )}

              {/* Description */}
              <div className="mono muted" style={{ fontSize: 12, marginBottom: 12, lineHeight: 1.6 }}>
                {project.desc}
              </div>

              {/* Image + Button row */}
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: 16 }}>
                {project.img && (
                  <div style={{ border: '1px solid var(--border-color)', overflow: 'hidden', flexShrink: 0 }}>
                    <Image src={project.img} alt={name} width={280} height={160} style={{ objectFit: 'cover', display: 'block' }} />
                  </div>
                )}
                {project.link && (
                  <a href={project.link} target="_blank" rel="noreferrer" style={{ textDecoration: 'none', alignSelf: 'flex-end' }}>
                    <button
                      style={{
                        background: 'transparent', border: '1px solid var(--accent-color)',
                        color: 'var(--accent-color)', padding: '6px 14px',
                        fontFamily: 'var(--font-mono)', fontSize: 11, cursor: 'pointer', transition: 'all 0.2s'
                      }}
                      onMouseOver={e => e.currentTarget.style.background = 'rgba(0,255,204,0.1)'}
                      onMouseOut={e => e.currentTarget.style.background = 'transparent'}
                    >
                      VIEW SOURCE →
                    </button>
                  </a>
                )}
              </div>
            </div>
          );
        })}
      </div>
      {/* Scroll hint — appears at bottom, just above the next prompt */}
      <div style={{ fontFamily: 'var(--font-mono)', fontSize: 10, color: 'var(--text-muted)', marginTop: 16, paddingTop: 12, borderTop: '1px dashed var(--border-color)', letterSpacing: 0.5 }}>
        ↑ scroll up to view all {projects.length} projects &nbsp;·&nbsp; listed newest first
      </div>
    </div>
  );
}

function renderExperience(): React.ReactNode {
  return (
    <div>
      <div className="accent mono" style={{ fontSize: 13, marginBottom: 16 }}>
        WORK_EXPERIENCE: {experiences.length} roles
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
        {experiences.map((exp, idx) => {
          const num = String(idx + 1).padStart(2, '0');
          return (
            <div key={idx} style={{
              borderLeft: idx === 0 ? '2px solid var(--accent-color)' : '2px solid var(--border-color)',
              paddingLeft: 16, fontFamily: 'var(--font-mono)', fontSize: 12
            }}>
              {/* Index + logo row */}
              <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 6 }}>
                <span style={{ color: 'var(--text-muted)', fontSize: 11 }}>[{num}]</span>
                {exp.logo && exp.logo[0] && (
                  <Image src={exp.logo[0]} alt={exp.title} width={18} height={18} style={{ borderRadius: 3 }} />
                )}
                <span style={{ color: idx === 0 ? 'var(--accent-color)' : 'var(--text-muted)', fontSize: 11 }}>
                  {idx === 0 ? 'CURRENT' : 'PREVIOUS'}
                </span>
              </div>

              {/* Company + role */}
              <div style={{ color: 'var(--text-main)', fontWeight: 600, textTransform: 'uppercase', marginBottom: 2 }}>
                {exp.title}
              </div>
              <div className="muted" style={{ marginBottom: 8 }}>
                {exp.position} &nbsp;|&nbsp; {exp.date}
              </div>

              {/* Bullet points */}
              {exp.desc.length > 0 && (
                <div style={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
                  {exp.desc.map((d, dIdx) => (
                    <div key={dIdx} className="muted" style={{ lineHeight: 1.5, paddingLeft: 8 }}>• {d}</div>
                  ))}
                </div>
              )}
            </div>
          );
        })}
      </div>
      <div style={{ fontFamily: 'var(--font-mono)', fontSize: 10, color: 'var(--text-muted)', marginTop: 16, paddingTop: 12, borderTop: '1px dashed var(--border-color)', letterSpacing: 0.5 }}>
        ↑ scroll up to view all {experiences.length} roles &nbsp;·&nbsp; current role listed first
      </div>
    </div>
  );
}
function renderSkills(): React.ReactNode {
  const layers = [
    { name: 'Languages', items: ['Java', 'C'] },
    { name: 'Frameworks', items: ['Spring Boot', 'Spring AI', 'Spring MVC', 'Spring Security', 'Spring Data JPA', 'Hibernate', 'JUnit', 'Mockito', 'Angular', 'React.js'] },
    { name: 'Databases_&_Caching', items: ['MySQL', 'PostgreSQL', 'Redis', 'Elasticsearch'] },
    { name: 'Cloud_&_DevOps', items: ['AWS (Cloud Practitioner)', 'Docker', 'Jenkins', 'Kafka', 'Git', 'Linux', 'Postman'] },
    { name: 'Concepts', items: ['REST APIs', 'Microservices Architecture', 'OOP', 'Design Patterns', 'Agile / Scrum', 'Maven', 'Unit Testing'] },
  ];
  return (
    <div>
      <div className="accent mono" style={{ fontSize: 13, marginBottom: 16 }}>INFRASTRUCTURE_TOPOLOGY:</div>
      <div className="mono" style={{ fontSize: 12, lineHeight: 1.8 }}>
        {layers.map((layer, lIdx) => (
          <div key={lIdx} style={{ marginBottom: 16 }}>
            <div style={{ color: 'var(--text-main)', marginBottom: 4 }}>{layer.name}/</div>
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
    </div>
  );
}

function renderAbout(): React.ReactNode {
  const yaml = `<span class="yaml-key">developer:</span>
  <span class="yaml-key">name:</span> <span class="yaml-value">"Darpan Kanani"</span>
  <span class="yaml-key">role:</span> <span class="yaml-value">"Software Development Engineer 1"</span>
  <span class="yaml-key">specialization:</span> <span class="yaml-value">"Backend Systems / Java / Spring Boot"</span>
  <span class="yaml-key">location:</span> <span class="yaml-value">"Gurugram, Haryana, India"</span>
  <span class="yaml-key">experience:</span> <span class="yaml-value">"2+ years"</span>
  <span class="yaml-key">education:</span> <span class="yaml-value">"B.Tech CS — IIIT Vadodara (2020-2024)"</span>

<span class="yaml-key">summary:</span>
  <span class="yaml-value">"Software Engineer with 2 years building scalable backend
   systems using Java and Spring Boot. Focused on system performance,
   code quality, and application stability in production systems
   serving 10k+ daily requests."</span>

<span class="yaml-key">stack:</span>
  - <span class="yaml-array">Java</span>
  - <span class="yaml-array">Spring Boot</span>
  - <span class="yaml-array">MySQL / PostgreSQL</span>
  - <span class="yaml-array">Redis</span>
  - <span class="yaml-array">Kafka</span>
  - <span class="yaml-array">Docker</span>
  - <span class="yaml-array">AWS</span>

<span class="yaml-key">certifications:</span>
  - <span class="yaml-array">AWS Cloud Practitioner Essentials</span>
  - <span class="yaml-array">Spring Boot – Microservices (Udemy)</span>
  - <span class="yaml-array">Spring Security 6 (Udemy)</span>

<span class="yaml-key">interests:</span>
  - <span class="yaml-array">System Design</span>
  - <span class="yaml-array">Distributed Systems</span>
  - <span class="yaml-array">High-Performance APIs</span>`;

  return (
    <div>
      <div className="accent mono" style={{ fontSize: 13, marginBottom: 16 }}>SYS_CONFIG.YAML:</div>
      <pre className="mono" style={{
        fontSize: 12, background: 'rgba(0,0,0,0.3)', padding: 16,
        border: '1px solid var(--border-color)', whiteSpace: 'pre-wrap'
      }} dangerouslySetInnerHTML={{ __html: yaml }} />
    </div>
  );
}

function renderEducation(): React.ReactNode {
  const edu = [
    {
      degree: 'Bachelor of Technology — Computer Science',
      institution: 'IIIT Vadodara',
      grade: 'CPI: 7.0 / 10',
      period: 'Dec 2020 – Dec 2024',
    },
    {
      degree: 'Senior Secondary Education (XII)',
      institution: 'S.S. Divine School',
      grade: 'Grade: 74%',
      period: 'Mar 2019 – Mar 2020',
    },
    {
      degree: 'Secondary Education (X)',
      institution: 'Modi School',
      grade: 'Grade: 91%',
      period: 'Mar 2017 – Mar 2018',
    },
  ];
  return (
    <div>
      <div className="accent mono" style={{ fontSize: 13, marginBottom: 16 }}>EDUCATION_LOG:</div>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 20, fontFamily: 'var(--font-mono)', fontSize: 12 }}>
        {edu.map((e, idx) => (
          <div key={idx} style={{ borderLeft: idx === 0 ? '2px solid var(--accent-color)' : '2px solid var(--border-color)', paddingLeft: 16 }}>
            <div style={{ color: 'var(--text-main)', fontWeight: 600, marginBottom: 2 }}>{e.institution}</div>
            <div className="muted" style={{ marginBottom: 2 }}>{e.degree}</div>
            <div style={{ display: 'flex', gap: 16 }}>
              <span style={{ color: 'var(--accent-color)', fontSize: 11 }}>{e.grade}</span>
              <span className="muted" style={{ fontSize: 11 }}>{e.period}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function renderCertifications(): React.ReactNode {
  const certs = [
    { name: 'AWS Cloud Practitioner Essentials', issuer: 'Amazon Web Services' },
    { name: 'Spring Boot – Microservices', issuer: 'Udemy' },
    { name: 'Spring Boot 3, REST, JPA, Hibernate', issuer: 'Udemy' },
    { name: 'Spring Security 6', issuer: 'Udemy' },
    { name: 'SQL', issuer: 'HackerRank' },
  ];
  const achievements = [
    'Recognized for resolving 15+ critical production bugs at Dash Technologies',
    'Solved 600+ DSA problems on LeetCode and CodeChef',
    'Boosted system performance by 10x with Redis Template integration',
    'Resolved 2200+ static analysis blockers in CI/CD pipeline',
  ];
  return (
    <div>
      <div className="accent mono" style={{ fontSize: 13, marginBottom: 16 }}>CERTIFICATIONS_&_ACHIEVEMENTS:</div>
      <div style={{ fontFamily: 'var(--font-mono)', fontSize: 12 }}>
        <div style={{ color: 'var(--text-main)', marginBottom: 12 }}>Certifications/</div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 8, marginBottom: 24 }}>
          {certs.map((c, idx) => (
            <div key={idx} style={{ display: 'flex', justifyContent: 'space-between', paddingLeft: 8 }}>
              <span className="muted">{idx < certs.length - 1 ? '├── ' : '└── '}{c.name}</span>
              <span style={{ color: 'var(--accent-color)', fontSize: 11, marginLeft: 16, flexShrink: 0 }}>{c.issuer}</span>
            </div>
          ))}
        </div>
        <div style={{ color: 'var(--text-main)', marginBottom: 12 }}>Achievements/</div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 6, paddingLeft: 8 }}>
          {achievements.map((a, idx) => (
            <div key={idx} className="muted">{idx < achievements.length - 1 ? '├── ' : '└── '}{a}</div>
          ))}
        </div>
      </div>
    </div>
  );
}

function createWelcomeEntry(id: number): TerminalEntry {
  return {
    id,
    type: 'system',
    content: (
      <div className="mono" style={{ fontSize: 13 }}>
        <div className="accent" style={{ marginBottom: 8 }}>╔══════════════════════════════════════╗</div>
        <div className="accent">║  DEVOS TERMINAL v2.0                ║</div>
        <div className="accent">║  Welcome to Darpan&apos;s Developer OS   ║</div>
        <div className="accent" style={{ marginBottom: 8 }}>╚══════════════════════════════════════╝</div>
        <div className="muted" style={{ marginTop: 8 }}>Type <span className="accent">help</span> to see available commands.</div>
        <div className="muted">Try: <span className="accent">projects</span>, <span className="accent">experience</span>, <span className="accent">skills</span>, <span className="accent">education</span>, <span className="accent">certifications</span>, <span className="accent">metrics</span></div>
      </div>
    )
  };
}

// ── Main CenterPanel ──────────────────────────────────────────
export default function CenterPanel() {
  const [input, setInput] = useState('');
  const [history, setHistory] = useState<TerminalEntry[]>([]);
  const [cmdHistory, setCmdHistory] = useState<string[]>([]);
  const [historyIndex, setHistoryIndex] = useState(-1);
  const [suggestions, setSuggestions] = useState<typeof AVAILABLE_COMMANDS>([]);
  const [activeSuggestion, setActiveSuggestion] = useState(0);
  const inputRef = useRef<HTMLInputElement>(null);
  const outputRef = useRef<HTMLDivElement>(null);
  const idCounter = useRef(0);
  const promptRef = useRef<HTMLDivElement>(null);

  // Initialize with welcome message
  useEffect(() => {
    setHistory([createWelcomeEntry(idCounter.current++)]);
  }, []);

  // Auto-scroll to bring the live prompt into view after output renders
  useEffect(() => {
    if (promptRef.current) {
      promptRef.current.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    }
  }, [history]);

  // Update suggestions as user types
  useEffect(() => {
    if (input.trim().length > 0) {
      const matches = AVAILABLE_COMMANDS.filter(c =>
        c.cmd.startsWith(input.trim().toLowerCase())
      );
      setSuggestions(matches);
      setActiveSuggestion(0);
    } else {
      setSuggestions([]);
    }
  }, [input]);

  const executeCommand = (rawCmd: string) => {
    const cmd = rawCmd.trim().toLowerCase();
    if (!cmd) return;

    // Add input line to history display
    const inputEntry: TerminalEntry = {
      id: idCounter.current++,
      type: 'input',
      content: <span><span className="accent">darpan@devos</span><span className="muted">:</span><span style={{ color: '#82aaff' }}>~</span><span className="muted">$</span> {rawCmd}</span>
    };

    let outputContent: React.ReactNode;
    let entryType: TerminalEntry['type'] = 'output';

    switch (cmd) {
      case 'help':
        outputContent = renderHelp();
        break;
      case 'metrics':
        outputContent = renderMetrics();
        break;
      case 'projects':
        outputContent = renderProjects();
        break;
      case 'experience':
        outputContent = renderExperience();
        break;
      case 'skills':
        outputContent = renderSkills();
        break;
      case 'about':
        outputContent = renderAbout();
        break;
      case 'education':
        outputContent = renderEducation();
        break;
      case 'certifications':
        outputContent = renderCertifications();
        break;
      case 'contact':
        outputContent = (
          <div className="mono" style={{ fontSize: 13 }}>
            <div className="accent" style={{ marginBottom: 8 }}>COMMUNICATION CHANNELS:</div>
            <div className="muted">Email: <a href="mailto:darpankanani3011@gmail.com" style={{ color: 'var(--accent-color)' }}>darpankanani3011@gmail.com</a></div>
            <div className="muted">Phone: <span style={{ color: 'var(--accent-color)' }}>+91 9879880177</span></div>
            <div className="muted">GitHub: <a href="https://github.com/Darpan3011" target="_blank" rel="noreferrer" style={{ color: 'var(--accent-color)' }}>github.com/Darpan3011</a></div>
            <div className="muted">LinkedIn: <a href="https://linkedin.com/in/darpankanani" target="_blank" rel="noreferrer" style={{ color: 'var(--accent-color)' }}>linkedin.com/in/darpankanani</a></div>
            <div className="muted">LeetCode: <a href="https://leetcode.com/Darpan3011" target="_blank" rel="noreferrer" style={{ color: 'var(--accent-color)' }}>leetcode.com/Darpan3011</a></div>
            <div className="muted">Location: <span style={{ color: 'var(--accent-color)' }}>Gurugram, Haryana, India</span></div>
          </div>
        );
        break;
      case 'clear':
        setHistory([createWelcomeEntry(idCounter.current++)]);
        setInput('');
        setCmdHistory(prev => [...prev, cmd]);
        setSuggestions([]);
        return;
      default:
        entryType = 'error';
        outputContent = (
          <div className="mono" style={{ fontSize: 13, color: 'var(--error-color)' }}>
            Error: command not found: <span style={{ color: 'var(--text-main)' }}>{rawCmd}</span>
            <div className="muted" style={{ marginTop: 4 }}>Type <span className="accent">help</span> to see available commands.</div>
          </div>
        );
    }

    const outputEntry: TerminalEntry = {
      id: idCounter.current++,
      type: entryType,
      content: outputContent
    };

    setHistory(prev => [...prev, inputEntry, outputEntry]);
    setCmdHistory(prev => [...prev, cmd]);
    setHistoryIndex(-1);
    setInput('');
    setSuggestions([]);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    // Tab-complete
    if (e.key === 'Tab') {
      e.preventDefault();
      if (suggestions.length > 0) {
        setInput(suggestions[activeSuggestion].cmd);
        setSuggestions([]);
      }
      return;
    }

    // Arrow up/down for command history
    if (e.key === 'ArrowUp') {
      e.preventDefault();
      if (suggestions.length > 0) {
        setActiveSuggestion(prev => (prev - 1 + suggestions.length) % suggestions.length);
      } else if (cmdHistory.length > 0) {
        const newIndex = historyIndex === -1 ? cmdHistory.length - 1 : Math.max(0, historyIndex - 1);
        setHistoryIndex(newIndex);
        setInput(cmdHistory[newIndex]);
      }
      return;
    }

    if (e.key === 'ArrowDown') {
      e.preventDefault();
      if (suggestions.length > 0) {
        setActiveSuggestion(prev => (prev + 1) % suggestions.length);
      } else if (historyIndex !== -1) {
        const newIndex = historyIndex + 1;
        if (newIndex >= cmdHistory.length) {
          setHistoryIndex(-1);
          setInput('');
        } else {
          setHistoryIndex(newIndex);
          setInput(cmdHistory[newIndex]);
        }
      }
      return;
    }

    if (e.key === 'Enter') {
      e.preventDefault();
      if (suggestions.length > 0 && input.trim() !== suggestions[activeSuggestion].cmd) {
        // If there's a highlighted suggestion, use it
        setInput(suggestions[activeSuggestion].cmd);
        setSuggestions([]);
      } else {
        executeCommand(input);
      }
      return;
    }

    if (e.key === 'Escape') {
      setSuggestions([]);
    }
  };

  return (
    <div className="devos-panel" style={{
      display: 'flex', flexDirection: 'column', padding: 0, position: 'relative'
    }} onClick={() => inputRef.current?.focus()}>

      {/* Scrollable terminal area — history + live prompt all in one flow */}
      <div ref={outputRef} style={{
        flex: 1, overflow: 'auto', padding: '24px 32px',
        display: 'flex', flexDirection: 'column', gap: 0
      }}>

        {/* Past history entries */}
        <AnimatePresence>
          {history.map((entry) => (
            <motion.div
              key={entry.id}
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.15 }}
              style={{
                fontFamily: 'var(--font-mono)', fontSize: 13,
                ...(entry.type === 'input'
                  ? { paddingBottom: 4, paddingTop: 16 }
                  : { paddingBottom: 20, borderBottom: '1px solid var(--border-color)' })
              }}
            >
              {entry.content}
            </motion.div>
          ))}
        </AnimatePresence>

        {/* Suggestions shown inline above the live prompt */}
        {suggestions.length > 0 && (
          <div style={{
            background: 'rgba(0,0,0,0.4)',
            border: '1px solid var(--border-color)',
            marginTop: 8,
          }}>
            {suggestions.map((s, idx) => (
              <div
                key={s.cmd}
                style={{
                  padding: '7px 16px', fontFamily: 'var(--font-mono)', fontSize: 12,
                  display: 'flex', justifyContent: 'space-between', cursor: 'pointer',
                  background: idx === activeSuggestion ? 'rgba(0,255,204,0.08)' : 'transparent',
                  color: idx === activeSuggestion ? 'var(--accent-color)' : 'var(--text-muted)',
                }}
                onMouseEnter={() => setActiveSuggestion(idx)}
                onClick={() => { setInput(s.cmd); setSuggestions([]); inputRef.current?.focus(); }}
              >
                <span>&gt; {s.cmd}</span>
                <span style={{ opacity: 0.4 }}>{s.desc}</span>
              </div>
            ))}
          </div>
        )}

        {/* Live prompt — always at the bottom of history, just like a real terminal */}
        <div
          ref={promptRef}
          style={{
            display: 'flex', alignItems: 'center', gap: 8,
            fontFamily: 'var(--font-mono)', fontSize: 14,
            paddingTop: history.length === 0 ? 0 : 16,
            paddingBottom: 8,
          }}
        >
          <span className="accent">darpan@devos</span>
          <span className="muted">:</span>
          <span style={{ color: '#82aaff' }}>~</span>
          <span className="muted">$</span>
          <input
            ref={inputRef}
            type="text"
            value={input}
            onChange={e => setInput(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder="type a command..."
            autoFocus
            style={{
              flex: 1, background: 'transparent', border: 'none', outline: 'none',
              color: 'var(--text-main)', fontFamily: 'var(--font-mono)', fontSize: 14,
              caretColor: 'var(--accent-color)', minWidth: 0
            }}
          />
        </div>
      </div>
    </div>
  );
}
