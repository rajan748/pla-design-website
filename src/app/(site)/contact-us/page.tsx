import { Metadata } from "next";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import PageHeader from "@/components/site/layout/PageHeader";
import ContactForm from "@/components/site/contact/ContactForm";
import { SITE_INFO } from "@/constants/site";

export const metadata: Metadata = {
  title: "Contact Us | Pla Design",
  description: "Get in touch with Pla Design for your next interior design project.",
};

const CONTACT_INFO = [
  {
    icon: Phone,
    label: "Call Us",
    value: SITE_INFO.phone,
    href: `tel:${SITE_INFO.phone}`,
  },
  {
    icon: Mail,
    label: "Email Us",
    value: SITE_INFO.email,
    href: `mailto:${SITE_INFO.email}`,
  },
  {
    icon: MapPin,
    label: "Visit Us",
    value: SITE_INFO.address,
    href: "#map",
  },
  {
    icon: Clock,
    label: "Working Hours",
    value: "Mon - Sat: 10AM - 7PM",
    href: null,
  },
];

export default function ContactPage() {
  return (
    <main className="bg-white">
      <PageHeader
        tag="Get In Touch"
        title="Let's Design Your"
        highlight="Dream Space"
        description="Have a project in mind? Fill out the form below or reach out directly — we'd love to hear from you."
        breadcrumb="Contact Us"
        image="/images/page-header/contact-header.png"
      />

      <section className="relative -mt-16 lg:-mt-20 pb-14 lg:pb-16">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {CONTACT_INFO.map((info) => {
              const Wrapper = info.href ? "a" : "div";
              return (
                <Wrapper
                  key={info.label}
                  {...(info.href ? { href: info.href } : {})}
                  className="group flex items-start gap-4 bg-white rounded-2xl p-6 shadow-[0_20px_50px_-15px_rgba(0,0,0,0.3)] border border-neutral-100 hover:border-gold-200 hover:shadow-[0_20px_50px_-15px_rgba(201,161,95,0.4)] hover:-translate-y-1 transition-all duration-300"
                >
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-gold-50 group-hover:bg-gold-400 transition-colors duration-300">
                    <info.icon
                      size={18}
                      className="text-gold-600 group-hover:text-white transition-colors duration-300"
                      strokeWidth={1.5}
                    />
                  </div>
                  <div>
                    <p className="text-[11px] tracking-wide text-neutral-400 uppercase mb-1">
                      {info.label}
                    </p>
                    <p className="text-sm font-medium text-neutral-900 leading-snug">
                      {info.value}
                    </p>
                  </div>
                </Wrapper>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <span className="h-px w-6 bg-gold-500" />
                <span className="text-gold-600 text-[11px] tracking-[0.3em] font-semibold uppercase">
                  Send A Message
                </span>
              </div>
              <h2 className="font-serif text-xl sm:text-2xl lg:text-3xl text-neutral-900 leading-snug mb-8">
                Tell Us About{" "}
                <span className="italic text-gold-500">Your Project</span>
              </h2>
              <ContactForm />
            </div>

            <div>
              <div className="flex items-center gap-3 mb-4">
                <span className="h-px w-6 bg-gold-500" />
                <span className="text-gold-600 text-[11px] tracking-[0.3em] font-semibold uppercase">
                  Find Us
                </span>
              </div>
              <h2 className="font-serif text-xl sm:text-2xl lg:text-3xl text-neutral-900 leading-snug mb-8">
                Visit Our <span className="italic text-gold-500">Studio</span>
              </h2>
              <div
                id="map"
                className="relative h-[380px] lg:h-[420px] rounded-3xl overflow-hidden shadow-[0_20px_50px_-15px_rgba(0,0,0,0.2)] ring-1 ring-neutral-100"
              >
                <iframe
                  src={`https://www.google.com/maps?q=${encodeURIComponent(
                    SITE_INFO.address
                  )}&output=embed`}
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Pla Design Location"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}