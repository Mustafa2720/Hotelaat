import Card from "@/components/Cards";
import Hero from "@/components/Hero";
import { HotelaatBtn } from "@/components/utils/HotelaatBtn";
import IconBox from "@/components/utils/IconBox";
import Image from "next/image";
import StatsSection from "@/components/Stats";
import RotatingText from "@/components/RotatingText";

export default function HomePage() {
  return (
    <main>
      <Hero
        title=<>
          Travel Solutions For <br />
        </>
        accentTitle={<RotatingText />}
        description=<>
          Leveraging Deep industry expertise to drive <br /> seamless bookings
          and business growth.
        </>
        imgSrc="/assets/home/hero-img.png"
        imgWidth={500}
        imgHeight={250}
        btnText="Join us"
        btnVariant="fill"
        btnRounded
        btnHref="/"
        imgAlt="Travel Booking Platform"
      />

      <section className="mx-auto min-h-150 max-w-[1440px] space-y-8 px-4 pt-14 text-center">
        <h2 className="text-h-purple-800 text-2xl font-semibold lg:text-4xl">
          Who We Serve
        </h2>
        <div className="border-b-h-purple-800 grid items-center justify-center gap-12 border-b-1 px-4 py-14 text-center lg:grid-cols-2 lg:gap-8">
          <div className="before:h-3xl flex flex-col items-center justify-center gap-4 text-center">
            <Image
              src="/assets/home/browser-img.png"
              alt="borwser"
              width={288}
              height={267}
            />
            <span className="text-h-orange-500 text-lg font-normal lg:text-xl">
              For B2B Companies & OTAs
            </span>
            <h2 className="text-2xl font-semibold text-black lg:text-4xl">
              Seamless Integration <br /> & Reliable Inventory
            </h2>
            <p className="max-w-[500px] text-sm text-black lg:text-base">
              Speed, competitive pricing, and availability are key. Hotelaat
              provides cutting-edge solutions for both cache-based and real-time
              inventory search and booking.
            </p>
            <HotelaatBtn variant="outlined" hasIcon rounded className="mt-6">
              Get Started
            </HotelaatBtn>
          </div>
          <div className="flex flex-col items-center justify-center gap-4 text-center">
            <Image
              src="/assets/home/sales-img.png"
              alt="borwser"
              width={254}
              height={267}
            />
            <span className="text-h-orange-500 text-lg font-normal lg:text-xl">
              For Hoteliers
            </span>
            <h2 className="text-2xl font-semibold text-black lg:text-4xl">
              Boost Your Sales & <br /> Maximize Your Revenue
            </h2>
            <p className="max-w-[500px] text-sm text-black lg:text-base">
              Tailored sales solutions to help hoteliers optimize revenue across
              traditional and online channels, offering full control over hotel
              room distribution and profitability.
            </p>
            <HotelaatBtn variant="outlined" hasIcon rounded className="mt-6">
              Partner With Us
            </HotelaatBtn>
          </div>
        </div>
      </section>

      <section className="mx-auto min-h-150 max-w-[1440px] space-y-8 px-4 py-14 text-center">
        <Card
          imageSrc="/assets/home/booking-img.png"
          imageAlt="Booking Platform"
          imgHeight={370}
          imgWidth={377}
          eyebrow="Travel Agent Portal"
          title="A Powerful Booking Platform for Travel Agents"
          imagePosition="right"
          iconBoxes={
            <>
              <IconBox
                iconSrc="/assets/home/coin-icon.svg"
                title="Multi-Currency & Flexible Payments"
                description="Choose your preferred payment method."
              />
              <IconBox
                iconSrc="/assets/home/software-icon.svg"
                title="Smart Sales Tools"
                description="AI-powered workflow optimizations."
              />
              <IconBox
                iconSrc="/assets/home/target-icon.svg"
                title="Tailored to Your Needs"
                description="Custom-branded portals for large travel agencies."
              />
            </>
          }
          button={
            <HotelaatBtn variant="outlined" rounded hasIcon>
              Sign Up
            </HotelaatBtn>
          }
        />

        <Card
          imageSrc="/assets/home/api-img.png"
          imageAlt="API Integration"
          imgHeight={312}
          imgWidth={503}
          eyebrow="Hotelaat API (Technology & Integration)"
          title="Global Inventory with a Single API Connection"
          imagePosition="left"
          iconBoxes={
            <>
              <IconBox
                iconSrc="/assets/home/world-icon.svg"
                title="Global Inventory"
                description="Over 955,811 hotels across 200+ countries."
              />
              <IconBox
                iconSrc="/assets/home/target-icon.svg"
                title="Fast & Easy Integration"
                description="Developer-friendly API with a record 1-day integration time."
              />
              <IconBox
                iconSrc="/assets/home/wrench-icon.svg"
                title="Adaptable & Versatile"
                description="Modular and flexible API that fits any system."
              />
            </>
          }
          button={
            <HotelaatBtn variant="outlined" rounded hasIcon>
              Request API Access
            </HotelaatBtn>
          }
        />

        <Card
          imageSrc="/assets/home/ux-img.png"
          imageAlt="Custom Travel Website"
          imgHeight={410}
          imgWidth={410}
          eyebrow="Custom Travel Website (For Agencies & Startups)"
          title="Launch Your Travel Website - Fast & Hassle-Free"
          imagePosition="right"
          iconBoxes={
            <>
              <IconBox
                iconSrc="/assets/home/pointer-icon.svg"
                title="Intuitive UI/UX"
                description="User-friendly booking experiences across all platforms."
              />
              <IconBox
                iconSrc="/assets/home/bolt-icon.svg"
                title="Launch at Lightning Speed"
                description="Fully branded, ready-to-use booking websites."
              />
              <IconBox
                iconSrc="/assets/home/star-purple-icon.svg"
                title="Data-Driven Insights"
                description="Customer behavior analytics to optimize your sales."
              />
            </>
          }
          button={
            <HotelaatBtn variant="outlined" rounded hasIcon>
              Build Your Travel Website
            </HotelaatBtn>
          }
        />

        <Card
          imageSrc="/assets/home/phone-img.png"
          imageAlt="Super Apps API"
          imgHeight={365}
          imgWidth={390}
          eyebrow="Super Apps API"
          title="Own the Customer Journey, Retain, and Monetize"
          imagePosition="left"
          iconBoxes={
            <>
              <IconBox
                iconSrc="/assets/home/bank-icon.svg"
                title="Banks & Fintech Solutions"
                description="Encourage users to save and monetize their travel spending."
              />
              <IconBox
                iconSrc="/assets/home/ribbon-icon.svg"
                title="Loyalty Programs & Credit Cards"
                description="Attract new customers with exclusive travel discounts."
              />
              <IconBox
                iconSrc="/assets/home/repeat-arrows-icon.svg"
                title="Seamless Integration"
                description="Unlocking new revenue streams."
              />
            </>
          }
          button={
            <HotelaatBtn variant="outlined" rounded hasIcon>
              Integrate Now
            </HotelaatBtn>
          }
        />
      </section>

      <section className="px-4">
        <StatsSection />
      </section>
    </main>
  );
}
