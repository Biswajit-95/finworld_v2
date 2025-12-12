import React from "react";

interface LogoProps {
  className?: string;
  light?: boolean;
}

const Logo: React.FC<LogoProps> = ({ className = "", light = false }) => {
  const primaryColor = light ? "#ffffff" : "#002F55";
  const accentColor = "#0090D4";

  const textColor = light ? "text-white" : "text-brand-navy";
  const taglineColor = light ? "text-zinc-400" : "text-brand-cyan";

  return (
    <div className={`flex flex-col items-start ${className}`}>
      <div className="flex items-center gap-3">
        
        {/* Fixed-size logo wrapper */}
        <div className="relative h-12 w-12 flex items-center justify-center">
          <img
            src="/finworld_logo.png"
            alt="FinWorld Logo"
            className="object-contain h-full w-full mt-4"
          />
        </div>

        {/* Brand Name */}
        <span
          className={`font-sans font-bold text-4xl tracking-tight ${textColor}`}
        >
          FinWorld
        </span>
      </div>

      {/* Tagline */}
      <span
        className={`text-[0.65rem] font-bold uppercase tracking-[0.2em] ml-[60px] -mt-1 ${taglineColor}`}
      >
        Securing Your World
      </span>
    </div>
  );
};

export default Logo;
