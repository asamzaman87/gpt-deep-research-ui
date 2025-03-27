import { ThemeContextProvider } from "@/components/context/theme-context";

import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <title>GPT Deep Research</title>
        <meta
          name="description"
          content="Unlock In-Depth AI Research Instantly with ChatGPT-Powered Insights"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />

        <link
          rel="apple-touch-icon"
          sizes="240x240"
          href="/apple-touch-icon.png"
        />

        <link rel="icon" href="/favicon.ico" sizes="96x96" />
        <link
          rel="apple-touch-icon"
          href="/apple-touch-icon.png"
          type="image/png"
          sizes="48x48"
        />
      </head>
      <body suppressHydrationWarning className={inter.className}>
        <ThemeContextProvider>{children}</ThemeContextProvider>
      </body>
    </html>
  );
}
