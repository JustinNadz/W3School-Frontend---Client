import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { AntdRegistry } from "@ant-design/nextjs-registry";
import { ConfigProvider, theme as antdTheme } from "antd";
import AIAssistant from "@/components/ai-assistant";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "W3Schools Clone - HTML & CSS Learning",
  description: "Interactive HTML & CSS tutorials with AI assistant",
  viewport: "width=device-width, initial-scale=1, maximum-scale=5",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen w-full overflow-x-hidden`}>
        <AntdRegistry>
          <ConfigProvider
            theme={{
              token: {
                colorPrimary: "#9929EA",
                colorInfo: "#9929EA",
                colorSuccess: "#00AA6C",
                colorWarning: "#FAEB92",
                colorError: "#ff4d4f",
                borderRadius: 8,
              },
              algorithm: antdTheme.defaultAlgorithm,
            }}
          >
            {children}
            <AIAssistant />
          </ConfigProvider>
        </AntdRegistry>
      </body>
    </html>
  );
}
