"use client";

import { GlobalStyle } from "@/components/common";
import { ReactNode } from "react";
import { RecoilRoot } from "recoil";

interface ProviderProps {
  children: ReactNode;
}

const Provider = ({ children }: ProviderProps) => {
  return (
    <RecoilRoot>
      <GlobalStyle />
      {children}
    </RecoilRoot>
  );
};

export default Provider;
