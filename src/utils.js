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
    .sort((a, b) => sort === 'name' ? a.name.localeCompare(b.name) : sort === 'stars' ? b.stargazers_count - a.stargazers_count : new Date(b.updated_at) - new Date(a.updated_at));
}
