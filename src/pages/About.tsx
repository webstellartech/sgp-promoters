import AboutHeader from "../components/AboutHeader";
import AboutLeader from "../components/AboutLeader";
import CompanyJourney from "../components/CompanyJourney";
import AboutStats from "../components/AboutStats";
import SEO from "../components/SEO";


export default function About() {
  return (
    <>
      <SEO
        title="About SGP Promoters | Property & Financial Services"
        description="Learn about SGP Promoters, its experience in bank auction properties, real estate consultancy and financial services."
        path="/about"
      />
      <AboutHeader />
      <AboutLeader />
      <CompanyJourney />
      <AboutStats />
    </>
  );
}