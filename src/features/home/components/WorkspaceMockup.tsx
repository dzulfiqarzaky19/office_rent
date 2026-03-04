const MOCKUP_CALLOUTS = [
  { x1: 450, y1: 130, x2: 520, y2: 100, tx: 530, ty: 103, label: "STUDIO DISPLAY" },
  { x1: 415, y1: 230, x2: 480, y2: 210, tx: 490, ty: 213, label: "TASK CHAIR" },
];

const COLORS = {
  FLOOR: "#f9f9f9",
  DESK: "#f5f5f5",
  CHAIR: "#000000",
  MONITOR: "#000000",
  LINE: "#eeeeee",
  ITEM_FILL: "#e5e5e5",
}

export const WorkspaceMockup = () => (
    <div className="mt-32 max-w-6xl mx-auto border border-border-main p-1">
      <div className="bg-bg-offset p-6 sm:p-12 relative overflow-hidden">
        <div className="flex items-center gap-4 mb-8">
          <div className="flex gap-1.5">
            <div className="w-2 h-2 rounded-full bg-border-main" />
            <div className="w-2 h-2 rounded-full bg-border-main" />
            <div className="w-2 h-2 rounded-full bg-border-main" />
          </div>
          <span className="font-prada text-[9px] text-text-muted tracking-[0.2em] uppercase">
            WORKSPACE STUDIO PREVIEW
          </span>
        </div>

        <div className="relative aspect-21/9 w-full bg-white border border-border-light overflow-hidden">
          <svg viewBox="0 0 800 340" className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
            
            {/* Floor */}
            <path d="M0 240 L800 240 L800 340 L0 340 Z" fill={COLORS.FLOOR} />
            <line x1="0" y1="240" x2="800" y2="240" stroke={COLORS.LINE} strokeWidth="1" />
            
            {/* Desk */}
            <rect x="250" y="180" width="300" height="10" fill={COLORS.DESK} stroke={COLORS.ITEM_FILL} />
            <rect x="270" y="190" width="4" height="60" fill={COLORS.ITEM_FILL} />
            <rect x="526" y="190" width="4" height="60" fill={COLORS.ITEM_FILL} />
            
            {/* Monitor */}
            <rect x="350" y="100" width="100" height="60" rx="1" fill={COLORS.MONITOR} />
            <rect x="395" y="160" width="10" height="20" fill={COLORS.ITEM_FILL} />
            <rect x="380" y="180" width="40" height="2" fill={COLORS.ITEM_FILL} />
            
            {/* Chair */}
            <circle cx="400" cy="230" r="15" fill={COLORS.CHAIR} />
            <rect x="398" y="245" width="4" height="20" fill={COLORS.CHAIR} />
            
            {/* Callouts */}
            {MOCKUP_CALLOUTS.map(({ x1, y1, x2, y2, tx, ty, label }) => (
              <g key={label}>
                <line x1={x1} y1={y1} x2={x2} y2={y2} stroke={COLORS.CHAIR} strokeWidth="0.5" strokeDasharray="2,2" />
                <text x={tx} y={ty} className="text-[10px] fill-black tracking-widest font-bold">{label}</text>
              </g>
            ))}
          </svg>
        </div>
      </div>
    </div>
  );
