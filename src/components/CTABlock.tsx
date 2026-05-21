import Link from "next/link";
import { ArrowRight } from "lucide-react";

interface CTABlockProps {
  title: string;
  description?: string;
  primaryCta?: { label: string; href: string };
  secondaryCta?: { label: string; href: string };
  variant?: "green" | "ink" | "clay" | "light";
}

export default function CTABlock({
  title,
  description,
  primaryCta,
  secondaryCta,
  variant = "green",
}: CTABlockProps) {
  const variants = {
    green: {
      bg: "bg-[#2F7D5A]",
      title: "text-white",
      desc: "text-white/70",
      primary: "bg-white text-[#2F7D5A] hover:bg-[#F6EFE6]",
      secondary: "border border-white/40 text-white hover:bg-white/10",
    },
    ink: {
      bg: "bg-[#243C4A]",
      title: "text-[#FFF7EA]",
      desc: "text-[#FFF7EA]/60",
      primary: "bg-[#D9906A] text-white hover:bg-[#c47a56]",
      secondary: "border border-[#FFF7EA]/30 text-[#FFF7EA]/80 hover:bg-[#FFF7EA]/10",
    },
    clay: {
      bg: "bg-[#D9906A]",
      title: "text-white",
      desc: "text-white/80",
      primary: "bg-white text-[#D9906A] hover:bg-[#FFF7EA]",
      secondary: "border border-white/40 text-white hover:bg-white/10",
    },
    light: {
      bg: "bg-[#F6EFE6]",
      title: "text-[#243C4A]",
      desc: "text-[#5F6F5A]",
      primary: "bg-[#2F7D5A] text-white hover:bg-[#266a4b]",
      secondary: "border border-[#5F6F5A]/30 text-[#243C4A] hover:bg-[#DFF3E8]",
    },
  };

  const v = variants[variant];

  return (
    <div className={`rounded-2xl p-8 md:p-10 ${v.bg}`}>
      <h3
        className={`font-bold text-xl md:text-2xl leading-snug mb-2 ${v.title}`}
        style={{ fontFamily: "var(--font-sora), sans-serif" }}
      >
        {title}
      </h3>
      {description && (
        <p className={`text-sm md:text-base leading-relaxed mb-6 max-w-lg ${v.desc}`}>
          {description}
        </p>
      )}
      {(primaryCta || secondaryCta) && (
        <div className="flex flex-col sm:flex-row gap-3">
          {primaryCta && (
            <Link
              href={primaryCta.href}
              className={`inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl text-sm font-semibold transition-colors ${v.primary}`}
              style={{ fontFamily: "var(--font-sora), sans-serif" }}
            >
              {primaryCta.label}
              <ArrowRight size={14} />
            </Link>
          )}
          {secondaryCta && (
            <Link
              href={secondaryCta.href}
              className={`inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl text-sm font-semibold transition-colors ${v.secondary}`}
              style={{ fontFamily: "var(--font-sora), sans-serif" }}
            >
              {secondaryCta.label}
            </Link>
          )}
        </div>
      )}
    </div>
  );
}
