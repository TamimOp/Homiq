import Approach from "@/components/Approach";
import FAQ from "@/components/FAQ";
import Hero from "@/components/Hero";
import Location from "@/components/Location";
import Project from "@/components/Projects";
import Review from "@/components/Review";
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
      <Review />
    </main>
  );
}
