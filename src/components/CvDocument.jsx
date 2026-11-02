import Icon from "./Icon.jsx";
import { profile } from "../data.js";
import { assetUrl } from "../utils.js";

export default function CvDocument() {
  const url = assetUrl(profile.cv);
  return (
    <>
      <span className="section-label">DOCUMENT ARCHIVE</span>
      <h2 id="modal-title">Curriculum vitae</h2>
      <div className="project-actions">
        <a className="button red" href={url} download="Nina-Pascua-CV.pdf">
          Download CV <Icon name="down" />
        </a>
        <a href={url} target="_blank" rel="noreferrer">
          Open PDF <Icon name="external" />
        </a>
      </div>
      <iframe
        className="cv-preview"
        title="Niña Pascua — Curriculum vitae"
        src={url}
      />
    </>
  );
}
