import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Footer from "./components/Footer/Footer";
import Recipes from "./components/Recipes/Recipes";
import WhatsappBut from "./components/WhatsappBut";
import Carrusel from "./components/Carrusel";
import Items from "./components/Items";
import Contact from "./components/Contact";
import FondoAndina from "./components/FondoAndina";

const App = () => {
  return (

    <div>
      <Navbar />
      <Hero />
      <Carrusel />
      <Items />
      <FondoAndina/>
      <Recipes />
      <WhatsappBut />
      <Contact />
      <Footer />
    </div>

  );
};

export default App;
