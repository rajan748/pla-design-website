"use client";

import { useState, useRef, useEffect } from "react";
import {
  motion,
  AnimatePresence,
  useMotionValue,
  useSpring,
  useTransform,
  useMotionTemplate,
  useScroll,
} from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

const CATEGORIES = ["All", "Residential", "Commercial", "Hospitality"] as const;

const PROJECTS = [
  { id: 1, title: "Bhartiya Fincom", category: "Commercial", location: "Mumbai", slug: "bhartiya-fincom", image: "/images/portfolio/bhartiya-fincom.jpg", year: "2024" },
  { id: 2, title: "Bhimani House", category: "Residential", location: "Mumbai", slug: "bhimani-house", image: "/images/portfolio/bhimani-house.jpg", year: "2024" },
  { id: 3, title: "Malachi Salon", category: "Hospitality", location: "Mumbai", slug: "malachi-salon", image: "/images/portfolio/malachi-salon.jpg", year: "2023" },
  { id: 4, title: "Parikh House", category: "Residential", location: "Mumbai", slug: "parikh-house", image: "/images/portfolio/parikh-house.jpg", year: "2023" },
  { id: 5, title: "AspiRise Office", category: "Commercial", location: "Mumbai", slug: "aspirise-office", image: "/images/portfolio/aspirise-office.jpg", year: "2023" },
  { id: 6, title: "Samir Shah House", category: "Residential", location: "Mumbai", slug: "samir-shah-house", image: "/images/portfolio/samir-shah-house.jpg", year: "2022" },
  { id: 7, title: "ZAH Bangalore", category: "Commercial", location: "Bangalore", slug: "zah-bangalore", image: "/images/portfolio/zah-bangalore.jpg", year: "2022" },
  { id: 8, title: "Mehrotra House", category: "Residential", location: "Mumbai", slug: "mehrotra-house", image: "/images/portfolio/mehrotra-house.jpg", year: "2022" },
  { id: 9, title: "ZAH Pune", category: "Commercial", location: "Pune", slug: "zah-pune", image: "/images/portfolio/zah-pune.jpg", year: "2021" },
  { id: 10, title: "House of Toys", category: "Hospitality", location: "Mumbai", slug: "house-of-toys", image: "/images/portfolio/house-of-toys.jpg", year: "2021" },
];

const EASE = [0.16, 1, 0.3, 1] as const;

/* ---------- Floating decorative circles ---------- */
function FloatingCircles() {
  return (
    <>
      <motion.div
        className="hidden lg:block absolute -top-10 right-[8%] w-24 h-24 rounded-full border border-neutral-900/10 pointer-events-none"
        animate={{ y: [0, 22, 0], x: [0, -12, 0] }}
        transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="hidden lg:block absolute top-[45%] -left-6 w-16 h-16 rounded-full bg-neutral-900/5 pointer-events-none"
        animate={{ y: [0, -18, 0], x: [0, 14, 0] }}
        transition={{ duration: 7.5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
      />
    </>
  );
}

/* ---------- Detect touch devices ---------- */
function useIsTouchDevice() {
  const [isTouch, setIsTouch] = useState(false);
  useEffect(() => {
    setIsTouch(window.matchMedia("(hover: none), (pointer: coarse)").matches);
  }, []);
  return isTouch;
}

/* ---------- Project card ---------- */
function ProjectCard({
  project,
  index,
  hoveredId,
  setHoveredId,
  isTouch,
}: {
  project: (typeof PROJECTS)[number];
  index: number;
  hoveredId: number | null;
  setHoveredId: (id: number | null) => void;
  isTouch: boolean;
}) {
  const cardRef = useRef<HTMLDivElement>(null);
  const isHovered = hoveredId === project.id;
  const isDimmed = hoveredId !== null && !isHovered;

  const tiltSpring = { stiffness: 140, damping: 18, mass: 0.6 };

  // desktop mouse tilt
  const px = useMotionValue(0.5);
  const py = useMotionValue(0.5);
  const rotateX = useSpring(useTransform(py, [0, 1], [7, -7]), tiltSpring);
  const rotateY = useSpring(useTransform(px, [0, 1], [-7, 7]), tiltSpring);

  // desktop mouse-follow flashlight
  const cx = useMotionValue(200);
  const cy = useMotionValue(200);
  const radius = useSpring(0, { stiffness: 110, damping: 24, mass: 0.9 });
  const clipPath = useMotionTemplate`circle(${radius}px at ${cx}px ${cy}px)`;

  // mobile scroll-linked sweep
  const { scrollYProgress } = useScroll({
    target: cardRef,
    offset: ["start 90%", "end 25%"],
  });
  const sweepCx = useTransform(scrollYProgress, [0, 1], ["-10%", "110%"]);
  const sweepRadius = useTransform(
    scrollYProgress,
    [0, 0.15, 0.85, 1],
    [0, 260, 260, 0]
  );
  const sweepClipPath = useMotionTemplate`circle(${sweepRadius}px at ${sweepCx} 50%)`;

  function handleMouseMove(e: React.MouseEvent<HTMLDivElement>) {
    const rect = cardRef.current?.getBoundingClientRect();
    if (!rect) return;
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    cx.set(x);
    cy.set(y);
    px.set(x / rect.width);
    py.set(y / rect.height);
  }

  function handleEnter() {
    setHoveredId(project.id);
    radius.set(440);
  }

  function handleLeave() {
    setHoveredId(null);
    radius.set(0);
    px.set(0.5);
    py.set(0.5);
  }

  const isLeft = index % 2 === 0;
  const activeClipPath = isTouch ? sweepClipPath : clipPath;

  return (
    <motion.div
      layout
      initial={{ opacity: 0, rotateY: isLeft ? -22 : 22, x: isLeft ? -40 : 40, scale: 0.92 }}
      whileInView={{ opacity: 1, rotateY: 0, x: 0, scale: 1 }}
      viewport={{ once: true, amount: 0.2 }}
      exit={{ opacity: 0, scale: 0.95 }}
      animate={{
        opacity: isDimmed ? 0.55 : 1,
        scale: isDimmed ? 0.98 : 1,
        filter: isDimmed ? "blur(1px)" : "blur(0px)",
      }}
      transition={{ duration: 0.7, delay: (index % 4) * 0.12, ease: EASE }}
      style={{ perspective: 1400, transformStyle: "preserve-3d" }}
      className="relative"
    >
      {/* Architectural plan-style annotation */}
      <div className="pointer-events-none select-none absolute -top-7 left-0 flex items-center gap-2 z-0">
        <span className="font-mono text-[11px] tracking-widest text-neutral-900/35">
          N&deg; {String(project.id).padStart(2, "0")}
        </span>
        <span className="h-px w-8 bg-neutral-900/20" />
      </div>

      <Link href={`/our-work/${project.slug}`} className="group block relative z-10">
        <motion.div
          ref={cardRef}
          onMouseMove={isTouch ? undefined : handleMouseMove}
          onMouseEnter={isTouch ? undefined : handleEnter}
          onMouseLeave={isTouch ? undefined : handleLeave}
          style={
            isTouch
              ? undefined
              : { rotateX, rotateY, transformStyle: "preserve-3d" }
          }
          className="relative h-[320px] sm:h-[380px] lg:h-[420px] rounded-3xl overflow-hidden mb-5 shadow-lg ring-1 ring-neutral-900/5 bg-neutral-200"
        >
          {/* Base layer — blueprint / monochrome render, shown on BOTH desktop and touch now */}
          <div className="absolute inset-0">
            <Image
              src={project.image}
              alt={project.title}
              fill
              className="object-cover"
              style={{
                filter: "grayscale(1) contrast(1.2) brightness(0.92)",
              }}
            />
            <div className="absolute inset-0 bg-neutral-900/20 mix-blend-multiply" />
            <div
              className="absolute inset-0 opacity-[0.12]"
              style={{
                backgroundImage:
                  "linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)",
                backgroundSize: "24px 24px",
              }}
            />
          </div>

          {/* Reveal layer — masked by cursor flashlight (desktop) or scroll sweep (touch) */}
          <motion.div className="absolute inset-0" style={{ clipPath: activeClipPath }}>
            <Image
              src={project.image}
              alt={project.title}
              fill
              className="object-cover scale-[1.06] transition-transform duration-700 ease-out group-hover:scale-100"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/35 via-black/0 to-black/0" />
            <motion.div
              className="absolute inset-0"
              style={{
                clipPath: activeClipPath,
                boxShadow: "inset 0 0 45px 12px rgba(255,255,255,0.18)",
              }}
            />
          </motion.div>

          {/* Category tag */}
          <span
            style={{ transform: "translateZ(60px)" }}
            className="absolute top-5 left-5 px-3 py-1 rounded-full bg-white/15 backdrop-blur-md border border-white/25 text-white text-[10px] tracking-widest uppercase font-medium z-10"
          >
            {project.category}
          </span>

          {/* Year chip */}
          <span
            style={{ transform: "translateZ(45px)" }}
            className="absolute top-5 right-5 px-3 py-1 rounded-full bg-neutral-900/40 backdrop-blur-md text-white/90 text-[10px] tracking-wider font-medium z-10"
          >
            {project.year}
          </span>

          {/* Title */}
          <div
            style={{ transform: "translateZ(55px)" }}
            className={`absolute bottom-5 left-5 right-24 transition-all duration-500 delay-75 z-10 ${
              isTouch
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-3 group-hover:opacity-100 group-hover:translate-y-0"
            }`}
          >
            <p className="font-serif text-white text-lg leading-tight drop-shadow-sm">
              {project.title}
            </p>
            <p className="text-white/70 text-xs mt-0.5">{project.location}</p>
          </div>

          {/* View badge */}
          <div
            style={{ transform: "translateZ(70px)" }}
            className={`absolute bottom-5 right-5 flex items-center gap-2 px-4 py-2 rounded-full bg-white transition-all duration-400 z-10 ${
              isTouch
                ? "opacity-100"
                : "opacity-0 translate-y-2 scale-90 group-hover:opacity-100 group-hover:translate-y-0 group-hover:scale-100"
            }`}
          >
            <span className="text-xs font-medium text-neutral-900 tracking-wide">
              View Project
            </span>
            <ArrowUpRight size={13} className="text-neutral-900" />
          </div>
        </motion.div>

        {/* Static content below image */}
        <div className="flex items-start justify-between gap-4">
          <div>
            <h3 className="font-serif text-xl lg:text-2xl text-neutral-900 leading-snug group-hover:text-neutral-600 transition-colors duration-300">
              {project.title}
            </h3>
            <p className="text-neutral-400 text-sm mt-1">
              {project.location} · {project.year}
            </p>
          </div>
          <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-neutral-200 group-hover:border-neutral-900 group-hover:bg-neutral-900 transition-all duration-300 mt-1">
            <ArrowUpRight
              size={14}
              className="text-neutral-600 group-hover:text-white group-hover:rotate-45 transition-all duration-300"
            />
          </span>
        </div>
      </Link>
    </motion.div>
  );
}

export default function OurWorkGrid() {
  const [active, setActive] = useState<(typeof CATEGORIES)[number]>("All");
  const [hoveredId, setHoveredId] = useState<number | null>(null);
  const isTouch = useIsTouchDevice();

  const filtered =
    active === "All" ? PROJECTS : PROJECTS.filter((p) => p.category === active);

  return (
    <div className="relative">
      <FloatingCircles />

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        variants={{
          hidden: {},
          visible: { transition: { staggerChildren: 0.08 } },
        }}
        className="relative flex flex-wrap items-center gap-3 mb-10 lg:mb-14"
      >
        {CATEGORIES.map((cat) => (
          <motion.button
            key={cat}
            variants={{
              hidden: { opacity: 0, y: 16 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: EASE } },
            }}
            onClick={() => setActive(cat)}
            className={`relative px-6 py-2.5 rounded-full text-sm font-medium tracking-wide transition-all duration-300 ${
              active === cat
                ? "bg-neutral-900 text-white"
                : "bg-neutral-100 text-neutral-600 hover:bg-neutral-200"
            }`}
          >
            {cat}
          </motion.button>
        ))}
      </motion.div>

      <motion.div
        layout
        className="relative grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-16 pt-4"
      >
        <AnimatePresence mode="popLayout">
          {filtered.map((project, i) => (
            <ProjectCard
              key={project.id}
              project={project}
              index={i}
              hoveredId={hoveredId}
              setHoveredId={setHoveredId}
              isTouch={isTouch}
            />
          ))}
        </AnimatePresence>
      </motion.div>

      {filtered.length === 0 && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-center py-20"
        >
          <p className="text-neutral-400 text-sm">No projects found in this category.</p>
        </motion.div>
      )}
    </div>
  );
}