use client
import SplitHero from '@/components/sections/layouts/hero/SplitHero';
import CtaAbout from '@/components/sections/layouts/about/CtaAbout';
import HowToBuy3D from '@/components/sections/layouts/howtobuy/3DHTB';
import PatternTokenomics from '@/components/sections/layouts/tokenomics/PatternTokenomics';
import FooterLogo from '@/components/footer/FooterLogo';

export default function Home() {
  return (
    <>
      <SplitHero
        title="MemeCoinPlay: The Fun Token for the Internet"
        subtitle="A lighthearted memecoin built for community vibes, meme culture, and playful moments online."
        primaryButtonText="Learn How to Buy"
        onPrimaryButtonClick={() => window.location.hash = "#how-to-buy"}
      />
      <CtaAbout
        title="What is MemeCoinPlay?"
        descriptions={[
          "MemeCoinPlay is a community-driven memecoin designed for fun, simple participation, and welcoming vibes across the internet.",
          "This page provides a quick, friendly overview to help new visitors understand MEME, join the fun, and get involved with the community."
        ]}
      />
      <HowToBuy3D
        title="How to Buy MEME"
        steps={[
          { title: "Step 1: Prepare a wallet", description: "Set up a crypto wallet and secure your keys. This is where MEME will live.", position: "left", image: "/images/wallet-icon.png", isCenter: false },
          { title: "Step 2: Get MEME from an exchange", description: "Buy MEME from supported exchanges or trading venues you trust.", position: "right", image: "/images/exchange-icon.png", isCenter: false },
          { title: "Step 3: Store MEME in your wallet", description: "Transfer MEME to your wallet and keep it safe.", position: "left", image: "/images/wallet-secure-icon.png", isCenter: false }
        ]}
      />
      <PatternTokenomics
        title="Tokenomics"
        description="MemeCoinPlay uses a light, transparent approach to tokenomics to encourage participation and community growth while keeping the experience fun."
        kpiItems={[
          { value: "1,000,000,000 MEME", description: "Total Supply", icon: { type: 'LucideIcon', name: 'Coins' } },
          { value: "500,000 MEME", description: "Liquidity", icon: { type: 'LucideIcon', name: 'Liquidity' } },
          { value: "2% per transaction", description: "Community Rewards", icon: { type: 'LucideIcon', name: 'Reward' } },
          { value: "3%", description: "Marketing & Growth", icon: { type: 'LucideIcon', name: 'Growth' } },
          { value: "0.5% per transaction", description: "Burn Rate", icon: { type: 'LucideIcon', name: 'Burn' } }
        ]}
      />
      <FooterLogo
        logoSrc="/images/logo.svg"
        logoAlt="MemeCoinPlay Logo"
        logoText="MemeCoinPlay"
        columns={[
          { title: "About", items: [
            { label: "What is MEME?", onClick: () => {} },
            { label: "How to buy MEME", onClick: () => {} },
            { label: "Community Guidelines", onClick: () => {} }
          ]},
          { title: "Resources", items: [
            { label: "Privacy Policy", onClick: () => {} },
            { label: "Terms of Service", onClick: () => {} },
            { label: "FAQ", onClick: () => {} },
            { label: "Guide", onClick: () => {} }
          ]},
          { title: "Community", items: [
            { label: "Discord", onClick: () => {} },
            { label: "Twitter", onClick: () => {} },
            { label: "Telegram", onClick: () => {} }
          ]}
        ]}
        copyrightText="© 2025 MemeCoinPlay. All rights reserved."
        onPrivacyClick={() => {}}
      />
    </>
  );
}