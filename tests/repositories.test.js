import test from 'node:test';
import assert from 'node:assert/strict';
import { safeUrl, selectRepositories, mergeRepositoryArchive } from '../src/utils.js';
import { repositoryOrder } from '../src/data.js';

const repositories = [
  { name: 'Sipori', language: 'JavaScript', stargazers_count: 2, updated_at: '2026-03-10' },
  { name: 'Archive', language: null, stargazers_count: 5, updated_at: '2026-04-10' },
  { name: 'Study', language: 'Python', stargazers_count: 0, updated_at: '2026-01-10' },
];

test('portfolio order preserves the requested sequence, including after filtering', () => {
  const archive = [...repositoryOrder].reverse().map((full_name, index) => ({
    full_name, name: full_name.split('/')[1], language: index % 2 ? 'JavaScript' : null,
  }));
  const ordered = selectRepositories(archive, { sort: 'featured', order: repositoryOrder });
  assert.deepEqual(ordered.map(repo => repo.full_name), repositoryOrder);
  const filtered = selectRepositories(archive, { sort: 'featured', order: repositoryOrder, language: 'JavaScript' });
  assert.deepEqual(filtered.map(repo => repo.full_name), repositoryOrder.filter(name => archive.find(repo => repo.full_name === name).language === 'JavaScript'));
});

test('repository search combines case-insensitive name matching and language selection', () => {
  assert.deepEqual(selectRepositories(repositories, { query: 'SI', language: 'JavaScript' }).map(repo => repo.name), ['Sipori']);
  assert.equal(selectRepositories(repositories, { query: 'Sipori', language: 'Python' }).length, 0);
});

test('repository sort handles missing languages and leaves original API data unchanged', () => {
  assert.deepEqual(selectRepositories(repositories).map(repo => repo.name), ['Archive', 'Sipori', 'Study']);
  assert.deepEqual(selectRepositories(repositories, { sort: 'name' }).map(repo => repo.name), ['Archive', 'Sipori', 'Study']);
  assert.deepEqual(selectRepositories(repositories, { sort: 'stars' }).map(repo => repo.name), ['Archive', 'Sipori', 'Study']);
  assert.equal(repositories[0].name, 'Sipori');
});

test('API-provided website links accept web protocols and reject executable URLs', () => {
  assert.equal(safeUrl('javascript:alert(1)'), '#');
  assert.equal(safeUrl('not a URL'), '#');
  assert.equal(safeUrl('https://example.com/demo'), 'https://example.com/demo');
});

test('combined archive hides excluded repositories and deduplicates team repositories', () => {
  const team = { name: 'AniMedika', full_name: 'cinemaseven/AniMedika', curated: true };
  const fetchedTeam = { ...team, curated: false, updated_at: '2026-05-10' };
  const items = mergeRepositoryArchive([
    ...repositories,
    { name: 'fcc-survey-form' },
    { name: 'FCC-portfolio' },
    { name: 'Rice-Leaf-Disease-Detection' },
    fetchedTeam,
  ], [team, { name: 'eLingkod', full_name: 'cinemaseven/eLingkod', curated: true }]);
  assert.equal(items.length, 5);
  assert.equal(items.filter(repo => repo.full_name === team.full_name).length, 1);
  assert.equal(items.find(repo => repo.full_name === team.full_name).curated, false);
  assert.equal(selectRepositories(items)[0].name, 'AniMedika');
});
