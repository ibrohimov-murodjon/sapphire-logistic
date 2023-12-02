import { useState } from "react";
import { Navbar, Visitka } from "./components";
import {
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
      <div className="loader-wrapper">
<div className="truck-wrapper">
  <div className="truck">
    <div className="truck-container"></div>
    <div className="glases"></div>
    <div className="bonet"></div>

    <div className="base"></div>

    <div className="base-aux"></div>
    <div className="wheel-back"></div>
    <div className="wheel-front"></div>

    <div className="smoke"></div>
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
