import Image from "next/image";
import Link from "next/link";
import { ReactNode } from "react";

type ContactInfoItemProps = {
  icon?: ReactNode;
  iconSrc?: string;
  text: string;
  href?: string;
  hrefType?: "tel" | "mailto" | "url";
  isExternal?: boolean;
};

export default function ContactInfoItem({
  icon,
  iconSrc,
  text,
  href,
  hrefType = "url",
  isExternal = false,
}: ContactInfoItemProps) {
  // Construct the correct href value
  const hrefValue =
    hrefType === "tel"
      ? `tel:${href}`
      : hrefType === "mailto"
        ? `mailto:${href}`
        : href;

  const target = isExternal ? "_blank" : undefined;
  const rel = isExternal ? "noopener noreferrer" : undefined;

  const content = (
    <div className="flex items-start gap-2 text-left text-sm text-gray-500 transition hover:text-gray-700 lg:text-base">
      {iconSrc ? (
        <Image
          src={iconSrc}
          alt={text + " icon"}
          width={24}
          height={24}
          className="object-contain"
        />
      ) : (
        icon && <span className="text-h-purple-800">{icon}</span>
      )}
      <span>{text}</span>
    </div>
  );

  return href ? (
    <Link href={hrefValue as string} target={target} rel={rel}>
      {content}
    </Link>
  ) : (
    content
  );
}
