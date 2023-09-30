import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Footer from "./components/Footer/Footer";
import Recipes from "./components/Recipes";
import WhatsappBut from "./components/WhatsappBut";
import Carrusel from "./components/Carrusel";
import Items from "./components/Items";

const App = () => {
  return (

    <div>
      <Navbar />
      <Hero />
      <Carrusel />
      <Items />
      <Recipes />
      <WhatsappBut />
      <Footer />
    </div>

  );
};

export default App;
