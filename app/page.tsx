import About from "@/sections/About";
import AuthBrands from "@/sections/AuthBrands";
import Contact from "@/sections/Contact";
import Faqs from "@/sections/Faqs";
import Header from "@/sections/Header";
import Services from "@/sections/Services";


export default function Home() {
  return (
    <>
      <Header/>
      <Services/>
      <About/>
      <Faqs/>
      <Contact/>
      <AuthBrands/>
    </>
  );
}
