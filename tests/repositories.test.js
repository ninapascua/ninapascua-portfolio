import test from 'node:test';
import assert from 'node:assert/strict';
import { safeUrl, selectRepositories } from '../src/utils.js';

const repositories = [
  { name: 'Sipori', language: 'JavaScript', stargazers_count: 2, updated_at: '2026-03-10' },
  { name: 'Archive', language: null, stargazers_count: 5, updated_at: '2026-04-10' },
  { name: 'Study', language: 'Python', stargazers_count: 0, updated_at: '2026-01-10' },
];

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
