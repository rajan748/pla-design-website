import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Quote, Play } from "lucide-react";
import { SITE_INFO } from "@/constants/site";

export const metadata: Metadata = {
  title: "About Us | Pla Design",
  description: "Meet the studio behind Pla Design — crafting curated interiors that are personal, detailed, and timeless.",
};

const HIGHLIGHTS = [
  { number: "01", title: "Residential & Commercial Expertise", description: "From intimate homes to expansive commercial floors, our range runs deep." },
  { number: "02", title: "Design With Purpose", description: "Every material, every layout choice — traced back to how you'll actually live in the space." },
  { number: "03", title: "Sustainable & Future-Forward", description: "Materials and methods chosen to age well, both aesthetically and environmentally." },
];

const FEATURES = [
  { title: "Interior Design", value: "85%" },
  { title: "Architectural Planning", value: "65%" },
];

export default function AboutPage() {
  return (
    <main className="bg-white">
      {/* Founder section */}
      <section className="pt-32 lg:pt-40 pb-16 lg:pb-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
            {/* Photo */}
            <div className="lg:col-span-5 relative">
              <div className="relative h-[420px] sm:h-[500px] lg:h-[560px] rounded-[2rem] overflow-hidden">
                <Image
                  src="/images/about/founder.jpg"
                  alt="Parth Lal, Founder of Pla Design"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
              {/* Signature-style tag */}
              <div className="absolute -bottom-6 -right-4 sm:right-4 bg-white rounded-2xl shadow-[0_20px_50px_-15px_rgba(0,0,0,0.25)] px-6 py-4 border border-neutral-100">
                <p className="font-serif italic text-lg text-neutral-900 leading-none mb-1">
                  Parth Lal
                </p>
                <p className="text-[10px] tracking-widest text-gold-600 uppercase">
                  Founder & Principal Designer
                </p>
              </div>
            </div>

            {/* Content */}
            <div className="lg:col-span-7 lg:pl-8">
              <div className="flex items-center gap-3 mb-5">
                <span className="h-px w-6 bg-gold-500" />
                <span className="text-gold-600 text-[11px] tracking-[0.3em] font-semibold uppercase">
                  About The Studio
                </span>
              </div>

              <Quote size={32} className="text-gold-200 mb-4" strokeWidth={1.5} />

              <h1 className="font-serif text-2xl sm:text-3xl lg:text-[2.6rem] text-neutral-900 leading-[1.25] mb-6">
                "Good design isn't about
                trends — it's about designing
                for how <span className="italic text-gold-500">you</span> actually
                live."
              </h1>

              <p className="text-neutral-500 text-sm sm:text-base leading-relaxed mb-4">
                At <strong className="text-neutral-800 font-medium">Parth Lal & Associates</strong>, every project starts
                with a conversation, not a mood board. Founded in Mumbai, Pla
                Design has spent over eight years crafting residential,
                commercial and hospitality interiors rooted in
                personalization, thoughtful detailing, and refined
                craftsmanship.
              </p>
              <p className="text-neutral-500 text-sm sm:text-base leading-relaxed mb-8">
                From custom furniture tailored to your space, to carefully
                selected materials and finishes — every element is
                intentionally chosen. No detail too small, no idea too
                ambitious.
              </p>

              <div className="flex items-center gap-10">
                <div>
                  <span className="block font-serif text-3xl text-neutral-900">8+</span>
                  <span className="text-xs text-neutral-400 uppercase tracking-wide">Years</span>
                </div>
                <div className="h-10 w-px bg-neutral-200" />
                <div>
                  <span className="block font-serif text-3xl text-neutral-900">50+</span>
                  <span className="text-xs text-neutral-400 uppercase tracking-wide">Projects</span>
                </div>
                <div className="h-10 w-px bg-neutral-200" />
                <div>
                  <span className="block font-serif text-3xl text-neutral-900">3</span>
                  <span className="text-xs text-neutral-400 uppercase tracking-wide">Cities</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Highlights — horizontal scroll-style numbered list, NOT cards */}
      <section className="py-16 lg:py-20 bg-neutral-950 relative overflow-hidden">
        <div className="absolute top-0 right-1/4 h-96 w-96 rounded-full bg-gold-500/10 blur-[130px] pointer-events-none" />
        <div className="relative max-w-7xl mx-auto px-6 lg:px-12">
          <h2 className="font-serif text-2xl sm:text-3xl text-white leading-snug mb-12 max-w-lg">
            What Sets Our{" "}
            <span className="italic text-gold-400">Approach Apart</span>
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-px bg-white/10 rounded-3xl overflow-hidden">
            {HIGHLIGHTS.map((item) => (
              <div key={item.number} className="bg-neutral-950 p-8 lg:p-10">
                <span className="font-serif text-5xl text-gold-500/40 block mb-6">
                  {item.number}
                </span>
                <h3 className="font-serif text-xl text-white leading-snug mb-3">
                  {item.title}
                </h3>
                <p className="text-white/50 text-sm leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process — image left, big number stat right */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div className="relative h-[340px] lg:h-[480px] rounded-[2rem] overflow-hidden">
              <Image
                src="/images/about/studio-work.jpg"
                alt="Pla Design at work"
                fill
                className="object-cover"
              />
            </div>

            <div>
              <div className="flex items-center gap-3 mb-5">
                <span className="h-px w-6 bg-gold-500" />
                <span className="text-gold-600 text-[11px] tracking-[0.3em] font-semibold uppercase">
                  Craft & Capability
                </span>
              </div>
              <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl text-neutral-900 leading-snug mb-8">
                Where Vision Meets{" "}
                <span className="italic text-gold-500">Precision</span>
              </h2>

              <div className="space-y-7">
                {FEATURES.map((f) => (
                  <div key={f.title}>
                    <div className="flex items-baseline justify-between mb-2">
                      <span className="text-neutral-800 text-sm font-medium">
                        {f.title}
                      </span>
                      <span className="font-serif text-2xl text-gold-500">
                        {f.value}
                      </span>
                    </div>
                    <div className="h-1 rounded-full bg-neutral-100 overflow-hidden">
                      <div
                        className="h-full rounded-full bg-gradient-to-r from-gold-400 to-gold-600"
                        style={{ width: f.value }}
                      />
                    </div>
                  </div>
                ))}
              </div>

              <p className="text-neutral-500 text-sm leading-relaxed mt-8">
                From spatial planning to 3D visualization and final
                execution — our in-house capability means fewer handoffs,
                tighter timelines, and a single point of accountability
                throughout your project.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Video — full width statement */}
      <section className="relative h-[420px] lg:h-[520px] overflow-hidden">
        <Image
          src="/images/about/video-thumbnail.jpg"
          alt="Watch our story"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/55" />
        <div className="relative h-full flex flex-col items-center justify-center text-center px-6">
          
           <a href="https://www.youtube.com/watch?v=qYgdnM3BC3g"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex h-20 w-20 items-center justify-center rounded-full bg-gold-400 hover:scale-110 transition-transform duration-400 shadow-[0_20px_50px_-10px_rgba(201,161,95,0.6)] mb-6"
          >
            <Play size={26} className="text-neutral-900 ml-1" fill="currentColor" />
          </a>
          <h2 className="font-serif text-2xl sm:text-3xl text-white leading-snug max-w-lg">
            See how we bring spaces to{" "}
            <span className="italic text-gold-400">life</span>
          </h2>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 lg:py-20 bg-white">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl text-neutral-900 leading-snug mb-5">
            Have a Space to{" "}
            <span className="italic text-gold-500">Transform?</span>
          </h2>
          <p className="text-neutral-500 text-sm sm:text-base leading-relaxed mb-8">
            Let's start with a conversation about what you actually need.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/contact-us"
              className="group inline-flex items-center gap-2.5 px-8 py-3.5 rounded-full bg-neutral-900 text-white text-sm font-medium tracking-wide hover:bg-gold-500 transition-all duration-400"
            >
              Start The Conversation
              <ArrowUpRight
                size={16}
                className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300"
              />
            </Link>
            
            < a  href={`tel:${SITE_INFO.phone}`}
              className="text-neutral-500 text-sm hover:text-gold-600 transition-colors"
            >
              or call {SITE_INFO.phone}
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}