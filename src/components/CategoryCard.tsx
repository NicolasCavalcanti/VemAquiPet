import Link from "next/link";
import {
  HeartPulse,
  Brain,
  Sun,
  Zap,
  Map,
  Home,
  MapPin,
  BookOpen,
  ClipboardCheck,
  Calendar,
  ClipboardList,
} from "lucide-react";
import type { Category } from "@/lib/types";

const iconMap: Record<string, React.ReactNode> = {
  "heart-pulse": <HeartPulse size={22} />,
  brain: <Brain size={22} />,
  sun: <Sun size={22} />,
  zap: <Zap size={22} />,
  map: <Map size={22} />,
  home: <Home size={22} />,
  "map-pin": <MapPin size={22} />,
  "book-open": <BookOpen size={22} />,
  "clipboard-check": <ClipboardCheck size={22} />,
  calendar: <Calendar size={22} />,
  "clipboard-list": <ClipboardList size={22} />,
};

interface CategoryCardProps {
  category: Category;
  variant?: "default" | "compact";
}

export default function CategoryCard({ category, variant = "default" }: CategoryCardProps) {
  if (variant === "compact") {
    return (
      <Link
        href={category.href}
        className="group flex items-center gap-3 p-4 rounded-xl bg-white hover:bg-[#DFF3E8] border border-[#F6EFE6] hover:border-[#2F7D5A]/20 transition-all duration-200"
      >
        <div className="w-9 h-9 rounded-lg bg-[#FFF7EA] group-hover:bg-white flex items-center justify-center text-[#2F7D5A] transition-colors flex-shrink-0">
          {iconMap[category.icon] ?? <Home size={18} />}
        </div>
        <div className="min-w-0">
          <p
            className="font-semibold text-sm text-[#243C4A] group-hover:text-[#2F7D5A] transition-colors truncate"
            style={{ fontFamily: "var(--font-sora), sans-serif" }}
          >
            {category.name}
          </p>
          {category.count && (
            <p className="text-xs text-[#5F6F5A]">{category.count} artigos</p>
          )}
        </div>
      </Link>
    );
  }

  return (
    <Link
      href={category.href}
      className="group flex flex-col p-6 rounded-2xl bg-white hover:bg-[#DFF3E8] border border-[#F6EFE6] hover:border-[#2F7D5A]/20 shadow-[0_2px_8px_rgba(36,60,74,0.06)] hover:shadow-[0_4px_16px_rgba(36,60,74,0.12)] transition-all duration-300 hover:-translate-y-0.5"
    >
      <div className="w-12 h-12 rounded-xl bg-[#FFF7EA] group-hover:bg-white flex items-center justify-center text-[#2F7D5A] mb-4 transition-colors">
        {iconMap[category.icon] ?? <Home size={22} />}
      </div>
      <h3
        className="font-bold text-[#243C4A] group-hover:text-[#2F7D5A] transition-colors mb-2 text-base"
        style={{ fontFamily: "var(--font-sora), sans-serif" }}
      >
        {category.name}
      </h3>
      <p className="text-sm text-[#5F6F5A] leading-relaxed flex-1">{category.description}</p>
      {category.count && (
        <p className="text-xs text-[#5F6F5A] mt-3 font-medium">{category.count} artigos</p>
      )}
    </Link>
  );
}
