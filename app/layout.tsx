import type { Metadata } from "next";
import { Funnel_Display } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from 'next-themes'
import Providers from "@/providers/providers";

const funnelDisplay = Funnel_Display({
  variable: "--font-funnel-display",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Ali Hamza Mashooq",
    template: "%s | Ali Hamza Mashooq",
  },
  description:
    "Portfolio of Ali Hamza Mashooq — software engineer with experience in Next.js, MERN, Firebase, Artificial Intelligence and more.",
  keywords: [
    "Ali Hamza",
    "Ali Hamza Mashooq",
    "Ali Hamza Portfolio",
    "Software Engineer",
    "Web Developer",
    "Frontend Developer",
    "Backend Developer",
    "Next.js Developer",
    "MERN Stack Developer",
    "Full Stack Developer",
    "Firebase Developer",
    "Portfolio",
    "Generative AI",
    "React Developer",
    "Node.js Developer",
    "JavaScript Developer",
    "TypeScript Developer",
    "Python Developer",
  ],
  authors: [{ name: "Ali Hamza Mashooq" }],
  creator: "Ali Hamza Mashooq",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <meta name="theme-color" content="#ffffff" />
      </head>

      <body className={`${funnelDisplay.variable} dark:bg-zinc-900 antialiased`}>

        <ThemeProvider attribute='class' defaultTheme='system' enableSystem>
          <Providers>{children}</Providers>
        </ThemeProvider>

      </body>
    </html>
  );
}
