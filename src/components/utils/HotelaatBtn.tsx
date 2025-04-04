import { cn } from "@/lib/utils";
import { ButtonHTMLAttributes, forwardRef } from "react";
import { Button } from "../ui/button";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

interface HotelaatBtnProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "outlined" | "fill";
  rounded?: boolean;
  hasIcon?: boolean;
  href?: string;
}

const HotelaatBtn = forwardRef<HTMLButtonElement, HotelaatBtnProps>(
  (
    {
      className,
      variant = "fill",
      rounded = false,
      hasIcon = false,
      href,
      children,
      ...props
    },
    ref,
  ) => {
    const baseClasses =
      "lg:px-[22px] lg:py-[18px] font-medium transition-colors disabled:opacity-50";

    const variantClasses =
      variant === "fill"
        ? "bg-h-purple-800 text-white hover:bg-purple-950"
        : "border border-h-purple-800 text-h-purple-800 hover:border-h-orange-500 hover:text-h-orange-500 bg-transparent hover:bg-transparent";

    const shapeClasses = rounded ? "rounded-full" : "rounded-md";

    const iconWrapperClasses = hasIcon ? "group flex items-center gap-2" : "";

    const ButtonContent = (
      <>
        {children}
        {hasIcon && (
          <ArrowRight className="h-4 w-4 stroke-[3] transition-transform duration-200 group-hover:translate-x-0.5" />
        )}
      </>
    );

    if (href) {
      return (
        <Button
          asChild
          className={cn(
            baseClasses,
            variantClasses,
            shapeClasses,
            iconWrapperClasses,
            className,
          )}
          {...props}
        >
          <Link href={href}>{ButtonContent}</Link>
        </Button>
      );
    }

    return (
      <Button
        ref={ref}
        className={cn(
          baseClasses,
          variantClasses,
          shapeClasses,
          iconWrapperClasses,
          className,
        )}
        {...props}
      >
        {ButtonContent}
      </Button>
    );
  },
);

HotelaatBtn.displayName = "HotelaatBtn";

export { HotelaatBtn };
