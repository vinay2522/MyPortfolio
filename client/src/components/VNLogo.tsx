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
      className={`${sizeClasses[size]} ${className} ${animated ? "animate-fade-in" : ""}`}
      data-testid="vn-logo"
    >
      <svg
        viewBox="0 0 100 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full"
      >
        <defs>
          <linearGradient id="vnGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#06b6d4" />
            <stop offset="50%" stopColor="#8b5cf6" />
            <stop offset="100%" stopColor="#a855f7" />
          </linearGradient>
          <linearGradient id="vnGradient2" x1="100%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#a855f7" />
            <stop offset="50%" stopColor="#8b5cf6" />
            <stop offset="100%" stopColor="#06b6d4" />
          </linearGradient>
          <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="2" result="coloredBlur" />
            <feMerge>
              <feMergeNode in="coloredBlur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>
        
        {/* Background circle with gradient border */}
        <circle
          cx="50"
          cy="50"
          r="46"
          fill="none"
          stroke="url(#vnGradient)"
          strokeWidth="3"
          filter="url(#glow)"
        />
        
        {/* V letter - stylized */}
        <path
          d="M25 25 L40 70 L50 45"
          stroke="url(#vnGradient)"
          strokeWidth="5"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
          filter="url(#glow)"
        />
        
        {/* N letter - stylized, connected to V */}
        <path
          d="M50 45 L50 70 L65 25 L75 70"
          stroke="url(#vnGradient2)"
          strokeWidth="5"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
          filter="url(#glow)"
        />
        
        {/* Decorative dot */}
        <circle
          cx="50"
          cy="80"
          r="3"
          fill="url(#vnGradient)"
          filter="url(#glow)"
        />
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
