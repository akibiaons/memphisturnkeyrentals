"use client";
import Hero from "@/components/contact-components/Hero";
import { ContactForm } from "@/components/contact-components/form/contact-form";
import { Separator } from "@/components/ui/separator";
import ContactCards from "@/components/contact-components/ContactCards";
import React, { useMemo } from "react";

export default function ConctactPage() {
  // https://www.youtube.com/watch?v=tki4ktdQEKs&t=374s tutorial
  return (
    <div>
      {/* Contact for user to get in touch with company representatives */}
      <div>
        <Hero />
        <div>
          <Separator />
          <section className="my-20 mx-auto px-3">
            <div className="max-w-5xl mx-auto text-center mb-8">
              <h2 className="text-4xl lg:text-6xl font-semibold">Contact Us</h2>
              <p>
                Any questions? Concerns can be answered by our market experts
                based in Memphis!
              </p>
            </div>
            <ContactForm />
          </section>
          <Separator />
          <div className="mt-10 mb-10">
            <ContactCards />
          </div>
        </div>
      </div>
    </div>
  );
}
