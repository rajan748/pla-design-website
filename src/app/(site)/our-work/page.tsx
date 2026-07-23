import { Metadata } from "next";
import OurWorkGrid from "@/components/site/projects/OurWorkGrid";

export const metadata: Metadata = {
  title: "Our Work | Pla Design",
  description: "Explore our portfolio of residential, commercial and hospitality interior design projects.",
};

export default function OurWorkPage() {
  return (
    <main className="pt-28 lg:pt-32 pb-20">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="max-w-2xl mb-12 lg:mb-16">
          <div className="flex items-center gap-3 mb-4">
            <span className="h-px w-6 bg-neutral-900" />
            <span className="text-neutral-900 text-[11px] tracking-[0.3em] font-semibold uppercase">
              Our Portfolio
            </span>
          </div>
          <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-neutral-900 leading-tight mb-4">
            Spaces We've{" "}
            <span className="italic text-neutral-500">Brought to Life</span>
          </h1>
          <p className="text-neutral-600 text-sm sm:text-base leading-relaxed">
            A curated collection of residential, commercial and hospitality
            projects — each shaped by thoughtful design and precise
            execution.
          </p>
        </div>

        <OurWorkGrid />
      </div>
    </main>
  );
}