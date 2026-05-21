"use client";

import Link from "next/link";
import Image from "next/image";

interface LogoProps {
  variant?: "default" | "white";
  size?: "sm" | "md" | "lg";
}

export default function Logo({ variant = "default", size = "md" }: LogoProps) {
  const sizes = { sm: 32, md: 40, lg: 52 };
  const s = sizes[size];
  const inkColor = variant === "white" ? "#FFF7EA" : "#243C4A";
  const clayColor = "#D9906A";

  return (
    <Link href="/" className="flex items-center gap-2.5 group" aria-label="Vem Aqui Pet - Início">
      <Image
        src="/lOGO.png"
        alt="Vem Aqui Pet"
        width={s}
        height={s}
        className="flex-shrink-0"
        priority
      />

      <div className="flex flex-col leading-none">
        <span
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
