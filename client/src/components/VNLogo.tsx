interface VNLogoProps {
  size?: "sm" | "md" | "lg" | "xl";
  className?: string;
  animated?: boolean;
}

const sizeClasses = {
  sm: "w-8 h-8",
  md: "w-10 h-10",
  lg: "w-14 h-14",
  xl: "w-20 h-20",
};

export function VNLogo({ size = "md", className = "", animated = true }: VNLogoProps) {
  return (
    <div 
      className={`${sizeClasses[size]} ${className} ${animated ? "animate-fade-in" : ""} relative group`}
      data-testid="vn-logo"
    >
      <svg
        viewBox="0 0 100 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full drop-shadow-lg transform transition-all duration-500 group-hover:scale-105"
      >
        <defs>
          {/* Clean primary gradient - cyan to purple */}
          <linearGradient id="vnGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#06b6d4" />
            <stop offset="50%" stopColor="#8b5cf6" />
            <stop offset="100%" stopColor="#a855f7" />
          </linearGradient>
          
          {/* Subtle glow effect */}
          <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="2.5" result="coloredBlur" />
            <feMerge>
              <feMergeNode in="coloredBlur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
          
          {/* Soft pulse effect */}
          <filter id="softPulse" x="-100%" y="-100%" width="300%" height="300%">
            <feGaussianBlur stdDeviation="3" result="coloredBlur">
              <animate attributeName="stdDeviation" values="2;4;2" dur="3s" repeatCount="indefinite" />
            </feGaussianBlur>
            <feMerge>
              <feMergeNode in="coloredBlur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>
        
        {/* Single clean outer ring with subtle pulse */}
        <circle
          cx="50"
          cy="50"
          r="45"
          fill="none"
          stroke="url(#vnGradient)"
          strokeWidth="2"
          opacity="0.25"
          filter="url(#softPulse)"
        />
        
        {/* Main circle - clean border */}
        <circle
          cx="50"
          cy="50"
          r="42"
          fill="rgba(6, 182, 212, 0.03)"
          stroke="url(#vnGradient)"
          strokeWidth="2.5"
          filter="url(#glow)"
        />
        
        {/* Clean V letter - elegant and simple */}
        <path
          d="M22 22 L35 70 L45 50 L55 70 L68 22"
          stroke="url(#vnGradient)"
          strokeWidth="5.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
          filter="url(#glow)"
        />
        
        {/* Clean N letter - connected elegantly */}
        <path
          d="M45 50 L45 70 L60 35 L75 70"
          stroke="url(#vnGradient)"
          strokeWidth="5.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
          filter="url(#glow)"
        />
        
        {/* Single elegant accent dot */}
        <circle
          cx="50"
          cy="82"
          r="3"
          fill="url(#vnGradient)"
          filter="url(#glow)"
          opacity="0.9"
        >
          <animate attributeName="opacity" values="0.7;1;0.7" dur="2s" repeatCount="indefinite" />
        </circle>
      </svg>
    </div>
  );
}

export function VNLogoText({ className = "" }: { className?: string }) {
  return (
    <span 
      className={`font-display font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-violet-500 to-purple-500 ${className}`}
      data-testid="vn-logo-text"
    >
      VN
    </span>
  );
}
