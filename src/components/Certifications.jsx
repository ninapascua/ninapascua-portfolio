import { useState } from 'react';
import { certificates } from '../data.js';
import { Tabs } from './Common.jsx';

export default function Certifications() {
  const [category, setCategory] = useState('All');
  return <section id="certifications" className="certifications section"><div className="section-label">06 / CONTINUED CURIOSITY</div><h2>Never done <em>learning.</em></h2>
    <Tabs id="cert-filters" label="Filter certificates" items={['All', ...new Set(certificates.map(item => item[0]))]} active={category} onChange={setCategory} />
    <div id="certificates">{certificates.filter(item => category === 'All' || item[0] === category).map(([, name, provider, date]) => <article className="certificate" key={name}><span>✧</span><div><h3>{name}</h3><p>{provider} / {date}</p></div><small>DOCUMENT TO BE ADDED</small></article>)}</div>

  </section>;
}
