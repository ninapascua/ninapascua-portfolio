import { useState } from "react";
import { skills } from "./data.js";
import { Hero, About, Journey, Contact } from "./components/PageSections.jsx";
import { Chips, Modal } from "./components/Common.jsx";
import Projects, { CaseStudy } from "./components/Projects.jsx";
import Certifications from "./components/Certifications.jsx";
import CvDocument from "./components/CvDocument.jsx";

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <header>
      <a className="brand" href="#home">
        np<span>✳</span>
      </a>
      <span className="edition">THE PERSONAL ARCHIVE</span>
      <button
        id="menu"
        aria-expanded={menuOpen}
        aria-controls="nav"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        Menu {menuOpen ? "−" : "+"}
      </button>
      <nav
        id="nav"
        className={menuOpen ? "open" : ""}
        onClick={(event) => {
          if (event.target.closest("a")) setMenuOpen(false);
        }}
      >
        <a href="#about">The person</a>
        <a href="#projects">
          Selected work <sup>06</sup>
        </a>
        <a href="#journey">The journey</a>
        <a className="nav-contact" href="#contact">
          Say hello ↗
        </a>
      </nav>
    </header>
  );
}

function Skills() {
  return (
    <section id="skills" className="skills section">
      <div className="section-label">03 / THE TOOLKIT</div>
      <h2>
        Skills &amp; <em>technologies.</em>
      </h2>
      <div id="skill-list">
        {Object.entries(skills).map(([name, items]) => (
          <div key={name}>
            <h3>{name.toUpperCase()}</h3>
            <Chips items={items} />
          </div>
        ))}
      </div>
      <p className="hand">Always learning. Always making.</p>
    </section>
  );
}

export default function App() {
  const [modal, setModal] = useState(null);
  function openCv() {
    setModal({ type: "cv" });
  }
  return (
    <>
      <a className="skip" href="#main">
        Skip to content
      </a>
      <Header />
      <main id="main">
        <Hero />
        <About onCv={openCv} />
        <Projects
          onOpenCase={(project) => setModal({ type: "project", project })}
        />
        <Skills />
        <Journey />
        <Certifications />
        <Contact onCv={openCv} />
      </main>
      <footer>
        <a className="brand" href="#home">
          np<span>✳</span>
        </a>
        <span>
          © <span id="year">{new Date().getFullYear()}</span> NIÑA PASCUA
        </span>
        <a href="#home">BACK TO TOP ↑</a>
      </footer>
      {modal && (
        <Modal titleId="modal-title" onClose={() => setModal(null)}>
          {modal.type === "project" ? (
            <CaseStudy key={modal.project.name} project={modal.project} />
          ) : (
            <CvDocument />
          )}
        </Modal>
      )}
    </>
  );
}
