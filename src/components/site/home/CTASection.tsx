"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Phone } from "lucide-react";
import { SITE_INFO } from "@/constants/site";

export default function CTASection() {
  return (
    <section className="relative py-16 lg:py-20 overflow-hidden">
      {/* Floating decorative elements */}
      <motion.div
        animate={{ y: [0, -18, 0], x: [0, 12, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-8 left-[6%] h-12 w-12 rounded-full border border-neutral-900/10 pointer-events-none hidden lg:block"
      />
      <motion.div
        animate={{ y: [0, 20, 0] }}
        transition={{ duration: 9, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
        className="absolute bottom-8 right-[8%] h-8 w-8 rounded-full bg-neutral-900/5 pointer-events-none hidden lg:block"
      />

      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 50, scale: 0.96 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1] }}
          className="relative rounded-3xl overflow-hidden h-[380px] sm:h-[420px] lg:h-[460px] shadow-[0_35px_80px_-25px_rgba(0,0,0,0.45)]"
        >
          {/* Background image */}
          <Image
            src="/images/cta/cta-background.jpg"
            alt="Transform your space with Pla Design"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-neutral-950/92 via-neutral-950/60 to-neutral-950/15" />
          <div className="absolute inset-0 bg-gradient-to-t from-neutral-950/45 via-transparent to-transparent" />

          {/* Decorative gold-free glow */}
          <div className="absolute -bottom-20 -right-20 h-72 w-72 rounded-full bg-white/10 blur-[100px] pointer-events-none" />

          {/* Content */}
          <div className="relative h-full flex flex-col justify-center px-8 sm:px-12 lg:px-16 max-w-2xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.4 }}
              className="flex items-center gap-3 mb-5"
            >
              <span className="h-px w-8 bg-white" />
              <span className="text-white/80 text-[11px] tracking-[0.3em] font-medium uppercase">
                Let's Get Started
              </span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.55, ease: [0.16, 1, 0.3, 1] }}
              className="font-serif text-2xl sm:text-3xl lg:text-4xl text-white leading-tight mb-4"
            >
              Ready to Transform
              <br />
              Your <span className="italic text-white/70">Space?</span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.7 }}
              className="text-white/70 text-sm sm:text-base leading-relaxed mb-8 max-w-md"
            >
              Let's turn your vision into a space that's beautifully yours.
              Book a free consultation with our design team today.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.85 }}
              className="flex flex-col sm:flex-row items-start sm:items-center gap-4"
            >
              <Link
                href="/contact-us"
                className="group inline-flex items-center gap-2.5 px-7 py-3.5 rounded-full bg-white text-neutral-900 text-sm font-semibold tracking-wide shadow-[0_10px_30px_-8px_rgba(0,0,0,0.5)] hover:bg-neutral-100 transition-all duration-400"
              >
                Book A Free Consultation
                <ArrowUpRight
                  size={16}
                  className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300"
                />
              </Link>

              <Link
                href={`tel:${SITE_INFO.phone}`}
                className="group inline-flex items-center gap-2.5 px-7 py-3.5 rounded-full border border-white/40 bg-white/5 backdrop-blur-sm text-white text-sm font-medium tracking-wide hover:bg-white/15 hover:border-white/60 transition-all duration-400"
              >
                <Phone size={15} />
                {SITE_INFO.phone}
              </Link>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}