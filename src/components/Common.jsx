import { useEffect, useRef } from 'react';
import { assetUrl } from '../utils.js';

export function Tabs({ items, active, onChange, label, id }) {
  return <div className="tabs" id={id} role="group" aria-label={label}>
    {items.map(item => <button key={item} type="button" aria-pressed={active === item} onClick={() => onChange(item)}>{item}</button>)}
  </div>;
}

export function Chips({ items }) {
  return <div className="chips">{items.map(item => <span key={item}>{item}</span>)}</div>;
}

export function ProjectActions({ project }) {
  return <>{project.repo && <a href={`https://github.com/${project.repo}`} target="_blank" rel="noreferrer">Repository ↗</a>}
    {project.live && <a href={project.live} target="_blank" rel="noreferrer">{project.liveLabel || 'Visit website ↗'}</a>}</>;
}

export function ProjectMedia({ project, index, onChange }) {
  const image = project.media[index];
  const move = step => onChange((index + step + project.media.length) % project.media.length);
  return <div className="media-board">
    {image ? <img src={assetUrl(image.src)} alt={image.alt} loading="lazy" /> : <div className="project-art"><span className="art-symbol" aria-hidden="true">{project.symbol}</span><strong>{project.name}</strong><small>PROJECT ARTWORK · SCREENSHOTS TO BE ADDED</small></div>}
    <div className="media-caption"><span>{image ? image.caption || 'ACTUAL PROJECT SCREENSHOT' : 'ARCHIVE / VISUAL PLACEHOLDER'}</span>
      {project.media.length > 1 && <span className="gallery-buttons"><button onClick={() => move(-1)} aria-label="Previous screenshot">←</button> {index + 1} / {project.media.length}<button onClick={() => move(1)} aria-label="Next screenshot">→</button></span>}
    </div>
  </div>;
}

export function Modal({ titleId, children, onClose }) {
  const ref = useRef(null);
  useEffect(() => {
    const dialog = ref.current;
    const previousFocus = document.activeElement;
    dialog.showModal();
    return () => { dialog.close(); previousFocus?.focus(); };
  }, []);
  function closeOnBackdrop(event) {
    if (event.target !== ref.current) return;
    const bounds = ref.current.getBoundingClientRect();
    if (event.clientX < bounds.left || event.clientX > bounds.right || event.clientY < bounds.top || event.clientY > bounds.bottom) onClose();
  }
  return <dialog ref={ref} id="dialog" aria-labelledby={titleId} onCancel={event => { event.preventDefault(); onClose(); }} onClick={closeOnBackdrop}>
    <button id="close-dialog" onClick={onClose} aria-label="Close dialog" autoFocus>Close ×</button><div id="dialog-content">{children}</div>
  </dialog>;
}
