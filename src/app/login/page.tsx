import LoginPage from "@/components/LoginContent";
import { Suspense } from "react";

export default function LoginPageWrapper() {
  return (
    <Suspense
      fallback={
        <div className="flex h-screen items-center justify-center">
          Loading...
        </div>
      }
    >
      <LoginPage />
    </Suspense>
  );
}
