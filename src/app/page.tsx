import { Hero } from "@/components/Hero";
import { Features } from "@/components/Features";
import { ServicesList } from "@/components/ServicesList";
import { Steps } from "@/components/Steps";
import { CTA } from "@/components/CTA";
import { ContactForm } from "@/components/ContactForm";

export default function Home() {
  return (
    <>
      <Hero />
      <Features />
      <ServicesList />
      <Steps />
      <CTA />
      <ContactForm />
    </>
  );
}
