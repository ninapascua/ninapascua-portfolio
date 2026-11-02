import Icon from "./Icon.jsx";
import { useEffect, useRef, useState } from "react";
import { assetUrl } from "../utils.js";

export function Tabs({ items, active, onChange, label, id }) {
  return (
    <div className="tabs" id={id} role="group" aria-label={label}>
      {items.map((item) => (
        <button
          key={item}
          type="button"
          aria-pressed={active === item}
          onClick={() => onChange(item)}
        >
          {item}
        </button>
      ))}
    </div>
  );
}

export function Chips({ items }) {
  return (
    <div className="chips">
      {items.map((item) => (
        <span key={item}>{item}</span>
      ))}
    </div>
  );
}

export function ProjectActions({ project }) {
  return (
    <>
      {project.repo && (
        <a
          href={`https://github.com/${project.repo}`}
          target="_blank"
          rel="noreferrer"
        >
          Repository <Icon name="external" />
        </a>
      )}
      {project.live && (
        <a href={project.live} target="_blank" rel="noreferrer">
          {project.liveLabel || "Visit website"} <Icon name="external" />
        </a>
      )}
    </>
  );
}

function GalleryImage({ image, onError }) {
  const [displayed, setDisplayed] = useState(image);
  const [outgoing, setOutgoing] = useState(null);

  useEffect(() => {
    if (image.src === displayed.src) return;
    let cancelled = false;
    const preload = new Image();
    preload.onload = () => {
      if (cancelled) return;
      setOutgoing(displayed);
      setDisplayed(image);
    };
    preload.onerror = () => {
      if (!cancelled) onError(image.src);
    };
    preload.src = assetUrl(image.src);
    return () => {
      cancelled = true;
    };
  }, [image, displayed.src, onError]);

  useEffect(() => {
    if (!outgoing) return;
    const timer = window.setTimeout(() => setOutgoing(null), 420);
    return () => window.clearTimeout(timer);
  }, [outgoing]);

  return (
    <div className="gallery-image">
      <img
        key={displayed.src}
        className={outgoing ? "gallery-incoming" : undefined}
        src={assetUrl(displayed.src)}
        alt={displayed.alt}
        width={displayed.width}
        height={displayed.height}
        loading="lazy"
        onError={() => onError(displayed.src)}
      />
      {outgoing && (
        <img
          className="gallery-outgoing"
          src={assetUrl(outgoing.src)}
          alt=""
          aria-hidden="true"
          width={outgoing.width}
          height={outgoing.height}
        />
      )}
    </div>
  );
}

export function ProjectMedia({ project, index, onChange }) {
  const [failedSource, setFailedSource] = useState(null);
  const image = project.media[index];
  const move = (step) =>
    onChange((index + step + project.media.length) % project.media.length);
  return (
    <div className="media-board">
      {image && failedSource !== image.src ? (
        <GalleryImage image={image} onError={setFailedSource} />
      ) : (
        <p className="media-unavailable" role="status">
          This project image could not load.
        </p>
      )}
      <div className="media-caption">
        <span>{image?.caption || "ACTUAL PROJECT SCREENSHOT"}</span>
        {project.media.length > 1 && (
          <span className="gallery-buttons">
            <button onClick={() => move(-1)} aria-label="Previous screenshot">
              <Icon name="left" />
            </button>{" "}
            {index + 1} / {project.media.length}
            <button onClick={() => move(1)} aria-label="Next screenshot">
              <Icon name="right" />
            </button>
          </span>
        )}
      </div>
    </div>
  );
}

export function Modal({ titleId, children, onClose }) {
  const ref = useRef(null);
  useEffect(() => {
    const dialog = ref.current;
    const previousFocus = document.activeElement;
    dialog.showModal();
    return () => {
      dialog.close();
      previousFocus?.focus();
    };
  }, []);
  function closeOnBackdrop(event) {
    if (event.target !== ref.current) return;
    const bounds = ref.current.getBoundingClientRect();
    if (
      event.clientX < bounds.left ||
      event.clientX > bounds.right ||
      event.clientY < bounds.top ||
      event.clientY > bounds.bottom
    )
      onClose();
  }
  return (
    <dialog
      ref={ref}
      id="dialog"
      aria-labelledby={titleId}
      onCancel={(event) => {
        event.preventDefault();
        onClose();
      }}
      onClick={closeOnBackdrop}
    >
      <button id="close-dialog" onClick={onClose} aria-label="Close dialog">
        Close <Icon name="close" />
      </button>
      <div id="dialog-content">{children}</div>
    </dialog>
  );
}
