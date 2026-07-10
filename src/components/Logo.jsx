export default function Logo({ className = "w-10 h-10" }) {
  return (
    <svg
      viewBox="0 0 120 120"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-label="Books Unbound"
    >
      {/* Back cover */}
      <path d="M24 40 L60 28 L96 40 L96 88 L60 100 L24 88 Z" fill="#1B2A4A" />

      {/* Left page - white */}
      <path d="M28 42 L60 31 L60 96 L28 84 Z" fill="#FBF7F1" />

      {/* Right page - white */}
      <path d="M60 31 L92 42 L92 84 L60 96 Z" fill="#FBF7F1" />

      {/* Left page edge - green */}
      <path d="M24 40 L28 42 L28 84 L24 88 Z" fill="#2D6A4F" />

      {/* Right page edge - orange */}
      <path d="M96 40 L92 42 L92 84 L96 88 Z" fill="#F4A261" />

      {/* Page color bands - green on left */}
      <rect x="35" y="38" width="22" height="4" rx="1" fill="#2D6A4F" opacity="0.15" />
      <rect x="35" y="50" width="22" height="2" rx="1" fill="#2D6A4F" opacity="0.1" />
      <rect x="35" y="60" width="22" height="2" rx="1" fill="#2D6A4F" opacity="0.1" />

      {/* Page color bands - orange on right */}
      <rect x="63" y="38" width="22" height="4" rx="1" fill="#F4A261" opacity="0.2" />
      <rect x="63" y="50" width="22" height="2" rx="1" fill="#F4A261" opacity="0.15" />
      <rect x="63" y="60" width="22" height="2" rx="1" fill="#F4A261" opacity="0.15" />

      {/* Spine line */}
      <line x1="60" y1="28" x2="60" y2="100" stroke="#1B2A4A" strokeWidth="2" strokeLinecap="round" />

      {/* Star - top left (green) */}
      <g transform="translate(30, 12)">
        <polygon points="0,-10 3,-3 10,-3 4,2 6,10 0,5 -6,10 -4,2 -10,-3 -3,-3" fill="#2D6A4F" />
      </g>

      {/* Star - top center (yellow/orange) */}
      <g transform="translate(60, 6)">
        <polygon points="0,-10 3,-3 10,-3 4,2 6,10 0,5 -6,10 -4,2 -10,-3 -3,-3" fill="#F0C75E" />
      </g>

      {/* Star - top right (red) */}
      <g transform="translate(90, 12)">
        <polygon points="0,-10 3,-3 10,-3 4,2 6,10 0,5 -6,10 -4,2 -10,-3 -3,-3" fill="#D94A4A" />
      </g>

      {/* Small decorative dots */}
      <circle cx="14" cy="20" r="2" fill="#2D6A4F" opacity="0.4" />
      <circle cx="106" cy="20" r="2" fill="#D94A4A" opacity="0.4" />
      <circle cx="18" cy="34" r="1.5" fill="#F4A261" opacity="0.5" />
      <circle cx="102" cy="34" r="1.5" fill="#F0C75E" opacity="0.5" />
    </svg>
  );
}