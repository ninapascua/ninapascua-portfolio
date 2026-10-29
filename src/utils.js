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

export function selectRepositories(repositories, { query = '', language = '', sort = 'updated', order = [] } = {}) {
  const ranks = new Map(order.map((name, index) => [name.toLowerCase(), index]));
  const rank = repo => ranks.get((repo.full_name || repo.name).toLowerCase()) ?? Number.MAX_SAFE_INTEGER;
  return repositories.filter(repo => repo.name.toLowerCase().includes(query.toLowerCase()) && (!language || repo.language === language))
    .sort((a, b) => {
      if (sort === 'featured' && rank(a) !== rank(b)) return rank(a) - rank(b);
      if (sort === 'name') return a.name.localeCompare(b.name);
      if (sort === 'stars') return (b.stargazers_count ?? -1) - (a.stargazers_count ?? -1);
      return (b.updated_at ? new Date(b.updated_at).getTime() : 0) - (a.updated_at ? new Date(a.updated_at).getTime() : 0);
    });
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
