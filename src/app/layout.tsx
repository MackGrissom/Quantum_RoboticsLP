import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const jetbrains = JetBrains_Mono({
  variable: "--font-jetbrains",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Quantum | Post-Quantum Encryption",
  description:
    "Enterprise post-quantum cryptography solutions. NIST-standardized lattice-based encryption, digital signatures, and PQC migration services.",
  keywords: [
    "post-quantum cryptography",
    "PQC",
    "lattice-based encryption",
    "CRYSTALS-Kyber",
    "quantum-safe",
    "NIST standards",
  ],
  openGraph: {
    title: "Quantum | Post-Quantum Encryption",
    description: "Secure your infrastructure against quantum threats.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${inter.variable} ${jetbrains.variable} antialiased scan-line-overlay`}
      >
        {children}
      </body>
    </html>
  );
}
