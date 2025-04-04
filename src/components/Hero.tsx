"use client";

import Image from "next/image";
import { HotelaatBtn } from "@/components/utils/HotelaatBtn";

type HeroProps = {
  title?: string | React.ReactNode | "Hero title";
  accentTitle?: string | React.ReactNode;
  description?: string | React.ReactNode | "Hero description";
  imgSrc?: string;
  imgWidth?: number;
  imgHeight?: number;
  imgAlt?: string;
  btnText?: string | "Join us";
  btnVariant?: "fill" | "outlined";
  btnRounded?: boolean;
  btnHasIcon?: boolean;
  btnHref?: string;
};

export default function Hero({
  title,
  accentTitle,
  description,
  imgSrc,
  imgWidth = 500,
  imgHeight = 250,
  imgAlt = "",
  btnText,
  btnVariant = "fill",
  btnRounded = true,
  btnHasIcon = false,
  btnHref = "/",
}: HeroProps) {
  return (
    <section className="border-b-h-purple-200 border-b-3">
      <div className="mx-auto grid min-h-150 max-w-[1440px] grid-cols-1 items-center gap-8 px-4 pt-32 text-center lg:grid-cols-2 lg:text-left">
        <div className="space-y-4 self-center">
          <h1 className="text-primary text-4xl font-semibold lg:text-5xl">
            {title}
            {accentTitle && (
              <span className="text-purple-800">{accentTitle}</span>
            )}
          </h1>
          <p className="text-muted-foreground mx-auto max-w-lg text-lg lg:mx-0">
            {description}
          </p>
          <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row lg:justify-start">
            <HotelaatBtn
              variant={btnVariant}
              href={btnHref}
              hasIcon={btnHasIcon}
              rounded={btnRounded}
            >
              {btnText}
            </HotelaatBtn>
          </div>
        </div>
        <div className="flex justify-center self-end">
          <Image
            src={imgSrc || "/assets/home/hero-img.png"}
            alt={imgAlt}
            width={imgWidth}
            height={imgHeight}
            className="object-contain"
            priority
          />
        </div>
      </div>
    </section>
  );
}
