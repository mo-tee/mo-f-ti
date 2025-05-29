import {
  Provider,
  QueryClientProvider,
  StyledComponentsProvider,
} from "@/providers";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "모티",
  description: "목표를 통해 소비습관을 키우는 서비스",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <StyledComponentsProvider>
          <QueryClientProvider>
            <Provider>{children}</Provider>
          </QueryClientProvider>
        </StyledComponentsProvider>
      </body>
    </html>
  );
}
