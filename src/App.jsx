import { useState } from 'react';
import { profile, skills } from './data.js';
import { assetUrl } from './utils.js';
import { Hero, About, Journey, Contact } from './components/PageSections.jsx';
import { Chips, Modal } from './components/Common.jsx';
import Projects, { CaseStudy } from './components/Projects.jsx';
import GitHubArchive from './components/GitHubArchive.jsx';
import Certifications from './components/Certifications.jsx';

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  return <header><a className="brand" href="#home">np<span>✳</span></a><span className="edition">THE PERSONAL ARCHIVE<br />DESIGN + CODE + CURIOSITY</span><button id="menu" aria-expanded={menuOpen} aria-controls="nav" onClick={() => setMenuOpen(!menuOpen)}>Menu {menuOpen ? '−' : '+'}</button><nav id="nav" className={menuOpen ? 'open' : ''} onClick={event => { if (event.target.closest('a')) setMenuOpen(false); }}><a href="#about">The person</a><a href="#projects">Selected work <sup>06</sup></a><a href="#github">Code archive</a><a href="#journey">The journey</a><a className="nav-contact" href="#contact">Say hello ↗</a></nav></header>;
}

function Skills() {
  return <section id="skills" className="skills section"><div className="section-label">04 / THE TOOLKIT</div><h2>Tools of <em>the trade.</em></h2><div id="skill-list">{Object.entries(skills).map(([name, items]) => <div key={name}><h3>{name.toUpperCase()}</h3><Chips items={items} /></div>)}</div><p className="hand">Always learning. Always making.</p></section>;
}

export default function App() {
  const [modal, setModal] = useState(null);
  function openCv(event) {
    if (!profile.cv) { setModal({ type: 'cv' }); return; }
    const url = assetUrl(profile.cv);
    if (event.currentTarget.textContent.includes('Download')) {
      const link = document.createElement('a');
      link.href = url;
      link.download = 'Nina-Pascua-CV.pdf';
      link.click();
    } else window.open(url, '_blank', 'noopener');
  }
  return <><a className="skip" href="#main">Skip to content</a><Header /><main id="main"><Hero onCv={openCv} /><About onCv={openCv} /><Projects onOpenCase={project => setModal({ type: 'project', project })} /><GitHubArchive /><Skills /><Journey /><Certifications /><Contact onCv={openCv} /></main>
    <footer><a className="brand" href="#home">np✳</a><span>© <span id="year">{new Date().getFullYear()}</span> NIÑA PASCUA · MADE WITH INTENTION</span><a href="#home">BACK TO TOP ↑</a></footer>
    {modal && <Modal titleId="modal-title" onClose={() => setModal(null)}>{modal.type === 'project' ? <CaseStudy key={modal.project.name} project={modal.project} /> : <><span className="section-label">DOCUMENT ARCHIVE</span><h2 id="modal-title">CV, coming soon.</h2><p>The original CV PDF has not been supplied yet. Please get in touch for a copy.</p><a className="button red" href="mailto:ninapascua88@gmail.com?subject=CV%20request">Request my CV ↗</a></>}</Modal>}
  </>;
}
