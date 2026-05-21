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
          <path d="M22 10 C10 20 6 40 14 58 C20 64 28 68 36 66 C30 52 24 30 22 10 Z" fill={inkColor} />
          {/* Right ear (dark) */}
          <path d="M58 10 C70 20 74 40 66 58 C60 64 52 68 44 66 C50 52 56 30 58 10 Z" fill={inkColor} />
          {/* Right ear copper inner */}
          <path d="M58 10 C66 18 70 38 66 56 C62 62 56 66 50 64 C52 50 56 30 58 10 Z" fill={clayColor} />
          {/* Nose */}
          <ellipse cx="40" cy="65" rx="4" ry="3" fill={inkColor} />
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
