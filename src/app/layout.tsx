import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import "../styles/embla.css";
import { SidebarProvider, SidebarInset, SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/app-sidebar";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Separator } from "@/components/ui/separator";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL('https://twinkleface.com'),
  title: "TwinkleFace - AI-Powered Image Generation Platform",
  description: "Transform your photos into stunning visual styles with TwinkleFace. Choose from curated AI prompts for anime avatars, professional portraits, 3D headshots, and more. No prompt writing skills required.",
  keywords: "AI image generation, photo transformation, anime avatars, professional portraits, AI art, DALL-E, Stable Diffusion, photo editing, avatar creator",
  authors: [{ name: "TwinkleFace" }],
  creator: "TwinkleFace",
  publisher: "TwinkleFace",
  openGraph: {
    title: "TwinkleFace - AI-Powered Image Generation Platform",
    description: "Transform your photos into stunning visual styles using curated, pre-written prompts. Choose a style, upload your photo, and watch the magic happen.",
    url: "https://twinkleface.com",
    siteName: "TwinkleFace",
    type: "website",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "TwinkleFace - AI Image Generation Platform",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "TwinkleFace - AI-Powered Image Generation Platform",
    description: "Transform your photos into stunning visual styles using curated, pre-written prompts. Choose a style, upload your photo, and watch the magic happen.",
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  category: "technology",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">

      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >

        <SidebarProvider>
          <AppSidebar />
          <SidebarInset>
            <header className="flex h-16 shrink-0 items-center gap-2 transition-[width,height] ease-linear group-has-data-[collapsible=icon]/sidebar-wrapper:h-12">
              <div className="flex items-center gap-2 px-4">
                <SidebarTrigger className="-ml-1" />
                <Separator
                  orientation="vertical"
                  className="mr-2 data-[orientation=vertical]:h-4"
                />
                <Breadcrumb>
                  <BreadcrumbList>
                    <BreadcrumbItem className="hidden md:block">
                      <BreadcrumbLink href="/">
                        TwinkleFace
                      </BreadcrumbLink>
                    </BreadcrumbItem>
                    <BreadcrumbSeparator className="hidden md:block" />
                    <BreadcrumbItem>
                      <BreadcrumbPage>Dashboard</BreadcrumbPage>
                    </BreadcrumbItem>
                  </BreadcrumbList>
                </Breadcrumb>
              </div>
            </header>
            <div className="flex flex-1 flex-col gap-4 p-4 pt-0 overflow-hidden">
              {children}
            </div>
          </SidebarInset>
        </SidebarProvider >
      </body>

    </html>
  );
}
