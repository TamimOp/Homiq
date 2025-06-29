import Approach from "@/components/Approach";
import Hero from "@/components/Hero";
import Location from "@/components/Location";
import Project from "@/components/Projects";
import WhyBest from "@/components/WhyBest";

export default function Home() {
  return (
    <main>
      <Hero />
      <Approach />
      <WhyBest />
      <Location />
      <Project />
    </main>
  );
}
