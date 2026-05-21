import Link from "next/link";
import { Clock } from "lucide-react";
import type { BlogPost } from "@/lib/types";
import BlogImage from "@/components/BlogImage";

interface BlogCardProps {
  post: BlogPost;
  featured?: boolean;
}

function formatDate(dateStr: string) {
  const date = new Date(dateStr + "T00:00:00");
  return date.toLocaleDateString("pt-BR", { day: "numeric", month: "long", year: "numeric" });
}

export default function BlogCard({ post, featured = false }: BlogCardProps) {
  if (featured) {
    return (
      <Link
        href={`/blog/${post.slug}`}
        className="group flex flex-col md:flex-row gap-0 rounded-2xl overflow-hidden bg-white shadow-[0_2px_12px_rgba(36,60,74,0.08)] hover:shadow-[0_6px_24px_rgba(36,60,74,0.14)] transition-all duration-300"
      >
        {/* Image container */}
        <div className="md:w-2/5 w-full h-56 md:h-auto relative overflow-hidden bg-[#E7D9C0]">
          <BlogImage
            src={post.image}
            alt={post.imageAlt}
            className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/25 to-transparent pointer-events-none" />
        </div>

        {/* Content */}
        <div className="flex-1 p-6 flex flex-col justify-between">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <span className="px-2.5 py-1 rounded-full text-xs font-medium bg-[#DFF3E8] text-[#2F7D5A]">
                {post.category}
              </span>
            </div>
            <h3
              className="text-lg font-bold text-[#243C4A] group-hover:text-[#2F7D5A] transition-colors leading-snug mb-2"
              style={{ fontFamily: "var(--font-sora), sans-serif" }}
            >
              {post.title}
            </h3>
            <p className="text-sm text-[#5F6F5A] leading-relaxed line-clamp-2">{post.excerpt}</p>
          </div>
          <div className="flex items-center gap-4 mt-4 text-xs text-[#5F6F5A]">
            <span className="flex items-center gap-1">
              <Clock size={11} />
              {post.readTime} min de leitura
            </span>
            <span>{formatDate(post.date)}</span>
          </div>
        </div>
      </Link>
    );
  }

  return (
    <Link
      href={`/blog/${post.slug}`}
      className="group flex flex-col rounded-2xl overflow-hidden bg-white shadow-[0_2px_12px_rgba(36,60,74,0.08)] hover:shadow-[0_6px_24px_rgba(36,60,74,0.14)] transition-all duration-300 hover:-translate-y-0.5"
    >
      {/* Image container */}
      <div className="w-full h-48 relative overflow-hidden bg-[#E7D9C0]">
        <BlogImage
          src={post.image}
          alt={post.imageAlt}
          className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent pointer-events-none" />
        <div className="absolute top-3 left-3">
          <span className="px-2.5 py-1 rounded-full text-xs font-medium bg-white/90 text-[#2F7D5A]">
            {post.category}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="p-5 flex flex-col flex-1">
        <h3
          className="font-bold text-[#243C4A] group-hover:text-[#2F7D5A] transition-colors leading-snug mb-2 text-base"
          style={{ fontFamily: "var(--font-sora), sans-serif" }}
        >
          {post.title}
        </h3>
        <p className="text-sm text-[#5F6F5A] leading-relaxed line-clamp-2 flex-1">{post.excerpt}</p>
        <div className="flex items-center gap-3 mt-4 text-xs text-[#5F6F5A]">
          <span className="flex items-center gap-1">
            <Clock size={11} />
            {post.readTime} min
          </span>
          <span>{formatDate(post.date)}</span>
        </div>
      </div>
    </Link>
  );
}
