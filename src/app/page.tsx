import About from "@/components/sections/About";
import Agenda from "@/components/sections/Agenda";
import Conference from "@/components/sections/Conference";
import Contact from "@/components/sections/Contact";
import Country from "@/components/sections/Country";
import Experience from "@/components/sections/Experience";
import Faq from "@/components/sections/Faq";
import Hero from "@/components/sections/Hero";
import Intro from "@/components/sections/Intro";
import Join from "@/components/sections/Join";
import News from "@/components/sections/News";
import Partners from "@/components/sections/Partners";
import People from "@/components/sections/People";
import Resources from "@/components/sections/Resources";
import { siteConfig } from "@/data/site";

/** 検索エンジン向けのイベント構造化データ */
const eventJsonLd = {
  "@context": "https://schema.org",
  "@type": "Event",
  name: siteConfig.nameJa,
  alternateName: siteConfig.editionEn,
  description:
    "各国代表として防災・災害リスク削減・国際協力について議論する、中高生・大学生向けのシミュレーション型国際会議。",
  startDate: "2027-03",
  eventStatus: "https://schema.org/EventScheduled",
  eventAttendanceMode: "https://schema.org/OfflineEventAttendanceMode",
  location: {
    "@type": "Place",
    name: "東京都",
    address: { "@type": "PostalAddress", addressLocality: "東京都", addressCountry: "JP" },
  },
  organizer: { "@type": "Organization", name: siteConfig.organizer, url: siteConfig.organizerUrl },
  url: siteConfig.url,
  image: `${siteConfig.url}/og.png`,
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(eventJsonLd) }}
      />
      <Hero />
      <Intro />
      <About />
      <Experience />
      <Conference />
      <Agenda />
      <Country />
      <Join />
      <People />
      <Partners />
      <News />
      <Resources />
      <Faq />
      <Contact />
    </>
  );
}
