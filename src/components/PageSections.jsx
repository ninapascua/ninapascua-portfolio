import { profile, leadership } from "../data.js";
import { assetUrl } from "../utils.js";

function Portrait() {
  return (
    <div className="portrait-inner">
      <img
        src={assetUrl(profile.photo)}
        alt="Niña Pascua"
        fetchPriority="high"
        style={{
          width: "100%",
          height: "100%",
          objectFit: "cover",
          objectPosition: "center 20%",
        }}
      />
    </div>
  );
}

export function Hero() {
  return (
    <section id="home" className="hero">
      <div className="issue">
        <span>VOL. 01 / PERSONAL PORTFOLIO</span>
        <span>PAMPANGA, PHILIPPINES ↗</span>
      </div>
      <div className="hero-layout">
        <div className="hero-copy">
          <h1>
            Niña
            <br />
            <em>
              Pascua<span>✳</span>
            </em>
          </h1>
          <div className="hero-bottom">
            <p>
              Hi, I’m Niña — a Computer Science student turning thoughtful
              design and a little curiosity into useful digital experiences.
            </p>
            <a className="button red" href="#projects">
              Explore my projects <span>↗</span>
            </a>
            <div className="small-links">
              <a
                className="cv"
                href={assetUrl(profile.cv)}
                download="Nina-Pascua-CV.pdf"
              >
                Download CV ↓
              </a>
              <a
                href="https://github.com/ninapascua"
                target="_blank"
                rel="noreferrer"
              >
                View GitHub ↗
              </a>
            </div>
          </div>
        </div>
        <div className="hero-art">
          <div className="blue-paper">
            <span>FIELD NOTES / 001</span>
          </div>
          <div className="portrait">
            <Portrait />
            <div className="hand portrait-caption">
              a little creative, a little technical.
            </div>
          </div>
          <div className="round-stamp">
            <span>
              DESIGNER MIND
              <br />✳<br />
              DEVELOPER HEART
            </span>
          </div>
          <div className="tape"></div>
        </div>
      </div>
      <div className="hero-footer">
        <span>UI/UX DESIGN</span>
        <b>✳</b>
        <span>SOFTWARE DEVELOPMENT</span>
        <b>✳</b>
        <span>AI & MACHINE LEARNING</span>
        <a href="#about">SCROLL TO EXPLORE ↓</a>
      </div>
    </section>
  );
}

export function About({ onCv }) {
  return (
    <section id="about" className="about section">
      <div className="about-label">
        <div className="section-label">01 / THE PERSON</div>
        <button className="text-button cv" onClick={onCv}>
          View my CV ↗
        </button>
      </div>
      <div>
        <h2>
          A thoughtful eye.
          <br />
          <em>A curious mind.</em>
        </h2>
        <div className="about-columns">
          <p>
            I’m Maria Niña Grace L. Pascua, a BS Computer Science student at
            Holy Angel University, graduating in April 2027. I’m interested in
            the space where visual ideas become functional, intuitive
            experiences.
          </p>
          <p>
            My work begins with UI/UX design and extends into software
            development, backend development, and AI/ML. I enjoy connecting what
            an experience looks like with how it works.
          </p>
        </div>
      </div>
      <div className="about-stamp">
        BASED IN
        <br />
        <strong>Pampanga</strong>
        <br />
        PHILIPPINES / GMT+8
      </div>
    </section>
  );
}

export function Journey() {
  return (
    <section id="journey" className="journey section">
      <div className="section-top">
        <div>
          <div className="section-label">04 / THE JOURNEY</div>
          <h2>Education</h2>
        </div>
        <span className="hand">a work in progress, in the best way.</span>
      </div>
      <div className="journey-grid">
        <article className="education">
          <span className="eyebrow">ACADEMIC RECORD</span>
          <h3>
            Holy Angel
            <br />
            University
          </h3>
          <p>Bachelor of Science in Computer Science</p>
          <p className="meta">
            Angeles City, Pampanga
            <br />
            Expected graduation · April 2027
          </p>
          <hr />
          <p>
            Dean’s Lister — 1st Year
            <br />
            President’s Lister — 2nd & 3rd Years
          </p>
          <p className="meta">
            THESIS / AniMedika — Rice Leaf Disease Classification Using
            EfficientNet-Based CNN
          </p>
          <h4>Holy Family Academy</h4>
          <p>
            Graduated with Highest Honors
            <br />
            <span className="meta">May 5, 2023</span>
          </p>
        </article>
        <div>
          <h3>Leadership & involvement</h3>
          <div id="leadership">
            {leadership.map(([date, org, role], i) => (
              <div className="timeline-item" key={i}>
                <span>{date}</span>
                <div>
                  <strong>{org}</strong>
                  <p>{role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="awards">
        <article>
          <span>2026 / RECOGNITION 01</span>
          <h3>2nd Place</h3>
          <p>Base Build IRL Workshop Hackathon</p>
        </article>
        <article>
          <span>2025 / RECOGNITION 02</span>
          <h3>
            Most Outstanding
            <br />
            Solicitor General
          </h3>
          <p>Student representation & service</p>
        </article>
        <article>
          <span>2024 / RECOGNITION 03</span>
          <h3>
            Outstanding
            <br />
            I.V.Y League Member
          </h3>
          <p>Student council involvement</p>
        </article>
      </div>
    </section>
  );
}

export function Contact({ onCv }) {
  return (
    <section id="contact" className="contact section">
      <div className="postcard">
        <div>
          <span className="eyebrow">A NOTE TO MY NEXT COLLABORATOR</span>
          <h2>
            Let’s make
            <br />
            something
            <br />
            <em>meaningful.</em>
          </h2>
          <span className="hand">Good things start with a hello.</span>
        </div>
        <div className="postcard-address">
          <div className="postage">
            NP
            <br />✳<br />
            PHILIPPINES
          </div>
          <p>TO: A NEW IDEA, A NEW CONNECTION</p>
          <a href="mailto:ninapascua88@gmail.com">ninapascua88@gmail.com ↗</a>
          <a
            href="https://github.com/ninapascua"
            target="_blank"
            rel="noreferrer"
          >
            github.com/ninapascua ↗
          </a>
          {profile.linkedin && (
            <a href={profile.linkedin} target="_blank" rel="noreferrer">
              LinkedIn ↗
            </a>
          )}
          <button className="text-button cv" onClick={onCv}>
            View / download CV ↗
          </button>
          <span className="meta">Pampanga, Philippines</span>
        </div>
      </div>
    </section>
  );
}
