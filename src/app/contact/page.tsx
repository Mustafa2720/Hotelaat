"use client";

import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import ContactInfoItem from "@/components/utils/ContactInfoItem";
import { HotelaatBtn } from "@/components/utils/HotelaatBtn";
import { Mail, MapPin } from "lucide-react";
import Image from "next/image";

export default function ContactPage() {
  return (
    <main className="py-32">
      <section className="mx-auto grid min-h-150 max-w-[1440px] grid-cols-1 items-center gap-8 px-4 pt-32 text-center lg:grid-cols-2 lg:text-left">
        {/* Left: Contact Form */}
        <div className="space-y-4 self-center">
          <h1 className="text-primary mb-9 text-4xl font-semibold lg:text-5xl">
            Let’s Connect
          </h1>
          <div>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                // TODO: integrate with form service (e.g. Formspree, Resend, etc.)
              }}
              className="flex w-full flex-col gap-4 space-y-4 md:gap-3 lg:w-[488px]"
            >
              {/* Name Fields */}
              <div className="m-0 flex flex-col gap-4 md:flex-row md:gap-3">
                <div className="w-full">
                  <label
                    htmlFor="firstName"
                    className="mb-2.5 block text-left text-sm font-medium text-gray-950"
                  >
                    First Name
                  </label>
                  <Input
                    id="firstName"
                    name="firstName"
                    type="text"
                    placeholder="First Name"
                    className="focus-visible:ring-h-purple-300 min-h-6 w-full border-gray-200 px-5 py-4 text-sm shadow-sm placeholder:text-gray-400 lg:text-base"
                    required
                  />
                </div>

                <div className="w-full">
                  <label
                    htmlFor="lastName"
                    className="mb-2.5 block text-left text-sm font-medium text-gray-950"
                  >
                    Last Name
                  </label>
                  <Input
                    id="lastName"
                    name="lastName"
                    type="text"
                    placeholder="Last Name"
                    className="focus-visible:ring-h-purple-300 min-h-6 w-full border-gray-200 px-5 py-4 text-sm shadow-sm placeholder:text-gray-400 lg:text-base"
                    required
                  />
                </div>
              </div>

              {/* Email Field */}
              <div className="m-0 w-full">
                <label
                  htmlFor="email"
                  className="mb-2.5 block text-left text-sm font-medium text-gray-950"
                >
                  Email
                </label>
                <Input
                  id="email"
                  name="email"
                  type="text"
                  placeholder="you@company.com"
                  className="focus-visible:ring-h-purple-300 min-h-6 w-full border-gray-200 px-5 py-4 text-sm shadow-sm placeholder:text-gray-400 lg:text-base"
                  required
                />
              </div>

              {/* Message Field */}
              <div className="m-0 w-full">
                <label
                  htmlFor="message"
                  className="mb-2.5 block text-left text-sm font-medium text-gray-950"
                >
                  Message
                </label>
                <Textarea
                  id="message"
                  name="message"
                  placeholder="Write your message"
                  className="focus-visible:ring-h-purple-300 max-h-37 min-h-37 w-full resize-none border-gray-200 px-5 py-4 text-sm shadow-sm placeholder:text-gray-400 lg:text-base"
                  required
                />
              </div>

              {/* Submit Button */}
              <HotelaatBtn
                type="submit"
                variant="fill"
                className="shadow-[rgba(99, 51, 166, 0.14)] mt-5 cursor-pointer shadow-lg"
              >
                Send
              </HotelaatBtn>
            </form>
          </div>
          {/* Contact Info */}
          <div className="mt-8 flex flex-col gap-4 text-sm text-gray-600 lg:w-[488px] lg:flex-row">
            <ContactInfoItem
              icon={
                <>
                  <Mail size={24} />
                </>
              }
              text="info@hotelaat.com"
              hrefType="mailto"
              href="info@hotelaat.com"
              isExternal={true}
            />

            <ContactInfoItem
              icon={
                <>
                  <MapPin size={24} />
                </>
              }
              text="Office 1415 Parklane Tower, Business Bay – Dubai – UAE"
              hrefType="url"
              href="https://maps.app.goo.gl/jY9MVkTj65a9qwtQA"
              isExternal={true}
            />
          </div>

          {/* Right: Illustration */}
        </div>
        <div className="hidden justify-center self-end lg:flex">
          <Image
            src="/assets/contact/contact-hero-img.png"
            alt="Contact Us"
            width={540}
            height={469}
          />
        </div>
      </section>
    </main>
  );
}
