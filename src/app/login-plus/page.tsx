import LoginPlusPage from "@/components/LoginPlusContent";
import { Suspense } from "react";

export default function LoginPagePlusWrapper() {
  return (
    <Suspense
      fallback={
        <div className="flex h-screen items-center justify-center">
          Loading...
        </div>
      }
    >
      <LoginPlusPage />
    </Suspense>
  );
}
