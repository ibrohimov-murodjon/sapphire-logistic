import { Navbar, Visitka } from "./components";
import {
  About,
  Contact,
  FAQs,
  Footer,
  FreightServices,
  Hero,
  Proces,
  Sender,
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
      <Sender />
      <Proces />
      <TruckTypes />
      <FAQs />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
