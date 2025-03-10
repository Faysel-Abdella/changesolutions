import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title:
    "Change Hub Solutions — Business Transformation & Digital Innovation in Ethiopia",
  description:
    "Lead the change with Change Hub Solutions. We specialize in digital transformation, change management, data analytics, ERP solutions, and technology consulting to help Ethiopian businesses thrive. Partner with us to shape the future of your organization.",
  keywords: [
    "business transformation Ethiopia",
    "digital transformation Ethiopia",
    "change management Ethiopia",
    "ERP solutions Ethiopia",
    "technology consulting Ethiopia",
    "process automation Ethiopia",
    "business consulting Ethiopia",
    "data analytics Ethiopia",
    "emerging technology adoption",
    "enterprise resource planning Ethiopia",
    "IT consulting Ethiopia",
    "cloud integration Ethiopia",
    "business growth strategies",
    "AI and automation Ethiopia",
    "risk mitigation strategies",
    "customer experience improvement",
    "predictive analytics Ethiopia",
    "stakeholder engagement strategies",
    "innovation consulting Ethiopia",
    "cybersecurity solutions Ethiopia",
    "digital strategy consulting",
    "workflow optimization Ethiopia",
    "market intelligence Ethiopia",
    "technology-driven business growth",
    "business intelligence Ethiopia",
    "cloud computing for businesses",
    "business process reengineering",
    "smart business solutions Ethiopia",
    "Change Hub Solutions",
  ],
  authors: [
    {
      name: "Change Hub Solutions",
    },
  ],
  openGraph: {
    title: "Change Hub Solutions",
    description:
      "Strategize. Implement. Transform. Change Hub Solutions helps businesses in Ethiopia evolve through cutting-edge digital solutions and expert consulting.",
    type: "website",
    locale: "en_US",
    url: "https://www.changehubsolutions.com",
    siteName: "Change Hub Solutions",
    images: [
      {
        url: "/logo.svg",
        width: 800,
        height: 630,
        alt: "ChangeHubSolution Logo",
      },
    ],
  },
  alternates: {
    canonical: "https://www.changehubsolutions.com",
  },

  icons: {
    icon: "/logo.svg",
    shortcut: "/logo.svg",
    apple: "/logo.svg",
    other: {
      rel: "icon",
      url: "/logo.svg",
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth ">
      <body className="overflow-x-hidden m-0 p-0 w-full h-full">
        {children}
      </body>
    </html>
  );
}
