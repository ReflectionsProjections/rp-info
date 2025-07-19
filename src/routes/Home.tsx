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
      {/* <div style={{ position: 'absolute', left: "400px" }}>
        <div style={{ position: "fixed", left: "420px", width: "50%", height: "90%", background: "rgba(0, 0, 0, 0.4)", zIndex: 52 }} />
        <div style={{ position: "absolute", top: "1200px", width: "200px", height: "400px", background: "radial-gradient(rgba(255, 247, 229, 0.7) 60%, transparent 70%)", zIndex: 53, mixBlendMode: "overlay" }} />
      </div> */}
      <Header />
      <Stats />
      <ExhibitSection />
      <TeamSection />
      <SponsorSection />
      <Footer />
    </>
  );
};
