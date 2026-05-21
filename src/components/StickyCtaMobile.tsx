"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Calendar } from "lucide-react";

export default function StickyCtaMobile() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 300);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  if (!visible) return null;

  return (
    <div className="lg:hidden fixed bottom-0 left-0 right-0 z-40 p-4 bg-white/95 backdrop-blur-md border-t border-[#F6EFE6] shadow-lg">
      <Link
        href="/agendar"
        className="flex items-center justify-center gap-2 w-full px-4 py-3 rounded-xl bg-[#D9906A] text-white text-sm font-semibold hover:bg-[#c47a56] transition-colors shadow-md"
        style={{ fontFamily: "var(--font-sora), sans-serif" }}
      >
        <Calendar size={15} />
        Agendar atendimento
      </Link>
    </div>
  );
}
