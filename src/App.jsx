import { Navbar, Visitka } from "./components";
import {
  About,
  Contact,
  FAQs,
  Footer,
  FreightServices,
  Hero,
  Proces,
  Stronger,
  TruckTypes,
} from "./sections";

function App() {
  return (
    <>
      <Visitka />
      <Navbar />
      <Hero />
      <Stronger />
      <About />
      <FreightServices />
      <Proces />
      <TruckTypes />
      <FAQs />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
