"use client";

import { ReactNode } from "react";
import Image from "next/image";
import clsx from "clsx";

type CardProps = {
  imageSrc: string;
  imageAlt?: string;
  imagePosition?: "left" | "right";
  eyebrow?: string;
  title: string;
  description?: string;
  iconBoxes?: ReactNode;
  button?: ReactNode;
  imgWidth?: number;
  imgHeight?: number;
};

export default function Card({
  imageSrc,
  imageAlt = "",
  imagePosition = "right",
  eyebrow,
  title,
  description,
  iconBoxes,
  button,
  imgWidth = 500,
  imgHeight = 400,
}: CardProps) {
  const isImageLeft = imagePosition === "left";

  return (
    <div
      className={clsx(
        "mx-auto flex flex-col items-center gap-8 px-4 pt-9 text-center lg:flex-row lg:justify-between lg:px-10 lg:pt-20 lg:text-left",
        isImageLeft && "lg:flex-row-reverse",
      )}
    >
      {/* Left Side - Text */}
      <div className="flex flex-col items-center space-y-4 lg:max-w-[458px] lg:items-start lg:gap-6">
        <div className="flex flex-col gap-3.5 text-center lg:text-left">
          {eyebrow && (
            <span className="text-h-orange-500 text-lg font-normal lg:text-xl">
              {eyebrow}
            </span>
          )}
          <h2 className="text-2xl font-semibold text-gray-900">{title}</h2>
        </div>
        {description && <p className="text-gray-600">{description}</p>}
        {iconBoxes && <div className="space-y-4 lg:space-y-6">{iconBoxes}</div>}
        {button && <div className="pt-4">{button}</div>}
      </div>

      {/* Right Side - Image */}
      <div className="hidden w-fit lg:block">
        <Image
          src={imageSrc}
          alt={imageAlt}
          width={imgWidth}
          height={imgHeight}
          className="object-contain"
        />
      </div>
    </div>
  );
}
