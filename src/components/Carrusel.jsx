import React, { useState, useEffect } from "react";
import { carrusel1, carrusel2, carrusel3, carrusel4, carrusel5 } from "../images";

const Carrusel = () => {
  const images = [carrusel1, carrusel2, carrusel3, carrusel4, carrusel5];
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000);

    return () => {
      clearInterval(timer);
    };
  }, []);
  
  return (
    <section className="flex flex-col mt-56 lg:mb-20 w-5/6 mx-auto pt-10 pb-40 lg:flex-row lg:space-x-10">
      <div className="w-full md:w-1/2 md:mx-auto">
      <h1 className="text-4xl font-bold text-borraDeVino">¿Quienes somos?</h1>
        <p className="pt-5 text-[17px]">
          En el corazón de nuestro compromiso con la excelencia y la dulzura se encuentra nuestra fábrica de azúcar, un lugar donde la tradición se fusiona con la creatividad. Aquí, la caña de azúcar se transforma en pequeñas joyas de dulzura que añaden un toque mágico a tu vida diaria. Nuestra fábrica es un crisol de maestría y precisión, donde cada grano de azúcar es cuidadosamente creado para ofrecer la máxima calidad y sabor. Además, somos amantes de la innovación, siempre buscando nuevas formas de sorprenderte con deliciosas experiencias de sabor. Y no olvidemos nuestra fuerte conexión con la comunidad y el compromiso con la sostenibilidad, valores que hacen que nuestro azúcar sea aún más dulce. Cada producto que sale de nuestra fábrica es una expresión de nuestro amor por lo dulce y nuestra pasión por convertir los momentos cotidianos en deliciosas experiencias.
        </p>
      </div>
      <div className="w-full pt-14 lg:p-0 bg-center sm:pt-14 md:w-1/2 lg:w-1/2 lg:mx-auto md:mx-auto flex items-center justify-center">
        <div id="default-carousel" className="relative w-full" data-carousel="slide">
          <div className="relative h-60 sm:h-60 overflow-hidden rounded-lg md:h-96">
            {images.map((image, index) => (
              <div
                key={index}
                className="absolute w-full h-full top-0 left-0 opacity-0 transition-opacity duration-1000 ease-in-out"
                style={{ opacity: index === currentImageIndex ? 1 : 0 }}
              >
                <img
                  src={image}
                  className="w-full h-full object-cover"
                  alt="..."
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Carrusel;
