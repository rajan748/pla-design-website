"use client";

import Link from "next/link";
import { motion } from "framer-motion";
// Lucide icons jo ki system icons hain
import { Phone, Mail, MapPin, ArrowUpRight } from "lucide-react";
// Social Brand icons jo hamesha stable rehte hain
import { FaInstagram, FaFacebookF, FaLinkedinIn } from "react-icons/fa6";
import { SITE_INFO, NAV_LINKS } from "@/constants/site";

const SERVICES_LINKS = [
  { label: "Concept Design", href: "/our-work" },
  { label: "Custom Furniture & Materials", href: "/our-work" },
  { label: "Project Execution", href: "/our-work" },
];

const PROJECT_CATEGORIES = [
  { label: "Residential", href: "/our-work?category=residential" },
  { label: "Commercial", href: "/our-work?category=commercial" },
  { label: "Hospitality", href: "/our-work?category=hospitality" },
];

export default function Footer() {
  return (
    <footer className="relative bg-neutral-950 overflow-hidden">
      {/* Decorative subtle ambient glow */}
      <div className="absolute top-0 right-0 h-96 w-96 rounded-full bg-amber-500/5 blur-[120px] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-12">
        {/* Top area */}
        <div className="grid grid-cols-1 lg:grid-cols-[1.3fr_1fr_1fr_1.2fr] gap-10 lg:gap-8 py-16 lg:py-20 border-b border-white/10">
          
          {/* Brand column */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Link href="/" className="inline-flex flex-col mb-5">
              <span className="font-serif text-3xl tracking-[0.15em] text-white">PLA</span>
              <span className="text-[10px] tracking-[0.4em] text-amber-400 -mt-1 font-semibold">DESIGN</span>
            </Link>
            <p className="text-neutral-400 text-sm leading-relaxed mb-6 max-w-xs font-light">
              A Mumbai-based interior design studio crafting residential,
              commercial and hospitality spaces that reflect who you are —
              inside and out.
            </p>
            <div className="flex items-center gap-3">
              {[
                { icon: FaInstagram, href: SITE_INFO.socials.instagram },
                { icon: FaFacebookF, href: SITE_INFO.socials.facebook },
                { icon: FaLinkedinIn, href: SITE_INFO.socials.linkedin },
              ].map(({ icon: Icon, href }, i) => (
                <a
                  key={i}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-white/15 text-white/70 hover:bg-amber-500 hover:text-neutral-950 hover:border-amber-500 hover:-translate-y-1 transition-all duration-300"
                >
                  <Icon size={16} />
                </a>
              ))}
            </div>
          </motion.div>

          {/* Quick links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h4 className="text-white text-xs font-semibold tracking-[0.15em] uppercase mb-5">
              Quick Links
            </h4>
            <ul className="space-y-3">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="group inline-flex items-center gap-1.5 text-neutral-400 text-sm hover:text-amber-400 transition-colors duration-300"
                  >
                    <span className="h-px w-0 group-hover:w-3 bg-amber-400 transition-all duration-300" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Services */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h4 className="text-white text-xs font-semibold tracking-[0.15em] uppercase mb-5">
              Our Work
            </h4>
            <ul className="space-y-3">
              {PROJECT_CATEGORIES.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="group inline-flex items-center gap-1.5 text-neutral-400 text-sm hover:text-amber-400 transition-colors duration-300"
                  >
                    <span className="h-px w-0 group-hover:w-3 bg-amber-400 transition-all duration-300" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>

            <h4 className="text-white text-xs font-semibold tracking-[0.15em] uppercase mb-5 mt-8">
              Services
            </h4>
            <ul className="space-y-3">
              {SERVICES_LINKS.map((link, i) => (
                <li key={i}>
                  <Link
                    href={link.href}
                    className="group inline-flex items-center gap-1.5 text-neutral-400 text-sm hover:text-amber-400 transition-colors duration-300"
                  >
                    <span className="h-px w-0 group-hover:w-3 bg-amber-400 transition-all duration-300" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact + Actions */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <h4 className="text-white text-xs font-semibold tracking-[0.15em] uppercase mb-5">
              Get In Touch
            </h4>
            <ul className="space-y-4 mb-8">
              <li>
                <a
                  href={`tel:${SITE_INFO.phone}`}
                  className="flex items-start gap-3 text-neutral-400 text-sm hover:text-amber-400 transition-colors duration-300"
                >
                  <Phone size={16} className="mt-0.5 shrink-0 text-amber-400" />
                  {SITE_INFO.phone}
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${SITE_INFO.email}`}
                  className="flex items-start gap-3 text-neutral-400 text-sm hover:text-amber-400 transition-colors duration-300"
                >
                  <Mail size={16} className="mt-0.5 shrink-0 text-amber-400" />
                  {SITE_INFO.email}
                </a>
              </li>
              <li className="flex items-start gap-3 text-neutral-400 text-sm font-light">
                <MapPin size={16} className="mt-0.5 shrink-0 text-amber-400" />
                {SITE_INFO.address}
              </li>
            </ul>

            <Link
              href="/contact-us"
              className="group inline-flex items-center gap-2.5 px-6 py-3 rounded-full bg-amber-500 text-neutral-950 text-sm font-semibold tracking-wide hover:bg-white transition-all duration-400 shadow-md shadow-amber-500/10"
            >
              <span>Get A Quote</span>
              <ArrowUpRight
                size={15}
                className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300"
              />
            </Link>
          </motion.div>
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 py-6 text-xs text-neutral-500">
          <p>
            © {new Date().getFullYear()} Pla Design. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <Link href="/privacy-policy" className="hover:text-amber-400 transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:text-amber-400 transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}