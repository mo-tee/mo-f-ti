"use client";

import { Suspense } from "react";
import { LoginContent } from "@/components/login";

const Login = () => {
  return (
    <Suspense>
      <LoginContent />
    </Suspense>
  );
};

export default Login;
