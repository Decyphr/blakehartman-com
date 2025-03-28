// Simple decorative elements for section separators
export function SectionDecoration({ type = "dots" }: { type?: "dots" | "grid" | "lines" | "blueprint" | "random" }) {
  // Choose decoration based on type or randomly if "random"
  const decorationType
    = type === "random" ? ["dots", "grid", "lines", "blueprint"][Math.floor(Math.random() * 4)] : type;

  return (
    <div className="absolute inset-x-0 h-40 pointer-events-none opacity-[0.15] overflow-hidden">
      {decorationType === "dots" && <DotPattern />}
      {decorationType === "grid" && <GridPattern />}
      {decorationType === "lines" && <LinePattern />}
      {decorationType === "blueprint" && <BlueprintMarks />}
    </div>
  );
}

// Simple dot pattern
function DotPattern() {
  return (
    <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
      <pattern id="dotPattern" width="20" height="20" patternUnits="userSpaceOnUse">
        <circle cx="10" cy="10" r="1" fill="#000" />
      </pattern>
      <rect width="100%" height="100%" fill="url(#dotPattern)" />
    </svg>
  );
}

// Simple grid pattern
function GridPattern() {
  return (
    <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
      <pattern id="gridPattern" width="40" height="40" patternUnits="userSpaceOnUse">
        <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#000" strokeWidth="0.5" />
      </pattern>
      <rect width="100%" height="100%" fill="url(#gridPattern)" />
    </svg>
  );
}

// Simple line pattern
function LinePattern() {
  // Generate some random lines
  const lines = Array.from({ length: 10 }, (_, i) => {
    const y1 = Math.random() * 100;
    const y2 = Math.random() * 100;
    return (
      <line
        key={i}
        x1="0"
        y1={`${y1}%`}
        x2="100%"
        y2={`${y2}%`}
        stroke="#000"
        strokeWidth="0.5"
        strokeDasharray="1 4"
      />
    );
  });

  return (
    <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
      {lines}
    </svg>
  );
}

// Blueprint corner marks
function BlueprintMarks() {
  return (
    <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
      {/* Top left corner mark */}
      <path d="M 20 0 L 0 0 L 0 20" stroke="#000" strokeWidth="1" fill="none" />

      {/* Top right corner mark */}
      <path d="M calc(100% - 20) 0 L 100% 0 L 100% 20" stroke="#000" strokeWidth="1" fill="none" />

      {/* Bottom left corner mark */}
      <path d="M 0 calc(100% - 20) L 0 100% L 20 100%" stroke="#000" strokeWidth="1" fill="none" />

      {/* Bottom right corner mark */}
      <path d="M calc(100% - 20) 100% L 100% 100% L 100% calc(100% - 20)" stroke="#000" strokeWidth="1" fill="none" />

      {/* Center marks */}
      <line x1="calc(50% - 10)" y1="50%" x2="calc(50% + 10)" y2="50%" stroke="#000" strokeWidth="1" />
      <line x1="50%" y1="calc(50% - 10)" x2="50%" y2="calc(50% + 10)" stroke="#000" strokeWidth="1" />

      {/* Measurement lines */}
      <line x1="10%" y1="0" x2="10%" y2="10" stroke="#000" strokeWidth="0.5" />
      <line x1="30%" y1="0" x2="30%" y2="10" stroke="#000" strokeWidth="0.5" />
      <line x1="50%" y1="0" x2="50%" y2="10" stroke="#000" strokeWidth="0.5" />
      <line x1="70%" y1="0" x2="70%" y2="10" stroke="#000" strokeWidth="0.5" />
      <line x1="90%" y1="0" x2="90%" y2="10" stroke="#000" strokeWidth="0.5" />

      <line x1="0" y1="25%" x2="10" y2="25%" stroke="#000" strokeWidth="0.5" />
      <line x1="0" y1="75%" x2="10" y2="75%" stroke="#000" strokeWidth="0.5" />
      <line x1="100%" y1="25%" x2="calc(100% - 10)" y2="25%" stroke="#000" strokeWidth="0.5" />
      <line x1="100%" y1="75%" x2="calc(100% - 10)" y2="75%" stroke="#000" strokeWidth="0.5" />
    </svg>
  );
}
