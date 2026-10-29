import { useState } from 'react';
import { certificates, certificateEvidence } from '../data.js';
import { assetUrl } from '../utils.js';
import { Tabs } from './Common.jsx';

export default function Certifications() {
  const [category, setCategory] = useState('All');
  return <section id="certifications" className="certifications section"><div className="section-label">06 / CONTINUED CURIOSITY</div><h2>Never done <em>learning.</em></h2>
    <Tabs id="cert-filters" label="Filter certificates" items={['All', ...new Set(certificates.map(item => item[0]))]} active={category} onChange={setCategory} />
    <div id="certificates">{certificates.filter(item => category === 'All' || item[0] === category).map(([, name, provider, date]) => {
      const evidence = certificateEvidence[name];
      return <article className="certificate" key={name}>
        <span>{evidence?.image ? <img className="certificate-badge" src={assetUrl(evidence.image)} alt={evidence.imageAlt || ''} loading="lazy" width="28" height="28" style={{transform:`scale(${evidence.artworkScale || 1})`}} /> : '✧'}</span>
        <div><h3>{name}</h3><p>{provider}{date ? ` / ${date}` : ''}</p></div>
        <small>{evidence ? <a className="credential-link" href={evidence.url} target="_blank" rel="noreferrer" aria-label={`Verify ${name} on ${evidence.provider || 'Credly'}`}>Verify on {evidence.provider || 'Credly'} ↗</a> : 'VERIFICATION PENDING'}</small>
      </article>;
    })}</div>

  </section>;
}
