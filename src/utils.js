export function assetUrl(path) {
  if (!path) return null;
  if (/^https?:\/\//i.test(path)) return path;
  return `${import.meta.env?.BASE_URL ?? "./"}${path.replace(/^\/+/, "")}`;
}
