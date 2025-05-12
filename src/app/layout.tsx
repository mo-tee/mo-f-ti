import type { Metadata } from "next";
import StyledComponentsProvider from "./providers/StyledComponentsProvider";
import QueryClientProvider from "./providers/QueryClientProvider";
import Provider from "./providers/Provider";

export const metadata: Metadata = {
  title: "모티",
  description: "목표를 위해 소비 습관을 개선과 목표 달성을 돕는 서비스",
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
