import TestimonialsHeader from "../components/TestimonialsHeader";
import Testimonial from "../components/Testimonial";
import SEO from "../components/SEO";

export default function Testimonials() {
  return (
    <>
      <SEO
        title="Client Testimonials | SGP Promoters"
        description="Read client experiences and testimonials about SGP Promoters' property and financial services."
        path="/testimonials"
      />
      <TestimonialsHeader />
      <Testimonial />
    </>
  );
}
