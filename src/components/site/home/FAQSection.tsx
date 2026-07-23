"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Plus, ArrowUpRight, MessageCircleQuestion } from "lucide-react";

const FAQS = [
  {
    question: "What services does Pla Design offer?",
    answer:
      "We offer end-to-end interior design services including concept design, 3D visualization, custom furniture & material selection, and complete project execution for residential, commercial, and hospitality spaces.",
  },
  {
    question: "What is your design process?",
    answer:
      "Our process starts with an in-depth consultation to understand your needs, followed by concept design and mood boards, 3D visualization for approval, and finally on-site execution with dedicated project management until handover.",
  },
  {
    question: "Can I see examples of your past work?",
    answer:
      "Absolutely — our portfolio showcases completed residential, commercial, and hospitality projects across Mumbai. Browse our full portfolio to explore design styles and past client transformations.",
  },
  {
    question: "How long does a typical project take?",
    answer:
      "Project timelines vary by scope and scale, but most residential projects take 4-12 weeks from design approval to completion. We'll share a detailed timeline specific to your project during consultation.",
  },
  {
    question: "Do you work within a fixed budget?",
    answer:
      "Yes, we tailor design and material choices to align with your budget, offering transparent costing at every stage so there are no surprises along the way.",
  },
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="relative py-16 lg:py-20 overflow-hidden">
      {/* Floating decorative elements */}
      <motion.div
        animate={{ y: [0, -18, 0], x: [0, 10, 0] }}
        transition={{ duration: 8.5, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-24 right-[10%] h-12 w-12 rounded-full border border-neutral-900/10 pointer-events-none hidden lg:block"
      />
      <motion.div
        animate={{ y: [0, 20, 0] }}
        transition={{ duration: 7.5, repeat: Infinity, ease: "easeInOut", delay: 0.4 }}
        className="absolute bottom-32 left-[7%] h-8 w-8 rounded-full bg-neutral-900/5 pointer-events-none hidden lg:block"
      />

      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-[0.9fr_1.1fr] gap-10 lg:gap-16 items-start">
          {/* Left — Sticky image panel with rotate-in entrance */}
          <motion.div
            initial={{ opacity: 0, rotate: -12, scale: 0.85, x: -50 }}
            whileInView={{ opacity: 1, rotate: 0, scale: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 1.4, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            whileHover={{ scale: 1.01, rotate: 0.5 }}
            className="lg:sticky lg:top-28 relative h-[280px] sm:h-[360px] lg:h-[520px] rounded-3xl overflow-hidden shadow-[0_30px_70px_-20px_rgba(0,0,0,0.4)]"
          >
            <Image
              src="/images/faq/faq-interior.jpg"
              alt="Pla Design interior detail"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent" />

            <div className="absolute bottom-0 left-0 right-0 p-7 lg:p-8">
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.9 }}
                className="flex h-12 w-12 items-center justify-center rounded-full bg-white/90 backdrop-blur-sm mb-4"
              >
                <MessageCircleQuestion size={22} className="text-neutral-900" strokeWidth={1.5} />
              </motion.div>
              <motion.h3
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 1.05 }}
                className="font-serif text-2xl lg:text-3xl text-white leading-snug mb-2"
              >
                Got Questions?
                <br />
                We've Got Answers.
              </motion.h3>
              <motion.p
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 1.2 }}
                className="text-white/70 text-sm leading-relaxed max-w-xs"
              >
                Everything you need to know before starting your design journey with us.
              </motion.p>
            </div>
          </motion.div>

          {/* Right — Accordion */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="mb-8"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="h-px w-6 bg-neutral-900" />
                <span className="text-neutral-900 text-[11px] tracking-[0.3em] font-medium uppercase">
                  FAQ
                </span>
              </div>
              <h2 className="font-serif text-xl sm:text-2xl lg:text-3xl text-neutral-900 leading-snug">
                Common{" "}
                <span className="italic text-neutral-500">Questions</span>
              </h2>
            </motion.div>

            <div className="space-y-3">
              {FAQS.map((faq, i) => {
                const isOpen = openIndex === i;
                return (
                  <motion.div
                    key={faq.question}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.7, delay: 0.4 + i * 0.15, ease: [0.16, 1, 0.3, 1] }}
                    className={`rounded-2xl border transition-all duration-300 overflow-hidden ${
                      isOpen
                        ? "border-neutral-900/30 bg-white shadow-[0_15px_40px_-15px_rgba(0,0,0,0.15)]"
                        : "border-neutral-900/10 bg-white/50 hover:border-neutral-900/20"
                    }`}
                  >
                    <button
                      onClick={() => toggle(i)}
                      className="w-full flex items-center gap-4 px-5 lg:px-6 py-4 lg:py-5 text-left"
                    >
                      <span
                        className={`font-serif text-sm shrink-0 transition-colors duration-300 ${
                          isOpen ? "text-neutral-900" : "text-neutral-400"
                        }`}
                      >
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <span
                        className={`flex-1 font-serif text-base lg:text-lg transition-colors duration-300 ${
                          isOpen ? "text-neutral-900" : "text-neutral-800"
                        }`}
                      >
                        {faq.question}
                      </span>
                      <motion.span
                        animate={{ rotate: isOpen ? 45 : 0 }}
                        transition={{ duration: 0.3 }}
                        className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full transition-all duration-300 ${
                          isOpen ? "bg-neutral-900" : "bg-neutral-900/5"
                        }`}
                      >
                        <Plus
                          size={16}
                          className={isOpen ? "text-white" : "text-neutral-600"}
                        />
                      </motion.span>
                    </button>

                    <AnimatePresence initial={false}>
                      {isOpen && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.35, ease: "easeInOut" }}
                          className="overflow-hidden"
                        >
                          <p className="pl-[3.25rem] pr-6 pb-5 text-sm text-neutral-600 leading-relaxed">
                            {faq.answer}
                          </p>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.div>
                );
              })}
            </div>

            {/* Bottom CTA */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.7, delay: 1.3, ease: [0.16, 1, 0.3, 1] }}
              className="flex items-center gap-3 mt-8 pt-6 border-t border-neutral-900/15"
            >
              <p className="text-sm text-neutral-600">Still have questions?</p>
              <Link
                href="/contact-us"
                className="group inline-flex items-center gap-2 text-sm font-medium text-neutral-900 hover:text-neutral-600 transition-colors"
              >
                Get in touch
                <ArrowUpRight
                  size={14}
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