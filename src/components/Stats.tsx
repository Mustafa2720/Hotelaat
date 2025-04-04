import AnimatedNumber from "@/components/utils/AnimatedNumber";
import Image from "next/image";

export default function StatsSection() {
  const stats = [
    {
      icon: "/assets/home/check-icon.svg",
      value: 388,
      label: "Direct Contracts",
    },
    {
      icon: "/assets/home/globe-icon.svg",
      value: 955811,
      label: "Property Worldwide",
    },
    {
      icon: "/assets/home/star-icon.svg",
      value: 164,
      label: "Property Exclusive Rates",
    },
  ];

  return (
    <div className="bg-h-purple-800 mx-auto flex max-w-2xl flex-col gap-4 space-y-8 rounded-2xl px-6 py-16 text-center text-white lg:max-w-[1440px] lg:gap-9">
      <span className="text-h-orange-500 text-lg font-normal uppercase lg:text-xl">
        Numbers That Matter
      </span>

      <div className="grid grid-cols-1 gap-10 lg:grid-cols-3 lg:gap-24 lg:px-14">
        {stats.map((stat, index) => (
          <div
            key={index}
            className="border-h-purple-200 relative flex flex-col items-center"
          >
            <Image
              src={stat.icon}
              alt={stat.label}
              width={36}
              height={36}
              className="mb-2"
            />

            <AnimatedNumber
              target={stat.value}
              prefix="+"
              className="text-3xl font-semibold lg:text-4xl"
            />

            <p className="mt-1 text-base font-normal lg:text-lg">
              {stat.label}
            </p>

            {index !== stats.length - 1 && (
              <>
                <div className="border-h-purprle-200 absolute top-1/2 right-[-1.5rem] hidden h-24 -translate-y-1/2 transform border-r sm:block" />
                <div className="border-h-purprle-200 mt-8 block w-2/3 border-b lg:hidden" />
              </>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
