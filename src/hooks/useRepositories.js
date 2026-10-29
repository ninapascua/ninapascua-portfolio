import { useCallback, useEffect, useRef, useState } from 'react';

const CACHE_KEY = 'nina-repos';
const CACHE_TTL = 30 * 60 * 1000;
const ENDPOINT = 'https://api.github.com/users/ninapascua/repos?sort=updated&per_page=100';

function readCache() {
  try {
    const cache = JSON.parse(localStorage.getItem(CACHE_KEY));
    return Array.isArray(cache?.data) && cache.data.every(repo => typeof repo.name === 'string') ? cache : null;
  } catch { return null; }
}

export default function useRepositories() {
  const [repositories, setRepositories] = useState([]);
  const [status, setStatus] = useState('Opening the archive…');
  const [loading, setLoading] = useState(false);
  const controller = useRef(null);

  const refresh = useCallback(async (force = false) => {
    controller.current?.abort();
    const request = new AbortController();
    controller.current = request;
    const cache = readCache();
    if (cache) {
      setRepositories(cache.data);
      if (!force && Date.now() - cache.time < CACHE_TTL) {
        setStatus('Public repository snapshot · cached for up to 30 minutes');
        setLoading(false);
        return;
      }
    }
    setLoading(true);
    setStatus('Fetching public repositories from GitHub…');
    const timeout = setTimeout(() => request.abort(new Error('Request timed out')), 15000);
    try {
      const response = await fetch(ENDPOINT, { signal: request.signal });
      if (!response.ok) throw new Error('GitHub unavailable');
      const data = await response.json();
      if (!Array.isArray(data) || !data.every(repo => typeof repo.name === 'string')) throw new Error('Invalid repository response');
      if (request !== controller.current) return;
      setRepositories(data);
      setStatus('Public repository data updated from GitHub just now');
      try { localStorage.setItem(CACHE_KEY, JSON.stringify({ time: Date.now(), data })); } catch { /* Storage can be disabled in the browser. */ }
    } catch {
      if (request !== controller.current) return;
      setStatus(cache ? 'GitHub is unavailable. Showing the last cached snapshot.' : 'GitHub is temporarily unavailable. Curated collaborative projects are shown below.');
    } finally {
      clearTimeout(timeout);
      if (request === controller.current) setLoading(false);
    }
  }, []);

  useEffect(() => {
    refresh();
    return () => { controller.current?.abort(); controller.current = null; };
  }, [refresh]);

  return { repositories, status, loading, refresh };
}
