import Hero from "@/components/Hero";
import Image from "next/image";

export default function AboutPage() {
  return (
    <main>
      <Hero
        title="Founded in the UAE"
        description="Hotelaat is committed to expanding its range of travel products and strengthening its market presence through global partnerships."
        imgSrc="/assets/about/about-hero-img.png"
        imgWidth={354}
        imgHeight={354}
        imgAlt="About us"
        btnText="Learn More"
        btnVariant="fill"
        btnRounded
        btnHref="#"
      />
      <section className="px-4">
        <div className="bg-h-purple-800 relative mx-auto my-10 flex w-full flex-col gap-4 space-y-8 overflow-hidden rounded-2xl px-4 py-8 text-center text-white md:px-12 md:py-12 lg:my-30 lg:min-h-[112px] lg:max-w-[1440px] lg:gap-9 lg:px-18 lg:py-18">
          <div className="flex flex-col gap-4 text-left lg:max-w-[609px]">
            <h2 className="text-h-orange-400 text-2xl font-semibold md:text-3xl lg:text-4xl">
              Expansion & Vision
            </h2>
            <p className="text-white md:text-lg lg:text-xl">
              We welcome collaborations with partners across various industries
              to drive growth and innovation.
            </p>
          </div>
          <Image
            src="/assets/about/arrows-img.png"
            alt=""
            width={384}
            height={221}
            className="absolute right-18 bottom-0 z-10 hidden lg:block"
          />
        </div>
      </section>
    </main>
  );
}
