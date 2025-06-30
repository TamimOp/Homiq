import Approach from "@/components/Approach";
import Explore from "@/components/Explore";
import FAQ from "@/components/FAQ";
import Hero from "@/components/Hero";
import Location from "@/components/Location";
import Project from "@/components/Projects";
import Review from "@/components/Review";
import Stats from "@/components/Stats";
import WhyBest from "@/components/WhyBest";

export default function Home() {
  return (
    <main>
      <Hero />
      <Approach />
      <WhyBest />
      <Location />
      <Project />
      <FAQ />
      <Stats />
      <Review />
      <Explore />
    </main>
  );
}
