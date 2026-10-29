import { useState } from 'react';
import { projects } from '../data.js';
import { safeUrl, selectRepositories } from '../utils.js';
import useRepositories from '../hooks/useRepositories.js';
import { Chips } from './Common.jsx';

function RepositoryCard({ repository: repo, index }) {
  return <article className="repo-card"><span className="meta">{String(index + 1).padStart(2, '0')} / {repo.language || 'Unspecified language'}</span><h3>{repo.name}</h3><p>{repo.description || 'No description provided.'}</p><Chips items={(repo.topics || []).slice(0, 5)} />
    <div className="meta">★ {repo.stargazers_count} · FORKS {repo.forks_count}<br />UPDATED {new Date(repo.updated_at).toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' })}</div>
    <a href={safeUrl(repo.html_url)} target="_blank" rel="noreferrer">View repository ↗</a>{repo.homepage && <a href={safeUrl(repo.homepage)} target="_blank" rel="noreferrer">Website ↗</a>}
  </article>;
}

export default function GitHubArchive() {
  const { repositories, status, loading, refresh } = useRepositories();
  const [query, setQuery] = useState('');
  const [language, setLanguage] = useState('');
  const [sort, setSort] = useState('updated');
  const languages = [...new Set(repositories.map(repo => repo.language).filter(Boolean))].sort();
  const items = selectRepositories(repositories, { query, language, sort });
  return <section id="github" className="github section"><div className="section-top"><div><div className="section-label">03 / THE CODE ARCHIVE</div><h2>Under the <em>hood.</em></h2></div><a className="button" href="https://github.com/ninapascua" target="_blank" rel="noreferrer">Explore my GitHub ↗</a></div><p>A living index of public repositories, fetched directly from GitHub.</p>
    <div className="archive-controls"><label>Find a repository<input id="repo-search" type="search" placeholder="Search the archive…" value={query} onChange={event => setQuery(event.target.value)} /></label><label>Language<select id="language" value={language} onChange={event => setLanguage(event.target.value)}><option value="">All languages</option>{languages.map(value => <option key={value}>{value}</option>)}</select></label><label>Sort by<select id="sort" value={sort} onChange={event => setSort(event.target.value)}><option value="updated">Recently updated</option><option value="name">Name A–Z</option><option value="stars">Most stars</option></select></label><button id="refresh" disabled={loading} onClick={() => refresh(true)}>Refresh ↻</button></div>
    <p id="repo-status" role="status">{status}</p><div id="repos" className="repo-grid" aria-busy={loading}>
      {items.map((repo, index) => <RepositoryCard key={repo.id ?? repo.name} repository={repo} index={index} />)}
      {!items.length && repositories.length > 0 && <p>No repositories match this selection.</p>}
      {!repositories.length && !loading && <a className="button" href="https://github.com/ninapascua" target="_blank" rel="noreferrer">Browse repositories on GitHub ↗</a>}
    </div>
    <h3 className="collab-title">Filed with friends <span> / COLLABORATIVE REPOSITORIES</span></h3><div id="collaborative" className="repo-grid">{projects.filter(project => project.repo && !project.repo.startsWith('ninapascua/')).map(project => <article className="repo-card" key={project.name}><span className="meta">TEAM PROJECT / {project.repo.split('/')[0]}</span><h3>{project.name}</h3><p>{project.subtitle}</p><a href={`https://github.com/${project.repo}`} target="_blank" rel="noreferrer">View team repository ↗</a></article>)}</div>
  </section>;
}
