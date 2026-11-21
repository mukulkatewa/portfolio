import type { Metadata } from "next";
import { ContactList } from "@/components/contact-list";

export const metadata: Metadata = {
  title: "Contact",
  description: "How to reach Mukul Katewa, with a link to the resume.",
};

export default function ContactPage() {
  return (
    <div className="max-w-2xl">
      <h1 className="text-[2.25rem] md:text-[2.5rem] leading-tight font-medium tracking-[-0.015em] text-heading mb-8">
        Contact
      </h1>
      <ContactList />
    </div>
  );
}
