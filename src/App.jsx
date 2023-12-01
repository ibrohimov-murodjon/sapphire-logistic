import { useState } from "react";
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
  const [page, setPage ] = useState(false)
  setTimeout(() => {
        setPage(true)
  }, 3000);
  return (
    <>
      <div className={`${!page ? 'flex' : 'hidden' } text-black justify-center items-center h-screen w-full bg-slate-600`}>
      <div class="loader-wrapper">
<div class="truck-wrapper">
  <div class="truck">
    <div class="truck-container"></div>
    <div class="glases"></div>
    <div class="bonet"></div>

    <div class="base"></div>

    <div class="base-aux"></div>
    <div class="wheel-back"></div>
    <div class="wheel-front"></div>

    <div class="smoke"></div>
  </div>
</div>
</div>
      </div>
      { page &&
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
      }
    </>
  );
}

export default App;
