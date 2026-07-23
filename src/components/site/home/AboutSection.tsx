"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Sparkles, Clock, Users, Award } from "lucide-react";

const USPS = [
  {
    icon: Sparkles,
    title: "Bespoke Design Approach",
    description: "Every space tailored to your lifestyle, not a template.",
  },
  {
    icon: Clock,
    title: "On-Time Delivery",
    description: "Structured timelines with zero compromise on quality.",
  },
  {
    icon: Users,
    title: "Dedicated Project Team",
    description: "One point of contact from concept to handover.",
  },
  {
    icon: Award,
    title: "Premium Craftsmanship",
    description: "Curated materials and skilled artisans, every time.",
  },
];

const STATS = [
  { value: "50+", label: "Projects" },
  { value: "8+", label: "Years" },
  { value: "100%", label: "Satisfaction" },
];

export default function AboutSection() {
  return (
    <section className="relative py-16 lg:py-20 overflow-hidden">
      {/* Floating decorative elements */}
      <motion.div
        animate={{ y: [0, -20, 0], rotate: [0, 10, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-16 right-[8%] h-14 w-14 rounded-full border border-neutral-900/10 pointer-events-none hidden lg:block"
      />
      <motion.div
        animate={{ y: [0, 22, 0] }}
        transition={{ duration: 9, repeat: Infinity, ease: "easeInOut", delay: 0.6 }}
        className="absolute bottom-24 left-[6%] h-9 w-9 rounded-full bg-neutral-900/5 pointer-events-none hidden lg:block"
      />

      <div
        className="absolute top-16 left-8 w-32 h-32 opacity-[0.15] pointer-events-none hidden lg:block"
        style={{
          backgroundImage: "radial-gradient(circle, #171717 1.5px, transparent 1.5px)",
          backgroundSize: "14px 14px",
        }}
      />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          {/* Left — Image collage with slow rotating entrance */}
          <div
            className="relative h-[420px] sm:h-[480px] lg:h-[500px]"
            style={{ perspective: 1200 }}
          >
            {/* Main image — spins in from left, slow */}
            <motion.div
              initial={{ opacity: 0, rotate: -20, scale: 0.75, x: -50 }}
              whileInView={{ opacity: 1, rotate: 0, scale: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 1.6, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              whileHover={{ scale: 1.02, rotate: 1 }}
              className="absolute top-0 left-0 h-[68%] w-[65%] rounded-3xl overflow-hidden shadow-[0_25px_60px_-15px_rgba(0,0,0,0.35)]"
            >
              <Image
                src="/images/about/about-main.jpg"
                alt="Pla Design interior project"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
            </motion.div>

            {/* Secondary image — spins in from top-right, slow */}
            <motion.div
              initial={{ opacity: 0, rotate: 28, scale: 0.65, y: -40 }}
              whileInView={{ opacity: 1, rotate: 0, scale: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 1.5, delay: 0.7, ease: [0.16, 1, 0.3, 1] }}
              whileHover={{ scale: 1.05, rotate: -2 }}
              className="absolute top-[8%] right-0 h-[42%] w-[38%] rounded-2xl overflow-hidden shadow-[0_20px_50px_-15px_rgba(0,0,0,0.3)] border-4 border-[#efe6dd]"
            >
              <Image
                src="/images/about/about-secondary.jpg"
                alt="Pla Design detail shot"
                fill
                className="object-cover"
              />
            </motion.div>

            {/* Tertiary image — spins in from bottom, slow */}
            <motion.div
              initial={{ opacity: 0, rotate: -24, scale: 0.65, y: 50 }}
              whileInView={{ opacity: 1, rotate: 0, scale: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 1.5, delay: 1.2, ease: [0.16, 1, 0.3, 1] }}
              whileHover={{ scale: 1.05, rotate: 2 }}
              className="absolute bottom-0 right-4 h-[45%] w-[52%] rounded-2xl overflow-hidden shadow-[0_20px_50px_-15px_rgba(0,0,0,0.3)] border-4 border-[#efe6dd]"
            >
              <Image
                src="/images/about/about-tertiary.jpg"
                alt="Pla Design workspace"
                fill
                className="object-cover"
              />
            </motion.div>

            {/* Decorative accent dots */}
            <motion.span
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 1.7, duration: 0.6, type: "spring" }}
              className="absolute -bottom-3 left-10 h-3 w-3 rounded-full bg-neutral-900"
            />
            <motion.span
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 1.85, duration: 0.6, type: "spring" }}
              className="absolute -bottom-3 left-18 h-2 w-2 rounded-full bg-neutral-900/40"
            />
          </div>

          {/* Right — Content, staggered entrance */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="flex items-center gap-3 mb-4"
            >
              <span className="h-px w-6 bg-neutral-900" />
              <span className="text-neutral-900 text-[11px] tracking-[0.3em] font-medium uppercase">
                About Pla Design
              </span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.8, delay: 0.35, ease: [0.16, 1, 0.3, 1] }}
              className="font-serif text-xl sm:text-2xl lg:text-3xl text-neutral-900 leading-snug mb-4"
            >
              Where Every Space Tells{" "}
              <span className="italic text-neutral-500">Your Story</span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.8, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
              className="text-neutral-600 text-sm leading-relaxed mb-7 max-w-lg"
            >
              We're a Mumbai-based interior design studio crafting residential,
              commercial and hospitality spaces that balance beauty with
              functionality. From first sketch to final handover, we bring
              precision, warmth and a distinct point of view to every project.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.8, delay: 0.65, ease: [0.16, 1, 0.3, 1] }}
              className="flex items-center gap-8 mb-8 pb-8 border-b border-neutral-900/15"
            >
              {STATS.map((stat) => (
                <div key={stat.label}>
                  <span className="block font-serif text-2xl lg:text-3xl text-neutral-900">
                    {stat.value}
                  </span>
                  <span className="text-[11px] tracking-wide text-neutral-600 uppercase">
                    {stat.label}
                  </span>
                </div>
              ))}
            </motion.div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-8">
              {USPS.map((usp, i) => (
                <motion.div
                  key={usp.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.7, delay: 0.8 + i * 0.15, ease: [0.16, 1, 0.3, 1] }}
                  className="group flex items-start gap-3"
                >
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-neutral-900/5 group-hover:bg-neutral-900 transition-colors duration-300">
                    <usp.icon
                      size={16}
                      className="text-neutral-800 group-hover:text-white transition-colors duration-300"
                      strokeWidth={1.5}
                    />
                  </div>
                  <div>
                    <h4 className="text-sm font-medium text-neutral-900 mb-0.5">
                      {usp.title}
                    </h4>
                    <p className="text-xs text-neutral-600 leading-relaxed">
                      {usp.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.7, delay: 1.4, ease: [0.16, 1, 0.3, 1] }}
            >
              <Link
                href="/about-us"
                className="group inline-flex items-center gap-2.5 px-6 py-2.5 rounded-full bg-neutral-900 text-white text-sm font-medium tracking-wide hover:bg-neutral-800 transition-all duration-400"
              >
                More About Us
                <ArrowUpRight
                  size={15}
                  className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300"
                />
              </Link>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}