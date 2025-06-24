"use client";

import { GlobalStyle } from "@/components/desgin-system";
import { ReactNode } from "react";
import { RecoilRoot } from "recoil";
import { OverlayProvider } from "@toss/use-overlay";

interface ProviderProps {
  children: ReactNode;
}

const Provider = ({ children }: ProviderProps) => {
  return (
    <RecoilRoot>
      <OverlayProvider>
        <GlobalStyle />
        {children}
      </OverlayProvider>
    </RecoilRoot>
  );
};

export default Provider;
