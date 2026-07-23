"use client";

import { useRef } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Sofa, PenTool, HardHat } from "lucide-react";

const SERVICES = [
  {
    icon: PenTool,
    number: "01",
    title: "Concept Design",
    description:
      "From mood boards to detailed 3D visualizations, we shape a design language uniquely yours.",
    image: "/images/services/concept-design.jpg",
  },
  {
    icon: Sofa,
    number: "02",
    title: "Custom Furniture & Materials",
    description:
      "Bespoke furniture and curated materials, handpicked to fit your space and style perfectly.",
    image: "/images/services/furniture-materials.jpg",
  },
  {
    icon: HardHat,
    number: "03",
    title: "Project Execution",
    description:
      "End-to-end on-site execution with dedicated management and flawless craftsmanship.",
    image: "/images/services/project-execution.jpg",
  },
];

function ServiceCard({ service, index }: { service: (typeof SERVICES)[0]; index: number }) {
  const ref = useRef<HTMLDivElement>(null);

  // Mouse-follow 3D tilt
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const rotateX = useSpring(useTransform(mouseY, [-0.5, 0.5], [8, -8]), {
    stiffness: 150,
    damping: 20,
  });
  const rotateY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-8, 8]), {
    stiffness: 150,
    damping: 20,
  });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = ref.current?.getBoundingClientRect();
    if (!rect) return;
    mouseX.set((e.clientX - rect.left) / rect.width - 0.5);
    mouseY.set((e.clientY - rect.top) / rect.height - 0.5);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 80, rotateX: 15 }}
      whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{
        duration: 1.1,
        delay: index * 0.25,
        ease: [0.16, 1, 0.3, 1],
      }}
      style={{ perspective: 1200 }}
    >
      <motion.div
        ref={ref}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{
          rotateX,
          rotateY,
          transformStyle: "preserve-3d",
        }}
        className="group relative h-[380px] lg:h-[420px] rounded-3xl overflow-hidden cursor-pointer shadow-[0_20px_50px_-20px_rgba(0,0,0,0.3)] hover:shadow-[0_35px_70px_-15px_rgba(0,0,0,0.45)] transition-shadow duration-500"
      >
        {/* Curtain reveal panel */}
        <motion.div
          initial={{ scaleY: 1 }}
          whileInView={{ scaleY: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{
            duration: 0.9,
            delay: index * 0.25 + 0.35,
            ease: [0.76, 0, 0.24, 1],
          }}
          style={{ originY: 0 }}
          className="absolute inset-0 z-20 bg-neutral-900"
        />

        {/* Background image — slow ambient zoom */}
        <motion.div
          animate={{ scale: [1, 1.08, 1] }}
          transition={{ duration: 14, repeat: Infinity, ease: "easeInOut", delay: index * 0.5 }}
          className="absolute inset-0"
        >
          <Image
            src={service.image}
            alt={service.title}
            fill
            className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
          />
        </motion.div>

        <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/10 to-transparent" />

        {/* Number */}
        <div
          style={{ transform: "translateZ(30px)" }}
          className="absolute top-5 left-5 flex items-center gap-2"
        >
          <motion.span
            animate={{ opacity: [0.6, 1, 0.6] }}
            transition={{ duration: 3, repeat: Infinity, delay: index * 0.5 }}
            className="font-serif text-2xl text-white drop-shadow-lg"
          >
            {service.number}
          </motion.span>
          <span className="h-px w-6 bg-white/60" />
        </div>

        {/* Icon badge */}
        <motion.div
          style={{ transform: "translateZ(40px)" }}
          whileHover={{ rotate: 15, scale: 1.1 }}
          className="absolute top-5 right-5 flex h-11 w-11 items-center justify-center rounded-full bg-white/20 backdrop-blur-md border border-white/30 group-hover:bg-white transition-all duration-500"
        >
          <service.icon
            size={18}
            className="text-white group-hover:text-neutral-900 transition-colors duration-500"
            strokeWidth={1.5}
          />
        </motion.div>

        {/* Content */}
        <div
          style={{ transform: "translateZ(25px)" }}
          className="absolute bottom-0 left-0 right-0 p-6 lg:p-7"
        >
          <h3 className="font-serif text-lg lg:text-xl text-white mb-2 leading-snug drop-shadow-md">
            {service.title}
          </h3>

          <p className="text-white/85 text-xs leading-relaxed mb-4 line-clamp-2 group-hover:line-clamp-none transition-all duration-300 drop-shadow-sm">
            {service.description}
          </p>

          <Link
            href="/contact-us"
            className="inline-flex items-center gap-2 text-xs font-medium text-white"
          >
            <span className="relative">
              Learn More
              <span className="absolute -bottom-1 left-0 h-px w-0 bg-white group-hover:w-full transition-all duration-500" />
            </span>
            <span className="flex h-7 w-7 items-center justify-center rounded-full border border-white/50 group-hover:border-white group-hover:bg-white transition-all duration-500">
              <ArrowUpRight
                size={13}
                className="text-white group-hover:text-neutral-900 group-hover:rotate-45 transition-all duration-500"
              />
            </span>
          </Link>
        </div>

        <div className="absolute inset-0 rounded-3xl ring-1 ring-inset ring-white/10 group-hover:ring-white/40 transition-all duration-500" />
      </motion.div>
    </motion.div>
  );
}

export default function ServicesSection() {
  return (
    <section className="relative py-24 lg:py-32 overflow-hidden">
      <motion.div
        animate={{ y: [0, -20, 0], x: [0, 10, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-20 left-[8%] h-16 w-16 rounded-full border border-neutral-900/10 pointer-events-none hidden lg:block"
      />
      <motion.div
        animate={{ y: [0, 25, 0], x: [0, -15, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        className="absolute bottom-32 right-[10%] h-10 w-10 rounded-full bg-neutral-900/5 pointer-events-none hidden lg:block"
      />
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
        className="absolute top-1/2 right-[5%] h-24 w-24 pointer-events-none hidden lg:block"
      >
        <svg viewBox="0 0 100 100" className="w-full h-full opacity-[0.08]">
          <path
            id="circlePath"
            d="M 50, 50 m -37, 0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0"
            fill="none"
          />
          <text fontSize="9" fill="#171717" letterSpacing="2">
            <textPath href="#circlePath">
              PLA DESIGN • PLA DESIGN • PLA DESIGN •
            </textPath>
          </text>
        </svg>
      </motion.div>

      <div className="absolute top-8 left-0 right-0 overflow-hidden pointer-events-none opacity-[0.06]">
        <motion.div
          animate={{ x: ["0%", "-50%"] }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          className="flex whitespace-nowrap"
        >
          {Array(4).fill("WHAT WE DO — SERVICES — WHAT WE DO — SERVICES — ").map((t, i) => (
            <span key={i} className="font-serif text-[100px] lg:text-[160px] text-neutral-900 mr-8">
              {t}
            </span>
          ))}
        </motion.div>
      </div>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-14 lg:mb-16"
        >
          <div>
            <div className="flex items-center gap-3 mb-4">
              <span className="h-px w-8 bg-neutral-900" />
              <span className="text-neutral-900 text-xs tracking-[0.3em] font-medium uppercase">
                What We Do
              </span>
            </div>
            <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl text-neutral-900 leading-snug">
              Crafting Spaces With{" "}
              <span className="italic text-neutral-500">Purpose</span>
            </h2>
          </div>
          <p className="text-neutral-600 text-sm leading-relaxed max-w-sm">
            From first sketch to final handover, every service is designed to
            bring your vision to life — seamlessly and beautifully.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {SERVICES.map((service, i) => (
            <ServiceCard key={service.title} service={service} index={i} />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex justify-center mt-14"
        >
          <Link
            href="/our-work"
            className="group inline-flex items-center gap-3 px-8 py-3.5 rounded-full border border-neutral-900/20 text-neutral-900 text-sm font-medium tracking-wide hover:border-neutral-900 hover:bg-neutral-900 hover:text-white transition-all duration-400"
          >
            View All Our Work
            <ArrowUpRight
              size={16}
              className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300"
            />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}