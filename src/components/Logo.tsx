import Link from "next/link";

interface LogoProps {
  variant?: "light" | "dark";
}

export function Logo({ variant = "light" }: LogoProps) {
  const bgColor = variant === "dark" ? "bg-[#d4a853]" : "bg-[#1a2a4a]";
  const iconColor = variant === "dark" ? "text-[#1a2a4a]" : "text-[#d4a853]";
  const textColor = variant === "dark" ? "text-white" : "text-[#1a2a4a]";
  const subTextColor = variant === "dark" ? "text-slate-400" : "text-slate-500";

  return (
    <Link href="/" className="flex items-center gap-2 sm:gap-3">
      <div className={`w-9 h-9 sm:w-10 sm:h-10 md:w-11 md:h-11 ${bgColor} rounded-sm flex items-center justify-center ${iconColor}`}>
        <svg viewBox="0 0 40 40" className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7" fill="none">
          {/* Scales of Justice - более детальная версия */}
          <path 
            d="M20 4V8M20 8L8 14M20 8L32 14" 
            stroke="currentColor" 
            strokeWidth="2.5" 
            strokeLinecap="round"
          />
          {/* Левая чаша */}
          <path 
            d="M8 14L4 22H12L8 14Z" 
            stroke="currentColor" 
            strokeWidth="2" 
            strokeLinejoin="round"
          />
          <ellipse cx="8" cy="22" rx="5" ry="2" stroke="currentColor" strokeWidth="2"/>
          {/* Правая чаша */}
          <path 
            d="M32 14L28 22H36L32 14Z" 
            stroke="currentColor" 
            strokeWidth="2" 
            strokeLinejoin="round"
          />
          <ellipse cx="32" cy="22" rx="5" ry="2" stroke="currentColor" strokeWidth="2"/>
          {/* Основание */}
          <path 
            d="M20 8V32M16 32H24M20 32V36" 
            stroke="currentColor" 
            strokeWidth="2.5" 
            strokeLinecap="round"
          />
          <path d="M14 36H26" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"/>
        </svg>
      </div>
      <div className="flex flex-col">
        <span className={`text-base sm:text-lg md:text-xl font-bold ${textColor} tracking-tight`}>ЮрФронт</span>
        <span className={`text-[10px] sm:text-xs ${subTextColor}`}>Юридическая помощь</span>
      </div>
    </Link>
  );
}
