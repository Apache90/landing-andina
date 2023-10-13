import React from 'react';
import imagenFondo from '../assets/andinacaña.png';

function FondoAndina() {
  const estiloDeFondo = {
    backgroundImage: `url(${imagenFondo})`,
    backgroundSize: '130%',
  };

  return (
    <div className='bg-cover bg-fixed bg-no-repeat h-64 bg-center mb-20' style={estiloDeFondo}>
      
    </div>
  );
}

export default FondoAndina;
