import { Navbar, Visitka } from "./components";
import { About, Contact, FAQs, Footer, FreightServices, Hero, Proces, Sender, Stronger, Team } from "./sections";

function App() {

  return (
    <>
      <Visitka/>
      <Navbar/>
      <Hero/>
      <Stronger/>
      <About/>
      <FreightServices/>
      <Sender/>
      <Proces/>
      <Team/>
      <FAQs/>
      <Contact/>
      <Footer/>
    </>
  );
}

export default App
