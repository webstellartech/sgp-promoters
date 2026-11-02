import PropertiesPageHeader from "../components/PropertiesPageHeader";
import PropertiesList from "../components/PropertiesList";
import SEO from "../components/SEO";

export default function PropertiesPage() {
  return (
    <>
      <SEO
        title="Bank Auction Properties in Coimbatore | SGP Promoters"
        description="Explore residential, commercial and industrial bank auction properties and NPA property opportunities with SGP Promoters."
        path="/properties"
      />
      <PropertiesPageHeader />
      <PropertiesList />
    </>
  );
}
