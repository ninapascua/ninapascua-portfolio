export function assetUrl(path) {
  if (!path) return null;
  if (/^https?:\/\//i.test(path)) return path;
  return `${import.meta.env?.BASE_URL ?? './'}${path.replace(/^\/+/, '')}`;
}

export function safeUrl(value) {
  try {
    const url = new URL(value);
    return ['https:', 'http:'].includes(url.protocol) ? url.href : '#';
  } catch { return '#'; }
}

export function selectRepositories(repositories, { query = '', language = '', sort = 'updated' } = {}) {
  return repositories.filter(repo => repo.name.toLowerCase().includes(query.toLowerCase()) && (!language || repo.language === language))
    .sort((a, b) => sort === 'name' ? a.name.localeCompare(b.name) : sort === 'stars' ? (b.stargazers_count ?? -1) - (a.stargazers_count ?? -1) : (b.updated_at ? new Date(b.updated_at).getTime() : 0) - (a.updated_at ? new Date(a.updated_at).getTime() : 0));
}

export function mergeRepositoryArchive(repositories, collaborations) {
  const archive = new Map();
  for (const repo of [...collaborations, ...repositories]) {
    const name = repo.name.toLowerCase();
    if (name.includes('fcc') || name === 'rice-leaf-disease-detection') continue;
    const key = (repo.full_name || repo.html_url || repo.name).toLowerCase();
    archive.set(key, repo);
  }
  return [...archive.values()];
}
