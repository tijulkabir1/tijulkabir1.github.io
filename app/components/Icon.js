const paths = {
  arrowUpRight: <path d="M6 18 18 6M6 6h12v12" />,
  arrowDown: <path d="M12 4v16m-6-6 6 6 6-6" />,
  check: <path d="m5 12 4 4L19 6" />,
  shield: (
    <>
      <path d="m12 3 8 3v6c0 5-8 9-8 9s-8-4-8-9V6l8-3Z" />
      <path d="m8 12 3 3 5-6" />
    </>
  ),
  award: (
    <>
      <circle cx="12" cy="9" r="6" />
      <path d="m8 14-1 7 5-3 5 3-1-7" />
    </>
  ),
  crosshair: (
    <>
      <circle cx="12" cy="12" r="7" />
      <circle cx="12" cy="12" r="2" />
      <path d="M12 2v3m0 14v3M2 12h3m14 0h3" />
    </>
  ),
  code: <path d="m7 7-5 5 5 5m10-10 5 5-5 5M14 4l-4 16" />,
  flag: <path d="M5 22V3c5-3 9 3 14 0v11c-5 3-9-3-14 0" />,
  terminal: (
    <>
      <rect x="3" y="4" width="18" height="16" rx="3" />
      <path d="m7 9 3 3-3 3m6 0h4" />
    </>
  ),
  layers: <path d="m12 2 10 6-10 6L2 8l10-6ZM2 13l10 6 10-6M2 18l10 6 10-6" />,
  lock: (
    <>
      <rect x="4" y="10" width="16" height="11" rx="2" />
      <path d="M8 10V7a4 4 0 0 1 8 0v3m-4 5v2" />
    </>
  ),
  file: <path d="M14 2H5v20h14V7l-5-5Zm0 0v6h5M8 12h8M8 16h6" />,
  github: (
    <path
      d="M9 19c-4 1-4-2-6-2m13 5v-4c0-1-.3-1.7-1-2 4-.5 6-2 6-6 0-2-1-3-2-4 0-1 0-3-.5-4-2 0-3 1-4 2a14 14 0 0 0-6 0C7 3 6 2 4 2c-.5 1-.5 3-.5 4C2 7 2 8 2 10c0 4 2 5.5 6 6-.7.3-1 1-1 2v4"
      transform="translate(1 0) scale(.92)"
    />
  ),
  linkedin: (
    <>
      <rect x="3" y="3" width="18" height="18" rx="2" />
      <path d="M7 10v7m0-10v.1M11 17v-7m0 3a3 3 0 0 1 6 0v4" />
    </>
  ),
  play: (
    <>
      <rect x="2" y="5" width="20" height="14" rx="4" />
      <path d="m10 9 5 3-5 3V9Z" />
    </>
  ),
  book: (
    <path d="M12 5v16M12 5C9 3 5 3 2 4v15c4-1 7 0 10 2 3-2 6-3 10-2V4c-3-1-7-1-10 1Z" />
  ),
  copy: (
    <>
      <rect x="8" y="8" width="13" height="13" rx="2" />
      <path d="M16 8V3H3v13h5" />
    </>
  ),
  mail: (
    <>
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="m3 6 9 7 9-7" />
    </>
  ),
};
export default function Icon({ name, className = "" }) {
  return (
    <svg
      className={`icon ${className}`}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      {paths[name] || paths.arrowUpRight}
    </svg>
  );
}
