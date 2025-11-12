import "@/app/globals.css";
import MainBanner from "@/components/MainBanner";
import SocialBanner from "@/components/SocialBanner";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col">
        <MainBanner />
        {/* Page content */}
        <div className="flex-grow">{children}</div>

        {/* Footer social banner */}
        <SocialBanner />
      </body>
    </html>
  );
}

