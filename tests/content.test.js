import test from "node:test";
import assert from "node:assert/strict";
import { readFileSync, statSync } from "node:fs";
import { resolve, sep } from "node:path";
import {
  profile,
  projects,
  certificates,
  certificateEvidence,
} from "../src/data.js";

const publicRoot = resolve("public");
function asset(path) {
  assert.ok(
    typeof path === "string" && path.startsWith("assets/"),
    `Expected a local asset: ${path}`,
  );
  const fullPath = resolve(publicRoot, path);
  assert.ok(
    fullPath.startsWith(publicRoot + sep),
    "Asset must remain inside public/",
  );
  assert.ok(statSync(fullPath).size > 0, `Asset is empty: ${path}`);
  return fullPath;
}
function webLink(value) {
  assert.equal(
    new URL(value).protocol,
    "https:",
    `Expected an HTTPS link: ${value}`,
  );
}

test("portrait, original PDF, and every project image exist", () => {
  asset(profile.photo);
  assert.equal(
    readFileSync(asset(profile.cv)).subarray(0, 5).toString(),
    "%PDF-",
  );
  webLink(profile.linkedin);
  assert.equal(projects.length, 6);
  assert.equal(
    new Set(projects.map((project) => project.name)).size,
    projects.length,
  );
  for (const project of projects) {
    assert.ok(
      project.description &&
        project.role.length &&
        project.features.length &&
        project.tech.length,
      `${project.name} has incomplete content`,
    );
    assert.ok(project.media.length > 0, `${project.name} has no media`);
    for (const image of project.media) {
      asset(image.src);
      assert.ok(
        image.alt?.trim(),
        `${project.name} has an image without alt text`,
      );
      assert.ok(
        image.width > 0 && image.height > 0,
        `${project.name} has no intrinsic image dimensions`,
      );
    }
    if (project.live) webLink(project.live);
    if (project.repo) assert.match(project.repo, /^[\w.-]+\/[\w.-]+$/);
  }
});

test("all eleven credentials have dates, verification links, and valid PNG icons", () => {
  assert.equal(certificates.length, 11);
  assert.equal(new Set(certificates.map(([, name]) => name)).size, 11);
  for (const [category, name, provider, date] of certificates) {
    assert.ok(category && provider && date, `Incomplete credential: ${name}`);
    const evidence = certificateEvidence[name];
    assert.ok(evidence, `Missing credential evidence: ${name}`);
    webLink(evidence.url);
    const bytes = readFileSync(asset(evidence.image));
    assert.equal(
      bytes.subarray(0, 8).toString("hex"),
      "89504e470d0a1a0a",
      `Invalid badge image: ${name}`,
    );
  }
});
