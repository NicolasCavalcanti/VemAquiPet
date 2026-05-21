import Link from "next/link";
import {
  Stethoscope,
  Droplets,
  Heart,
  GraduationCap,
  Footprints,
  Building,
} from "lucide-react";
import type { Service } from "@/lib/types";

const iconMap: Record<string, React.ReactNode> = {
  stethoscope: <Stethoscope size={22} />,
  droplets: <Droplets size={22} />,
  heart: <Heart size={22} />,
  "graduation-cap": <GraduationCap size={22} />,
  footprints: <Footprints size={22} />,
  building: <Building size={22} />,
};

const statusConfig = {
  disponivel: {
    label: "Disponível",
    color: "bg-[#DFF3E8] text-[#2F7D5A]",
  },
  "lista-interesse": {
    label: "Lista de interesse",
    color: "bg-[#FFF7EA] text-[#D9906A] border border-[#D9906A]/30",
  },
  "em-breve": {
    label: "Em breve",
    color: "bg-[#F6EFE6] text-[#5F6F5A]",
  },
};

const ctaColor = {
  disponivel: "bg-[#D9906A] text-white hover:bg-[#c47a56]",
  "lista-interesse": "bg-[#2F7D5A] text-white hover:bg-[#266a4b]",
  "em-breve": "bg-[#5F6F5A] text-white hover:bg-[#4e5c4a]",
};

interface ServiceCardProps {
  service: Service;
}

export default function ServiceCard({ service }: ServiceCardProps) {
  const status = statusConfig[service.status];
  const cta = ctaColor[service.status];

  return (
    <div className="flex flex-col rounded-2xl bg-white p-6 shadow-[0_2px_12px_rgba(36,60,74,0.08)] hover:shadow-[0_6px_24px_rgba(36,60,74,0.14)] transition-all duration-300 hover:-translate-y-0.5">
      {/* Icon */}
      <div className="w-11 h-11 rounded-xl bg-[#FFF7EA] flex items-center justify-center text-[#D9906A] mb-4">
        {iconMap[service.icon] ?? <Heart size={22} />}
      </div>

      {/* Header */}
      <div className="flex items-start justify-between gap-2 mb-3">
        <h3
          className="font-bold text-[#243C4A] text-base leading-snug"
          style={{ fontFamily: "var(--font-sora), sans-serif" }}
        >
          {service.title}
        </h3>
        <span className={`px-2.5 py-1 rounded-full text-xs font-medium whitespace-nowrap ${status.color}`}>
          {status.label}
        </span>
      </div>

      <p className="text-sm text-[#5F6F5A] leading-relaxed flex-1 mb-5">{service.description}</p>

      <Link
        href={service.href}
        className={`text-center px-4 py-2.5 rounded-lg text-sm font-semibold transition-colors ${cta}`}
        style={{ fontFamily: "var(--font-sora), sans-serif" }}
      >
        {service.cta}
      </Link>
    </div>
  );
}
