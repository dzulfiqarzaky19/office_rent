import type { Metadata } from "next";
import "./globals.css";
import { WorkspaceProvider } from "@/context/workspace-context";

export const metadata: Metadata = {
  title: "monis.rent — Design Your Dream Workspace in Bali",
  description:
    "Build your perfect office setup visually and rent premium desks, chairs, monitors, and accessories in Bali. Delivered to your door by monis.rent.",
  keywords: ["workspace", "rent", "Bali", "office", "desk", "chair", "monitor", "digital nomad"],
  openGraph: {
    title: "monis.rent — Design Your Dream Workspace in Bali",
    description: "Build your perfect office setup visually and rent it in Bali.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Outfit:wght@400;500;600;700;800&display=swap" rel="stylesheet" />
      </head>
      <body className="antialiased">
        <WorkspaceProvider>
          {children}
        </WorkspaceProvider>
      </body>
    </html>
  );
}
