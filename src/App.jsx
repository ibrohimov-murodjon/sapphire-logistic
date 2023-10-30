import { Navbar, Visitka } from "./components";
import { About, FAQs, Footer, FreightServices, Hero, Proces, Sender, Stronger, Team } from "./sections";

function App() {

  return (
    <>
      <Visitka/>
      <Navbar/>
      <Hero/>
      <Stronger/>
      <About/>
      <Team/>
      <Sender/>
      <Proces/>
      <FreightServices/>
      <FAQs/>
      <Footer/>
    </>
  );
}

export default App
