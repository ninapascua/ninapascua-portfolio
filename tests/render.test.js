import test from "node:test";
import assert from "node:assert/strict";
import React from "react";
import { renderToStaticMarkup } from "react-dom/server";
import { createServer } from "vite";

test("React renders the complete portfolio without obsolete sections or placeholders", async () => {
  const server = await createServer({
    server: { middlewareMode: true, hmr: false },
    appType: "custom",
  });
  try {
    const { default: App } = await server.ssrLoadModule("/src/App.jsx");
    const html = renderToStaticMarkup(React.createElement(App));
    for (const section of [
      "main",
      "home",
      "about",
      "projects",
      "skills",
      "journey",
      "certifications",
      "contact",
    ]) {
      assert.ok(html.includes(`id="${section}"`), `${section} renders`);
    }
    for (const name of [
      "AniMedika",
      "Sipori",
      "eLingkod",
      "Truth in Tales",
      "Bake &amp; Co.",
      "Floralia",
    ]) {
      assert.ok(html.includes(name), `${name} is available`);
    }
    assert.ok(html.includes("Niña"));
    assert.ok(html.includes("CompTIA IT Fundamentals+"));
    assert.ok(html.includes("Director for Community Development"));
    assert.ok(html.includes('aria-label="Filter projects"'));
    assert.ok(!html.includes('id="github"'));
    assert.ok(!html.includes('href="#github"'));
    assert.equal((html.match(/class="certificate"/g) || []).length, 11);
    assert.equal((html.match(/Verify on Credly/g) || []).length, 8);
    assert.equal((html.match(/Verify on Coursera/g) || []).length, 1);
    assert.equal((html.match(/Verify on freeCodeCamp/g) || []).length, 2);
    assert.equal((html.match(/VERIFICATION PENDING/g) || []).length, 0);
    assert.doesNotMatch(
      html,
      /COMING SOON|SCREENSHOTS TO BE ADDED|VISUAL PLACEHOLDER|not been supplied/i,
    );
    const ids = [...html.matchAll(/\bid="([^"]+)"/g)].map((match) => match[1]);
    assert.equal(new Set(ids).size, ids.length, "Rendered IDs must be unique");
    for (const [, target] of html.matchAll(/href="#([^"]+)"/g))
      assert.ok(ids.includes(target), `Broken internal anchor: ${target}`);

    const { projects } = await server.ssrLoadModule("/src/data.js");
    const { CaseStudy } = await server.ssrLoadModule(
      "/src/components/Projects.jsx",
    );
    for (const project of projects) {
      const caseHtml = renderToStaticMarkup(
        React.createElement(CaseStudy, { project }),
      );
      assert.ok(caseHtml.includes('id="modal-title"'));
      assert.ok(caseHtml.includes("My role &amp; contributions"));
      assert.ok(
        caseHtml.includes("ACTUAL PROJECT SCREENSHOT") ||
          caseHtml.includes("PROJECT PRESENTATION") ||
          caseHtml.includes("DESIGN BOARD"),
      );
      assert.doesNotMatch(caseHtml, /PLACEHOLDER|COMING SOON/i);
    }
    const { default: CvDocument } = await server.ssrLoadModule(
      "/src/components/CvDocument.jsx",
    );
    const cvHtml = renderToStaticMarkup(React.createElement(CvDocument));
    assert.ok(cvHtml.includes("<iframe"));
    assert.ok(cvHtml.includes('download="Nina-Pascua-CV.pdf"'));
  } finally {
    await server.close();
  }
});
