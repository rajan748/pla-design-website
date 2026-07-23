import PageHeader from "@/components/site/layout/PageHeader";
import OurWorkGrid from "@/components/site/projects/OurWorkGrid";

export const metadata = {
  title: "Our Work | Pla Design",
  description: "Explore our portfolio of residential, commercial, and hospitality interior design projects.",
};

export default function OurWorkPage() {
  return (
    <>
      <PageHeader
        title="Our Work"
        subtitle="A showcase of spaces we've thoughtfully designed and crafted"
      />
      <section className="bg-[#EFE6DD] px-6 lg:px-16 py-16 lg:py-24">
        <OurWorkGrid />
      </section>
    </>
  );
}