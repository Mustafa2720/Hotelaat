import Image from "next/image";
import { ReactNode } from "react";

type IconBoxProps = {
  icon?: ReactNode;
  iconSrc?: string;
  title: string;
  description: string;
};

export default function IconBox({
  icon,
  iconSrc,
  title,
  description,
}: IconBoxProps) {
  return (
    <div className="flex items-start gap-2 text-left lg:gap-4">
      <div className="bg-h-purple-100 flex max-h-9 max-w-9 items-center justify-center rounded-full p-3 lg:max-h-12 lg:max-w-12 lg:p-4">
        {iconSrc ? (
          <Image src={iconSrc} alt={title} width={24} height={24} />
        ) : (
          icon
        )}
      </div>
      <div>
        <h3 className="text-lg font-semibold text-gray-900 lg:text-xl">
          {title}
        </h3>
        <p className="text-sm text-gray-500">{description}</p>
      </div>
    </div>
  );
}
