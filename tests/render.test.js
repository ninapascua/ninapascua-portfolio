import test from 'node:test';
import assert from 'node:assert/strict';
import React from 'react';
import { renderToStaticMarkup } from 'react-dom/server';
import { createServer } from 'vite';

test('React renders all portfolio sections, six project entries, and the full credential archive', async () => {
  const server = await createServer({ server: { middlewareMode: true, hmr: false }, appType: 'custom' });
  try {
    const { default: App } = await server.ssrLoadModule('/src/App.jsx');
    const html = renderToStaticMarkup(React.createElement(App));
    for (const section of ['main', 'home', 'about', 'projects', 'skills', 'journey', 'certifications', 'contact']) {
      assert.ok(html.includes(`id="${section}"`), `${section} renders`);
    }
    for (const name of ['AniMedika', 'Sipori', 'eLingkod', 'Truth in Tales', 'Bake &amp; Co.', 'Floralia']) {
      assert.ok(html.includes(name), `${name} is available`);
    }
    assert.ok(html.includes('Niña'));
    assert.ok(html.includes('CompTIA IT Fundamentals+'));
    assert.ok(html.includes('Director for Community Development'));
    assert.ok(html.includes('aria-label="Filter projects"'));
    assert.ok(!html.includes('id="github"'));
    assert.ok(!html.includes('href="#github"'));
    assert.equal((html.match(/class="certificate"/g) || []).length, 11);
    assert.equal((html.match(/Verify on Credly/g) || []).length, 8);
    assert.equal((html.match(/Verify on Coursera/g) || []).length, 1);
    assert.equal((html.match(/Verify on freeCodeCamp/g) || []).length, 2);
    assert.equal((html.match(/VERIFICATION PENDING/g) || []).length, 0);
  } finally { await server.close(); }
});
