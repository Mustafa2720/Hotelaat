"use client";

import { useRef } from "react";

export function useBotProtection() {
  const timestamp = useRef<number>(Date.now());

  const validate = (formData: FormData): boolean => {
    const filledHoneypot = formData.get("company");
    const timeElapsed = Date.now() - timestamp.current;

    if (filledHoneypot) {
      console.warn("🛑 Bot detected: filled honeypot");
      return false;
    }

    if (timeElapsed < 2000) {
      console.warn("🛑 Bot detected: submitted too quickly");
      return false;
    }

    return true;
  };

  return { validate };
}
