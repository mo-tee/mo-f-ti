import {
  Provider,
  QueryClientProvider,
  StyledComponentsProvider,
} from "@/providers";
import type { Metadata } from "next";
import Head from "next/head";

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
      <Head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no"
        />
      </Head>
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
