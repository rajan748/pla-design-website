"use client";

import { useState, useRef } from "react";
import { motion, AnimatePresence, useMotionValue, useSpring, useTransform } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, ArrowLeft, ArrowRight } from "lucide-react";

const PROJECTS = [
  {
    id: 1,
    title: "Bhartiya Fincom",
    category: "Commercial",
    location: "Mumbai",
    slug: "bhartiya-fincom",
    image: "/images/portfolio/bhartiya-fincom.jpg",
  },
  {
    id: 2,
    title: "Bhimani House",
    category: "Residential",
    location: "Mumbai",
    slug: "bhimani-house",
    image: "/images/portfolio/bhimani-house.jpg",
  },
  {
    id: 3,
    title: "Malachi Salon",
    category: "Hospitality",
    location: "Mumbai",
    slug: "malachi-salon",
    image: "/images/portfolio/malachi-salon.jpg",
  },
  {
    id: 4,
    title: "Parikh House",
    category: "Residential",
    location: "Mumbai",
    slug: "parikh-house",
    image: "/images/portfolio/parikh-house.jpg",
  },
  {
    id: 5,
    title: "AspiRise Office",
    category: "Commercial",
    location: "Mumbai",
    slug: "aspirise-office",
    image: "/images/portfolio/aspirise-office.jpg",
  },
  {
    id: 6,
    title: "Samir Shah House",
    category: "Residential",
    location: "Mumbai",
    slug: "samir-shah-house",
    image: "/images/portfolio/samir-shah-house.jpg",
  },
];

export default function PortfolioSlider() {
  const [active, setActive] = useState(0);
  const trackRef = useRef<HTMLDivElement>(null);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const rotateX = useSpring(useTransform(mouseY, [-0.5, 0.5], [6, -6]), {
    stiffness: 150,
    damping: 20,
  });
  const rotateY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-6, 6]), {
    stiffness: 150,
    damping: 20,
  });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = trackRef.current?.getBoundingClientRect();
    if (!rect) return;
    mouseX.set((e.clientX - rect.left) / rect.width - 0.5);
    mouseY.set((e.clientY - rect.top) / rect.height - 0.5);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  const project = PROJECTS[active];

  const goTo = (index: number) => {
    const next = (index + PROJECTS.length) % PROJECTS.length;
    setActive(next);
  };

  return (
    <section className="relative py-16 lg:py-20 overflow-hidden">
      {/* Floating decorative elements — subtle, no text marquee */}
      <motion.div
        animate={{ y: [0, -18, 0], x: [0, 12, 0] }}
        transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-10 right-[6%] h-14 w-14 rounded-full border border-neutral-900/10 pointer-events-none hidden lg:block"
      />
      <motion.div
        animate={{ y: [0, 20, 0] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
        className="absolute bottom-16 left-[4%] h-8 w-8 rounded-full bg-neutral-900/5 pointer-events-none hidden lg:block"
      />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-12">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-4 mb-6 lg:mb-8"
        >
          <div>
            <div className="flex items-center gap-3 mb-2">
              <span className="h-px w-6 bg-neutral-900" />
              <span className="text-neutral-900 text-[11px] tracking-[0.3em] font-medium uppercase">
                Our Portfolio
              </span>
            </div>
            <h2 className="font-serif text-xl sm:text-2xl lg:text-3xl text-neutral-900 leading-snug">
              Spaces We've{" "}
              <span className="italic text-neutral-500">Brought to Life</span>
            </h2>
          </div>

          <div className="hidden lg:flex items-center gap-3">
            <motion.button
              whileHover={{ scale: 1.08 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => goTo(active - 1)}
              className="flex h-10 w-10 items-center justify-center rounded-full border border-neutral-900/20 text-neutral-800 hover:bg-neutral-900 hover:text-white hover:border-neutral-900 transition-all duration-300"
              aria-label="Previous project"
            >
              <ArrowLeft size={16} />
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.08 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => goTo(active + 1)}
              className="flex h-10 w-10 items-center justify-center rounded-full border border-neutral-900/20 text-neutral-800 hover:bg-neutral-900 hover:text-white hover:border-neutral-900 transition-all duration-300"
              aria-label="Next project"
            >
              <ArrowRight size={16} />
            </motion.button>
          </div>
        </motion.div>

        {/* Main slider area */}
        <div className="grid grid-cols-1 lg:grid-cols-[1.4fr_1fr] gap-6 lg:gap-10 items-center">
          {/* Image — real 3D tilt on mouse move */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            style={{ perspective: 1400 }}
          >
            <motion.div
              ref={trackRef}
              onMouseMove={handleMouseMove}
              onMouseLeave={handleMouseLeave}
              style={{
                rotateX,
                rotateY,
                transformStyle: "preserve-3d",
              }}
              className="relative h-[260px] sm:h-[320px] lg:h-[380px] rounded-2xl overflow-hidden cursor-grab active:cursor-grabbing shadow-[0_30px_70px_-20px_rgba(0,0,0,0.4)]"
            >
              <AnimatePresence mode="wait">
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, scale: 1.05 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.98 }}
                  transition={{ duration: 0.5, ease: "easeInOut" }}
                  drag="x"
                  dragConstraints={{ left: 0, right: 0 }}
                  dragElastic={0.2}
                  onDragEnd={(_, info) => {
                    if (info.offset.x < -80) goTo(active + 1);
                    else if (info.offset.x > 80) goTo(active - 1);
                  }}
                  className="absolute inset-0"
                >
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover pointer-events-none"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
                </motion.div>
              </AnimatePresence>

              {/* Slide counter — floats above image (3D depth) */}
              <div
                style={{ transform: "translateZ(40px)" }}
                className="absolute bottom-4 left-4 z-10 flex items-center gap-1.5 bg-neutral-900/85 backdrop-blur-md rounded-full px-3.5 py-2 text-white shadow-lg"
              >
                <span className="font-serif text-lg">
                  {String(active + 1).padStart(2, "0")}
                </span>
                <span className="text-white/50 text-xs">
                  / {String(PROJECTS.length).padStart(2, "0")}
                </span>
              </div>

              <div
                style={{ transform: "translateZ(40px)" }}
                className="lg:hidden absolute bottom-4 right-4 z-10 flex items-center gap-2"
              >
                <button
                  onClick={() => goTo(active - 1)}
                  className="flex h-8 w-8 items-center justify-center rounded-full bg-neutral-900/70 backdrop-blur-md text-white"
                  aria-label="Previous"
                >
                  <ArrowLeft size={14} />
                </button>
                <button
                  onClick={() => goTo(active + 1)}
                  className="flex h-8 w-8 items-center justify-center rounded-full bg-neutral-900/70 backdrop-blur-md text-white"
                  aria-label="Next"
                >
                  <ArrowRight size={14} />
                </button>
              </div>
            </motion.div>
          </motion.div>

          {/* Details panel */}
          <AnimatePresence mode="wait">
            <motion.div
              key={project.id}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.4 }}
            >
              <motion.span
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 0.1 }}
                className="inline-block px-3 py-1 rounded-full bg-neutral-900 text-white text-[11px] tracking-wide uppercase font-medium mb-3"
              >
                {project.category}
              </motion.span>

              <h3 className="font-serif text-2xl lg:text-3xl text-neutral-900 leading-tight mb-2">
                {project.title}
              </h3>

              <p className="text-neutral-600 text-sm mb-5">
                {project.location} · Interior Design & Execution
              </p>

              <Link
                href={`/our-work/${project.slug}`}
                className="group inline-flex items-center gap-2.5 px-6 py-2.5 rounded-full bg-neutral-900 text-white text-sm font-medium tracking-wide hover:bg-neutral-800 transition-all duration-400"
              >
                View Project
                <ArrowUpRight
                  size={15}
                  className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300"
                />
              </Link>

              <div className="flex items-center gap-2 mt-6">
                {PROJECTS.map((_, i) => (
                  <motion.button
                    key={i}
                    whileHover={{ scale: 1.2 }}
                    onClick={() => setActive(i)}
                    aria-label={`Go to project ${i + 1}`}
                    className={`h-1.5 rounded-full transition-all duration-400 ${
                      i === active
                        ? "w-8 bg-neutral-900"
                        : "w-1.5 bg-neutral-900/20 hover:bg-neutral-900/40"
                    }`}
                  />
                ))}
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Thumbnail strip */}
        <div className="hidden md:flex items-center gap-3 mt-6 overflow-x-auto pb-1 scrollbar-hide">
          {PROJECTS.map((p, i) => (
            <motion.button
              key={p.id}
              whileHover={{ y: -3 }}
              onClick={() => setActive(i)}
              className={`relative shrink-0 h-14 w-20 rounded-lg overflow-hidden transition-all duration-400 ${
                i === active
                  ? "ring-2 ring-neutral-900 ring-offset-2 ring-offset-[#efe6dd] scale-105"
                  : "opacity-50 hover:opacity-80"
              }`}
            >
              <Image src={p.image} alt={p.title} fill className="object-cover" />
            </motion.button>
          ))}
        </div>
      </div>
    </section>
  );
}