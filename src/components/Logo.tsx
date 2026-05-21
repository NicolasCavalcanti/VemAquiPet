"use client";

import Link from "next/link";
import { useId } from "react";

interface LogoProps {
  variant?: "default" | "white";
  size?: "sm" | "md" | "lg";
}

export default function Logo({ variant = "default", size = "md" }: LogoProps) {
  const uid = useId();
  const clipId = `lc-${uid.replace(/:/g, "")}`;
  const sizes = { sm: 32, md: 40, lg: 52 };
  const s = sizes[size];
  const inkColor = variant === "white" ? "#FFF7EA" : "#243C4A";
  const clayColor = "#D9906A";
  const creamColor = variant === "white" ? "rgba(255,247,234,0.18)" : "#FFF7EA";
  const bgColor = variant === "default" ? "#FFF5EB" : "transparent";
  const borderColor = variant === "default" ? clayColor : "rgba(255,247,234,0.25)";

  return (
    <Link href="/" className="flex items-center gap-2.5 group" aria-label="Vem Aqui Pet - Início">
      <svg
        width={s}
        height={s}
        viewBox="0 0 80 80"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="flex-shrink-0"
      >
        <defs>
          <clipPath id={clipId}>
            <circle cx="40" cy="40" r="37" />
          </clipPath>
        </defs>
        {/* Background circle */}
        <circle cx="40" cy="40" r="38" fill={bgColor} />
        {/* Border ring */}
        <circle cx="40" cy="40" r="37" fill="none" stroke={borderColor} strokeWidth="1.5" />
        <g clipPath={`url(#${clipId})`}>
          {/* Left ear */}
          <path d="M12 52 C8 32 18 10 36 14 C28 22 22 36 24 52 Z" fill={inkColor} />
          {/* Right ear (dark) */}
          <path d="M68 52 C72 32 62 10 44 14 C52 22 58 36 56 52 Z" fill={inkColor} />
          {/* Right ear copper accent */}
          <path d="M62 50 C65 34 58 16 47 16 C53 24 57 36 56 50 Z" fill={clayColor} />
          {/* Face */}
          <path d="M24 50 C22 68 30 76 40 76 C50 76 58 68 56 50 C54 34 48 28 40 28 C32 28 26 34 24 50 Z" fill={inkColor} />
          {/* Snout highlight */}
          <path d="M32 52 C30 62 34 72 40 72 C46 72 50 62 48 52 C47 46 44 42 40 42 C36 42 33 46 32 52 Z" fill={creamColor} />
          {/* Nose */}
          <path d="M36 58 C36 55 38 53 40 53 C42 53 44 55 44 58 C44 61 42 63 40 63 C38 63 36 61 36 58 Z" fill={inkColor} />
        </g>
      </svg>

      <div className="flex flex-col leading-none">
        <span
          className="font-heading font-800 tracking-tight"
          style={{
            color: inkColor,
            fontSize: size === "sm" ? "1.1rem" : size === "md" ? "1.35rem" : "1.7rem",
            fontFamily: "var(--font-sora), sans-serif",
            fontWeight: 800,
            letterSpacing: "-0.02em",
          }}
        >
          VemAqui
        </span>
        <span
          style={{
            color: clayColor,
            fontSize: size === "sm" ? "0.75rem" : size === "md" ? "0.9rem" : "1.1rem",
            fontFamily: "var(--font-sora), sans-serif",
            fontWeight: 600,
            letterSpacing: "0.06em",
            marginTop: "-1px",
          }}
        >
          Pet
        </span>
      </div>
    </Link>
  );
}
