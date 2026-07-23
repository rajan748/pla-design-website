"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ChevronRight } from "lucide-react";

interface PageHeaderProps {
  tag: string;
  title: string;
  highlight: string;
  description?: string;
  breadcrumb: string;
  image?: string;
}

export default function PageHeader({
  tag,
  title,
  highlight,
  description,
  breadcrumb,
  image = "/images/page-header/default-header.jpg",
}: PageHeaderProps) {
  return (
    <section className="relative pt-32 pb-24 lg:pt-36 lg:pb-28 overflow-hidden">
      <Image src={image} alt={title} fill priority className="object-cover" />
      <div className="absolute inset-0 bg-gradient-to-r from-neutral-950/92 via-neutral-950/75 to-neutral-950/40" />
      <div className="absolute inset-0 bg-gradient-to-t from-neutral-950/60 via-transparent to-neutral-950/30" />

      <div className="absolute bottom-0 right-0 h-72 w-72 rounded-full bg-gold-400/15 blur-[100px] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex items-center gap-2 text-xs text-white/50 mb-6"
        >
          <Link href="/" className="hover:text-gold-400 transition-colors">
            Home
          </Link>
          <ChevronRight size={12} />
          <span className="text-white/80">{breadcrumb}</span>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <div className="flex items-center gap-3 mb-4">
            <span className="h-px w-8 bg-gold-400" />
            <span className="text-gold-400 text-[11px] tracking-[0.3em] font-semibold uppercase">
              {tag}
            </span>
          </div>
          <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-white leading-tight max-w-2xl">
            {title} <span className="italic text-gold-400">{highlight}</span>
          </h1>
          {description && (
            <p className="text-white/70 text-sm sm:text-base leading-relaxed max-w-lg mt-5">
              {description}
            </p>
          )}
        </motion.div>
      </div>
    </section>
  );
}