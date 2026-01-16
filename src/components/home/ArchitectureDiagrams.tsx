export function AIArchitecture() {
  return (
    <svg width="200" height="120" viewBox="0 0 200 120" className="text-primary">
      {/* User */}
      <rect x="10" y="45" width="40" height="30" rx="4" fill="currentColor" fillOpacity="0.2" stroke="currentColor" strokeWidth="1" />
      <text x="30" y="64" textAnchor="middle" className="text-[8px] fill-current">User</text>
      
      {/* API */}
      <rect x="80" y="45" width="40" height="30" rx="4" fill="currentColor" fillOpacity="0.2" stroke="currentColor" strokeWidth="1" />
      <text x="100" y="64" textAnchor="middle" className="text-[8px] fill-current">API</text>
      
      {/* LLM */}
      <rect x="150" y="45" width="40" height="30" rx="4" fill="currentColor" fillOpacity="0.3" stroke="currentColor" strokeWidth="1" />
      <text x="170" y="64" textAnchor="middle" className="text-[8px] fill-current">LLM</text>
      
      {/* Arrows */}
      <path d="M50 60 L80 60" stroke="currentColor" strokeWidth="1" markerEnd="url(#arrow)" />
      <path d="M120 60 L150 60" stroke="currentColor" strokeWidth="1" markerEnd="url(#arrow)" />
      
      {/* DB */}
      <ellipse cx="100" cy="100" rx="25" ry="12" fill="currentColor" fillOpacity="0.2" stroke="currentColor" strokeWidth="1" />
      <text x="100" y="104" textAnchor="middle" className="text-[8px] fill-current">Vector DB</text>
      <path d="M100 75 L100 88" stroke="currentColor" strokeWidth="1" strokeDasharray="2" />
      
      <defs>
        <marker id="arrow" markerWidth="6" markerHeight="6" refX="5" refY="3" orient="auto">
          <path d="M0,0 L6,3 L0,6 Z" fill="currentColor" />
        </marker>
      </defs>
    </svg>
  );
}

export function MobileArchitecture() {
  return (
    <svg width="200" height="120" viewBox="0 0 200 120" className="text-accent">
      {/* Mobile App */}
      <rect x="75" y="10" width="50" height="30" rx="4" fill="currentColor" fillOpacity="0.2" stroke="currentColor" strokeWidth="1" />
      <text x="100" y="29" textAnchor="middle" className="text-[8px] fill-current">Mobile App</text>
      
      {/* Services */}
      <rect x="20" y="60" width="35" height="25" rx="4" fill="currentColor" fillOpacity="0.2" stroke="currentColor" strokeWidth="1" />
      <text x="37" y="76" textAnchor="middle" className="text-[6px] fill-current">Payments</text>
      
      <rect x="65" y="60" width="35" height="25" rx="4" fill="currentColor" fillOpacity="0.2" stroke="currentColor" strokeWidth="1" />
      <text x="82" y="76" textAnchor="middle" className="text-[6px] fill-current">Delivery</text>
      
      <rect x="110" y="60" width="35" height="25" rx="4" fill="currentColor" fillOpacity="0.2" stroke="currentColor" strokeWidth="1" />
      <text x="127" y="76" textAnchor="middle" className="text-[6px] fill-current">Social</text>
      
      <rect x="155" y="60" width="35" height="25" rx="4" fill="currentColor" fillOpacity="0.2" stroke="currentColor" strokeWidth="1" />
      <text x="172" y="76" textAnchor="middle" className="text-[6px] fill-current">Store</text>
      
      {/* Backend */}
      <rect x="65" y="100" width="70" height="15" rx="4" fill="currentColor" fillOpacity="0.3" stroke="currentColor" strokeWidth="1" />
      <text x="100" y="111" textAnchor="middle" className="text-[7px] fill-current">Microservices</text>
      
      {/* Lines */}
      <path d="M100 40 L37 60" stroke="currentColor" strokeWidth="1" strokeOpacity="0.5" />
      <path d="M100 40 L82 60" stroke="currentColor" strokeWidth="1" strokeOpacity="0.5" />
      <path d="M100 40 L127 60" stroke="currentColor" strokeWidth="1" strokeOpacity="0.5" />
      <path d="M100 40 L172 60" stroke="currentColor" strokeWidth="1" strokeOpacity="0.5" />
    </svg>
  );
}

export function BlockchainArchitecture() {
  return (
    <svg width="200" height="120" viewBox="0 0 200 120" className="text-neon-purple">
      {/* Frontend */}
      <rect x="75" y="10" width="50" height="25" rx="4" fill="currentColor" fillOpacity="0.2" stroke="currentColor" strokeWidth="1" />
      <text x="100" y="26" textAnchor="middle" className="text-[7px] fill-current">DApp</text>
      
      {/* Smart Contract */}
      <rect x="60" y="50" width="80" height="25" rx="4" fill="currentColor" fillOpacity="0.3" stroke="currentColor" strokeWidth="1" />
      <text x="100" y="66" textAnchor="middle" className="text-[7px] fill-current">Smart Contracts</text>
      
      {/* Blockchain */}
      <g transform="translate(30, 90)">
        {[0, 1, 2, 3, 4].map((i) => (
          <g key={i}>
            <rect x={i * 30} y="0" width="25" height="20" rx="2" fill="currentColor" fillOpacity="0.2" stroke="currentColor" strokeWidth="1" />
            {i < 4 && <line x1={i * 30 + 25} y1="10" x2={i * 30 + 30} y2="10" stroke="currentColor" strokeWidth="1" />}
          </g>
        ))}
      </g>
      
      {/* Lines */}
      <path d="M100 35 L100 50" stroke="currentColor" strokeWidth="1" />
      <path d="M100 75 L100 90" stroke="currentColor" strokeWidth="1" />
    </svg>
  );
}

export function GameArchitecture() {
  return (
    <svg width="200" height="120" viewBox="0 0 200 120" className="text-neon-pink">
      {/* Game Engine */}
      <rect x="60" y="10" width="80" height="30" rx="4" fill="currentColor" fillOpacity="0.3" stroke="currentColor" strokeWidth="1" />
      <text x="100" y="29" textAnchor="middle" className="text-[8px] fill-current">Unity Engine</text>
      
      {/* Systems */}
      <rect x="10" y="55" width="45" height="20" rx="4" fill="currentColor" fillOpacity="0.2" stroke="currentColor" strokeWidth="1" />
      <text x="32" y="69" textAnchor="middle" className="text-[6px] fill-current">Physics</text>
      
      <rect x="65" y="55" width="35" height="20" rx="4" fill="currentColor" fillOpacity="0.2" stroke="currentColor" strokeWidth="1" />
      <text x="82" y="69" textAnchor="middle" className="text-[6px] fill-current">AI</text>
      
      <rect x="110" y="55" width="40" height="20" rx="4" fill="currentColor" fillOpacity="0.2" stroke="currentColor" strokeWidth="1" />
      <text x="130" y="69" textAnchor="middle" className="text-[6px] fill-current">Render</text>
      
      <rect x="160" y="55" width="35" height="20" rx="4" fill="currentColor" fillOpacity="0.2" stroke="currentColor" strokeWidth="1" />
      <text x="177" y="69" textAnchor="middle" className="text-[6px] fill-current">Audio</text>
      
      {/* Assets */}
      <rect x="40" y="90" width="120" height="20" rx="4" fill="currentColor" fillOpacity="0.2" stroke="currentColor" strokeWidth="1" />
      <text x="100" y="104" textAnchor="middle" className="text-[7px] fill-current">3D Assets & Shaders</text>
      
      {/* Lines */}
      <path d="M100 40 L32 55" stroke="currentColor" strokeWidth="1" strokeOpacity="0.5" />
      <path d="M100 40 L82 55" stroke="currentColor" strokeWidth="1" strokeOpacity="0.5" />
      <path d="M100 40 L130 55" stroke="currentColor" strokeWidth="1" strokeOpacity="0.5" />
      <path d="M100 40 L177 55" stroke="currentColor" strokeWidth="1" strokeOpacity="0.5" />
    </svg>
  );
}
