import Icon from "./Icon.jsx";
import { useState } from "react";
import { projects } from "../data.js";
import { Tabs, Chips, ProjectMedia, ProjectActions } from "./Common.jsx";

const categories = [
  "All Projects",
  "UI/UX",
  "Web Development",
  "Mobile Development",
  "AI / Machine Learning",
];
const number = (n) => String(n).padStart(2, "0");

export default function Projects({ onOpenCase }) {
  const [filter, setFilter] = useState("All Projects");
  const [index, setIndex] = useState(0);
  const [gallery, setGallery] = useState(0);
  const [direction, setDirection] = useState(1);
  const list = projects.filter(
    (project) => filter === "All Projects" || project.category.includes(filter),
  );
  const project = list[index];
  function selectProject(next) {
    setDirection(next < index ? -1 : 1);
    setIndex((next + list.length) % list.length);
    setGallery(0);
  }
  return (
    <section id="projects" className="work section">
      <div className="section-top">
        <div>
          <div className="section-label">02 / SELECTED WORK</div>
          <h2>
            Ideas, made <em>real.</em>
          </h2>
        </div>
        <p>
          Six projects. Different questions.
          <br />A collection of things I helped bring to life.
        </p>
      </div>
      <Tabs
        id="project-filters"
        label="Filter projects"
        items={categories}
        active={filter}
        onChange={(value) => {
          setDirection(1);
          setFilter(value);
          setIndex(0);
          setGallery(0);
        }}
      />
      <div id="showcase" aria-live="polite" style={{ "--project-direction": direction }}>
        <article className="project-spread" key={project.name}>
          <div className="project-copy">
            <span className="project-number">
              FILE {number(projects.indexOf(project) + 1)} /{" "}
              {project.type.toUpperCase()}
            </span>
            <h3>{project.name}</h3>
            <p className="subtitle">{project.subtitle}</p>
            <p>{project.description}</p>
            <Chips items={project.tech} />
            <div className="project-actions">
              <button
                className="button red"
                onClick={() => onOpenCase(project)}
              >
                Open case study <Icon name="external" />
              </button>
              <ProjectActions project={project} />
            </div>
          </div>
          <div>
            <ProjectMedia
              project={project}
              index={gallery}
              onChange={setGallery}
            />
            <p className="media-note">{project.note}</p>
          </div>
        </article>
      </div>
      <div className="work-nav">
        <button
          onClick={() => selectProject(index - 1)}
          aria-label="Previous project"
        >
          <Icon name="left" /> Previous file
        </button>
        <div id="project-index">
          {number(index + 1)} / {number(list.length)}
        </div>
        <button
          onClick={() => selectProject(index + 1)}
          aria-label="Next project"
        >
          Next file <Icon name="right" />
        </button>
      </div>
      <div id="project-shelf">
        {list.map((item, i) => (
          <button
            key={item.name}
            aria-current={i === index ? "true" : undefined}
            onClick={() => selectProject(i)}
          >
            <small>FILE {number(projects.indexOf(item) + 1)}</small>
            {item.name}
          </button>
        ))}
      </div>
    </section>
  );
}

export function CaseStudy({ project }) {
  const [gallery, setGallery] = useState(0);
  return (
    <>
      <div className="section-label">PROJECT NOTES / {project.type}</div>
      <h2 id="modal-title">{project.name}</h2>
      <p className="subtitle">{project.subtitle}</p>
      <h3>Overview & purpose</h3>
      <p>{project.description}</p>
      <ProjectMedia project={project} index={gallery} onChange={setGallery} />
      <h3>My role & contributions</h3>
      <ul>
        {project.role.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
      <h3>Key features</h3>
      <ul>
        {project.features.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
      {project.tech.length > 0 && (
        <>
          <h3>Technologies</h3>
          <Chips items={project.tech} />
        </>
      )}
      {project.name === "Sipori" && (
        <p>
          The deployed journal requires private owner authentication. No private
          records or sign-in credentials are provided.
        </p>
      )}
      <div className="project-actions">
        <ProjectActions project={project} />
      </div>
    </>
  );
}
