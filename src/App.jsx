import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Footer from "./components/Footer/Footer";

import Recipes from "./components/Recipes";

import WhatsappBut from "./components/WhatsappBut";


const App = () => {
  return (
    
    <div>
      <Navbar/>
      <Hero />

      <Recipes/>

      <WhatsappBut/>

      <Footer />
    </div>
    
  );
};

export default App;
