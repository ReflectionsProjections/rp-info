// src/routes/Home.tsx
import { ExhibitSection } from '../pages/Home/ExhibitSection'
import { Header } from '../pages/Home/Header'
import { Stats } from '../pages/Home/Stats'
import { TeamSection } from '../pages/Home/TeamSection'
import { SponsorSection } from '../pages/Home/SponsorSection'
import { Footer } from '../pages/Home/Footer'

export const Home = () => {
  return (
    <>
      <Header />
      <Stats />
      <ExhibitSection />
      <TeamSection />
      <SponsorSection />
      <Footer />
    </>
  );
};
