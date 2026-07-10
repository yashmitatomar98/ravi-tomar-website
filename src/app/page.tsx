import Hero from "@/components/hero/Hero";
import OpeningStatement from "@/components/story/OpeningStatement";
import Journey from "@/components/timeline/Journey";
import BuildingCRL from "@/components/building/BuildingCRL";
import Philosophy from "@/components/philosophy/Philosophy";
import Recognition from "@/components/recognition/Recognition";
import IndustryVoice from "@/components/media/IndustryVoice";
import LeadershipMoments from "@/components/gallery/LeadershipMoments";
import Press from "@/components/press/Press";
import PersonalLeadership from "@/components/personal/PersonalLeadership";
import Legacy from "@/components/legacy/Legacy";
import Journal from "@/components/journal/Journal";
import Contact from "@/components/contact/Contact";

export default function Home() {
  return (
    <>
      <Hero />
      <OpeningStatement />
      <Journey />
      <BuildingCRL />
      <Philosophy />
      <Recognition />
      <IndustryVoice />
      <LeadershipMoments />
      <Press />
      <PersonalLeadership />
      <Legacy />
      <Journal />
      <Contact />
    </>
  );
}
