"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle } from "lucide-react";

const SLIDES = [
  {
    image: "/images/hero/hero-1.jpeg",
    line1: "DESIGN, REIMAGINED",
    line2: "WHERE BEAUTY MEETS SOPHISTICATION",
    description:
      "Crafting residential, commercial & hospitality spaces that reflect who you are — inside and out.",
  },
  {
    image: "/images/hero/hero-2.jpeg",
    line1: "EVERY DETAIL, INTENTIONAL",
    line2: "FROM CONCEPT TO COMPLETION",
    description:
      "Custom furniture, material selection and end-to-end project execution — handled with precision.",
  },
];

export default function Hero() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActive((prev) => (prev + 1) % SLIDES.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const slide = SLIDES[active];

  return (
    <section className="relative h-screen min-h-[600px] w-full overflow-hidden">
      <AnimatePresence mode="sync">
        <motion.div
          key={active}
          initial={{ opacity: 0, scale: 1.08 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.2, ease: "easeInOut" }}
          className="absolute inset-0"
        >
          <Image
            src={slide.image}
            alt={slide.line1}
            fill
            priority={active === 0}
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-black/60" />
        </motion.div>
      </AnimatePresence>

      <div className="relative z-10 flex h-full flex-col items-center justify-center px-6 text-center">
        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.7 }}
            className="max-w-4xl"
          >
            <h1 className="font-serif text-3xl sm:text-5xl lg:text-6xl text-white tracking-wide leading-tight">
              {slide.line1}
            </h1>
            <h2 className="mt-2 font-serif text-2xl sm:text-4xl lg:text-5xl text-amber-400/90 tracking-wide leading-tight">
              {slide.line2}
            </h2>
            <p className="mt-6 text-sm sm:text-base text-white/85 max-w-xl mx-auto leading-relaxed">
              {slide.description}
            </p>

            <div className="mt-10 flex items-center justify-center gap-4">
              <Link
                href="/contact-us"
                className="px-8 py-3 bg-white text-neutral-900 text-sm tracking-wide font-medium hover:bg-amber-400 hover:text-white transition-colors duration-300"
              >
                GET A QUOTE
              </Link>
              <Link
                href="/our-work"
                className="px-8 py-3 border border-white/60 text-white text-sm tracking-wide font-medium hover:bg-white/10 transition-colors duration-300"
              >
                VIEW OUR WORK
              </Link>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      <Link
        href="/contact-us"
        className="hidden lg:flex absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-amber-500 hover:bg-amber-600 transition-colors text-white text-xs tracking-[0.25em] font-medium px-3 py-6 [writing-mode:vertical-rl]"
      >
        GET QUOTE
      </Link>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex gap-2">
        {SLIDES.map((_, i) => (
          <button
            key={i}
            onClick={() => setActive(i)}
            aria-label={`Slide ${i + 1}`}
            className={`h-1.5 rounded-full transition-all duration-300 ${
              i === active ? "w-8 bg-white" : "w-1.5 bg-white/40"
            }`}
          />
        ))}
      </div>

      
      <a  href="https://wa.me/918082055055"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-green-500 shadow-lg hover:scale-105 transition-transform"
        aria-label="Chat on WhatsApp"
      >
        <MessageCircle size={26} className="text-white" fill="white" />
      </a>
    </section>
  );
}