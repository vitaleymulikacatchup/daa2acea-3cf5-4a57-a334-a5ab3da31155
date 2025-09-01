import type { Metadata } from "next";
import { SiteThemeProvider } from '@/components/sections/ThemeProvider';
import NavbarBase from '@/components/navigation/NavbarBase';

export const metadata: Metadata = {
  title: "MemeCoinPlay",
  description: "Create a playful, single-page landing that explains MemeCoinPlay and guides visitors on how to participate."
};

export default function RootLayout({ children }: { children: React.ReactNode; }) {
  return (
    <html lang="en">
      <body className="antialiased">
        <SiteThemeProvider theme={{ styleVariant: 'funAndTrendy', colorTemplate: 1, textAnimation: 'slide' }}>
          <NavbarBase
            logoSrc="/images/logo.svg"
            logoAlt="MemeCoinPlay Logo"
            brand="MemeCoinPlay"
            links={["#hero", "#about", "#how-to-buy", "#tokenomics", "#footer"]}
            sticky={true}
            ctaLabel="Join the Community"
          />
          {children}
        </SiteThemeProvider>
      </body>
    </html>
  );
}