"use client";

import { useState } from "react";

interface BlogImageProps {
  src: string;
  alt: string;
  className?: string;
  priority?: boolean;
}

const BASE_PATH = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

export default function BlogImage({ src, alt, className, priority }: BlogImageProps) {
  const [error, setError] = useState(false);

  if (error) {
    return (
      <div className="absolute inset-0 flex flex-col items-center justify-center bg-[#1E3A5F] gap-3">
        <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="rgba(255,247,234,0.6)"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
          </svg>
        </div>
        <span
          className="text-[#FFF7EA]/50 text-xs font-medium tracking-wide"
          style={{ fontFamily: "Arial, sans-serif" }}
        >
          Vem Aqui Pet
        </span>
      </div>
    );
  }

  return (
    /* eslint-disable-next-line @next/next/no-img-element */
    <img
      src={`${BASE_PATH}${src}`}
      alt={alt}
      className={className ?? "absolute inset-0 w-full h-full object-cover"}
      loading={priority ? "eager" : "lazy"}
      decoding={priority ? "sync" : "async"}
      onError={() => setError(true)}
    />
  );
}
