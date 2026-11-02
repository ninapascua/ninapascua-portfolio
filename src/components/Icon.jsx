// Draw symbols explicitly so mobile emoji fonts cannot change their appearance.
const paths = {
  external: "M5 19 19 5M5 5h14v14",
  down: "M12 3v18M4 13l8 8 8-8",
  up: "M12 21V3M4 11l8-8 8 8",
  left: "M21 12H3M11 4l-8 8 8 8",
  right: "M3 12h18M13 4l8 8-8 8",
  asterisk: "M12 1v22M1 12h22M4 4l16 16M4 20 20 4",
  plus: "M12 4v16M4 12h16",
  minus: "M4 12h16",
  close: "M5 5l14 14M5 19 19 5",
};

export default function Icon({ name, className = "" }) {
  return (
    <svg
      className={`icon icon-${name} ${className}`.trim()}
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={name === "asterisk" ? 1.2 : 1.5}
      strokeLinecap="butt"
      strokeLinejoin="miter"
      aria-hidden="true"
      focusable="false"
    >
      <path d={paths[name]} />
    </svg>
  );
}
