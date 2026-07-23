"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";

import { Phone, Menu, X, ArrowUpRight } from "lucide-react";
import { FaInstagram, FaFacebook, FaLinkedin } from "react-icons/fa";

import { NAV_LINKS, SITE_INFO } from "@/constants/site";
import { cn } from "@/lib/utils/cn";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
        scrolled
          ? "bg-white/55 backdrop-blur-xl shadow-[0_8px_30px_rgba(0,0,0,0.08)] border-b border-black/5"
          : "bg-gradient-to-b from-black/70 via-black/30 to-transparent"
      )}
    >
      {/* Top utility bar */}
      <div
        className={cn(
          "hidden lg:flex items-center justify-between px-8 xl:px-20 transition-all duration-500 overflow-hidden border-b",
          scrolled
            ? "max-h-0 opacity-0 border-transparent py-0"
            : "max-h-14 opacity-100 border-white/10 py-3"
        )}
      >
        <div className="flex items-center gap-3">
          {[
            { icon: FaInstagram, href: SITE_INFO.socials.instagram },
            { icon: FaFacebook, href: SITE_INFO.socials.facebook },
            { icon: FaLinkedin, href: SITE_INFO.socials.linkedin },
          ].map(({ icon: Icon, href }, i) => (
            <a
              key={i}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-8 w-8 items-center justify-center rounded-full border border-white/20 text-white/80 hover:text-neutral-900 hover:bg-[#c9a15f] hover:border-[#c9a15f] hover:shadow-[0_4px_14px_rgba(201,161,95,0.5)] hover:-translate-y-0.5 transition-all duration-300"
            >
              <Icon size={14} />
            </a>
          ))}
        </div>

        <div className="flex items-center gap-8 text-xs tracking-wide text-white/80">
          <Link
            href="/contact-us"
            className="flex items-center gap-1.5 hover:text-[#c9a15f] transition-colors uppercase tracking-[0.15em] font-medium"
          >
            <ArrowUpRight size={14} />
            Get A Quote
          </Link>

          <a
            href={`tel:${SITE_INFO.phone}`}
            className="flex items-center gap-2 hover:text-[#c9a15f] transition-colors font-medium"
          >
            <span className="flex h-7 w-7 items-center justify-center rounded-full bg-white/10">
              <Phone size={12} />
            </span>
            {SITE_INFO.phone}
          </a>
        </div>
      </div>

      {/* Main nav */}
      <nav
        className={cn(
          "flex items-center justify-between px-6 lg:px-8 xl:px-20 transition-all duration-500",
          scrolled ? "py-4" : "py-6"
        )}
      >
        <div className="hidden lg:flex items-center gap-10 flex-1">
          {NAV_LINKS.slice(0, 2).map((link) => (
            <NavLink key={link.href} href={link.href} scrolled={scrolled}>
              {link.label}
            </NavLink>
          ))}
        </div>

        {/* Logo — 3D layered effect */}
        <Link href="/" className="relative flex flex-col items-center shrink-0 group">
          <div className="relative">
            <span
              className={cn(
                "absolute inset-0 font-serif text-3xl lg:text-4xl tracking-[0.15em] blur-[6px] opacity-40 transition-colors duration-500",
                scrolled ? "text-[#c9a15f]" : "text-[#c9a15f]"
              )}
              aria-hidden="true"
            >
              PLA
            </span>
            <span
              className={cn(
                "relative font-serif text-3xl lg:text-4xl tracking-[0.15em] transition-all duration-500 group-hover:scale-105 inline-block",
                scrolled ? "text-neutral-900" : "text-white"
              )}
              style={{
                textShadow: scrolled
                  ? "0 2px 8px rgba(0,0,0,0.1)"
                  : "0 2px 12px rgba(0,0,0,0.4)",
              }}
            >
              PLA
            </span>
          </div>
          <span
            className={cn(
              "text-[10px] lg:text-[11px] tracking-[0.5em] -mt-1 font-medium transition-colors duration-500",
              scrolled ? "text-[#c9a15f]" : "text-[#c9a15f]"
            )}
          >
            DESIGN
          </span>
          <span
            className={cn(
              "absolute -bottom-2 h-[2px] w-0 group-hover:w-full transition-all duration-500 bg-gradient-to-r from-transparent via-[#c9a15f] to-transparent"
            )}
          />
        </Link>

        <div className="hidden lg:flex items-center gap-10 flex-1 justify-end">
          {NAV_LINKS.slice(2).map((link) => (
            <NavLink key={link.href} href={link.href} scrolled={scrolled}>
              {link.label}
            </NavLink>
          ))}
        </div>

        {/* Mobile toggle */}
        <button
          onClick={() => setMobileOpen((p) => !p)}
          className={cn(
            "lg:hidden flex h-11 w-11 items-center justify-center rounded-full transition-all duration-300",
            scrolled
              ? "bg-neutral-900/5 text-neutral-900"
              : "bg-white/10 text-white backdrop-blur-sm"
          )}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.35, ease: "easeInOut" }}
            className="lg:hidden bg-white/70 backdrop-blur-xl overflow-hidden shadow-2xl"
          >
            <div className="flex flex-col px-6 py-8 gap-1">
              {NAV_LINKS.map((link, i) => (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.06 }}
                >
                  <Link
                    href={link.href}
                    className="flex items-center justify-between py-3.5 text-neutral-900 text-lg font-serif border-b border-neutral-100 group"
                  >
                    {link.label}
                    <ArrowUpRight
                      size={18}
                      className="text-[#c9a15f] opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all duration-300"
                    />
                  </Link>
                </motion.div>
              ))}

              <div className="flex items-center gap-3 mt-6">
                {[
                  { icon: FaInstagram, href: SITE_INFO.socials.instagram },
                  { icon: FaFacebook, href: SITE_INFO.socials.facebook },
                  { icon: FaLinkedin, href: SITE_INFO.socials.linkedin },
                ].map(({ icon: Icon, href }, i) => (
                  <a
                    key={i}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex h-10 w-10 items-center justify-center rounded-full bg-neutral-100 text-neutral-700 hover:bg-[#c9a15f] hover:text-white transition-colors"
                  >
                    <Icon size={16} />
                  </a>
                ))}
              </div>

              <a
                href={`tel:${SITE_INFO.phone}`}
                className="flex items-center gap-2 text-sm text-neutral-600 mt-4 pt-4 border-t font-medium"
              >
                <Phone size={15} className="text-[#c9a15f]" /> {SITE_INFO.phone}
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

function NavLink({
  href,
  scrolled,
  children,
}: {
  href: string;
  scrolled: boolean;
  children: React.ReactNode;
}) {
  return (
    <Link
      href={href}
      className={cn(
        "relative text-sm tracking-[0.08em] font-medium group transition-all duration-300 hover:-translate-y-0.5 inline-block",
        scrolled ? "text-neutral-800 hover:text-[#c9a15f]" : "text-white/90 hover:text-[#c9a15f]"
      )}
    >
      {children}
      <span className="absolute -bottom-1.5 left-1/2 -translate-x-1/2 h-[2px] w-0 group-hover:w-full transition-all duration-300 bg-[#c9a15f] rounded-full" />
    </Link>
  );
}