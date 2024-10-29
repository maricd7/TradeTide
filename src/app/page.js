//root page rendering component
import LandingHero from "./components/LandingHero/LandingHero";
import Nav from "./components/Nav/Nav";

export default function Home() {
  return (
    <>
      <Nav />
      <LandingHero />
    </>
  );
}
