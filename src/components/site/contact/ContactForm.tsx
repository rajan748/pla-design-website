"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { motion } from "framer-motion";
import { Send, CheckCircle2 } from "lucide-react";

const contactSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Enter a valid email address"),
  phone: z.string().min(10, "Enter a valid phone number"),
  projectType: z.string().min(1, "Please select a project type"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

type ContactFormData = z.infer<typeof contactSchema>;

const PROJECT_TYPES = ["Residential", "Commercial", "Hospitality", "Other"];

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = async (data: ContactFormData) => {
    setSubmitting(true);
    try {
      // TODO: replace with actual API call to Express backend
      // await api.post("/contact", data);
      await new Promise((resolve) => setTimeout(resolve, 1200));
      console.log("Form submitted:", data);
      setSubmitted(true);
      reset();
    } catch (error) {
      console.error("Submission failed:", error);
    } finally {
      setSubmitting(false);
    }
  };

  if (submitted) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.4 }}
        className="flex flex-col items-center justify-center text-center py-16 px-8 bg-gold-50/50 rounded-3xl border border-gold-100"
      >
        <div className="flex h-16 w-16 items-center justify-center rounded-full bg-gold-400 mb-5">
          <CheckCircle2 size={28} className="text-white" />
        </div>
        <h3 className="font-serif text-2xl text-neutral-900 mb-2">
          Message Sent!
        </h3>
        <p className="text-neutral-500 text-sm max-w-sm mb-6">
          Thank you for reaching out. Our design team will get back to you
          within 24 hours.
        </p>
        <button
          onClick={() => setSubmitted(false)}
          className="text-sm font-medium text-gold-600 hover:text-gold-700 transition-colors"
        >
          Send another message
        </button>
      </motion.div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label className="block text-xs font-medium text-neutral-600 mb-2 uppercase tracking-wide">
            Full Name
          </label>
          <input
            {...register("name")}
            type="text"
            placeholder="Your name"
            className="w-full px-4 py-3 rounded-xl border border-neutral-200 text-sm focus:outline-none focus:ring-2 focus:ring-gold-400/50 focus:border-gold-400 transition-all"
          />
          {errors.name && (
            <p className="text-red-500 text-xs mt-1.5">{errors.name.message}</p>
          )}
        </div>

        <div>
          <label className="block text-xs font-medium text-neutral-600 mb-2 uppercase tracking-wide">
            Phone Number
          </label>
          <input
            {...register("phone")}
            type="tel"
            placeholder="+91 00000 00000"
            className="w-full px-4 py-3 rounded-xl border border-neutral-200 text-sm focus:outline-none focus:ring-2 focus:ring-gold-400/50 focus:border-gold-400 transition-all"
          />
          {errors.phone && (
            <p className="text-red-500 text-xs mt-1.5">{errors.phone.message}</p>
          )}
        </div>
      </div>

      <div>
        <label className="block text-xs font-medium text-neutral-600 mb-2 uppercase tracking-wide">
          Email Address
        </label>
        <input
          {...register("email")}
          type="email"
          placeholder="you@example.com"
          className="w-full px-4 py-3 rounded-xl border border-neutral-200 text-sm focus:outline-none focus:ring-2 focus:ring-gold-400/50 focus:border-gold-400 transition-all"
        />
        {errors.email && (
          <p className="text-red-500 text-xs mt-1.5">{errors.email.message}</p>
        )}
      </div>

      <div>
        <label className="block text-xs font-medium text-neutral-600 mb-2 uppercase tracking-wide">
          Project Type
        </label>
        <select
          {...register("projectType")}
          defaultValue=""
          className="w-full px-4 py-3 rounded-xl border border-neutral-200 text-sm focus:outline-none focus:ring-2 focus:ring-gold-400/50 focus:border-gold-400 transition-all bg-white"
        >
          <option value="" disabled>
            Select project type
          </option>
          {PROJECT_TYPES.map((type) => (
            <option key={type} value={type}>
              {type}
            </option>
          ))}
        </select>
        {errors.projectType && (
          <p className="text-red-500 text-xs mt-1.5">{errors.projectType.message}</p>
        )}
      </div>

      <div>
        <label className="block text-xs font-medium text-neutral-600 mb-2 uppercase tracking-wide">
          Your Message
        </label>
        <textarea
          {...register("message")}
          rows={5}
          placeholder="Tell us about your space and vision..."
          className="w-full px-4 py-3 rounded-xl border border-neutral-200 text-sm focus:outline-none focus:ring-2 focus:ring-gold-400/50 focus:border-gold-400 transition-all resize-none"
        />
        {errors.message && (
          <p className="text-red-500 text-xs mt-1.5">{errors.message.message}</p>
        )}
      </div>

      <button
        type="submit"
        disabled={submitting}
        className="group w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-3.5 rounded-full bg-neutral-900 text-white text-sm font-medium tracking-wide hover:bg-gold-500 transition-all duration-400 disabled:opacity-60 disabled:cursor-not-allowed"
      >
        {submitting ? "Sending..." : "Send Message"}
        {!submitting && (
          <Send
            size={15}
            className="group-hover:translate-x-1 transition-transform duration-300"
          />
        )}
      </button>
    </form>
  );
}