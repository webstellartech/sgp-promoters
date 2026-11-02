import ServicesHeader from "../components/ServicesHeader";
import AllServices from "../components/AllServices";
import WhyChooseServices from "../components/WhyChooseServices";
import ServicesOverview from "../components/ServicesOverview";
import SEO from "../components/SEO";

export default function Services() {
  return (
    <>
      <SEO
        title="Property Consultancy, Loans & DRA Services | SGP Promoters"
        description="Discover bank NPA property services, bank loans, property consultancy, finance and investment solutions and Debt Recovery Agency services."
        path="/services"
      />
      <ServicesHeader />
      <ServicesOverview />
      <AllServices />
      <WhyChooseServices />
    </>
  );
}