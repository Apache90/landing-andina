import React from 'react';
import fondo from '../../images/tarta.jpg';

function Recipes2() {
    return (
        <div className='flex items-center justify-center mb-2'>

            {/* Card */}
            <div className='relative w-full sm:w-[320px] md:w-[480px] lg:w-[640px] h-[400px] flex flex-col justify-between'>
                {/* Imagen */}
                <div className='relative w-full h-[240px] rounded-2xl before:absolute before:bottom-0 before:left-1/2 before:w-[25px] before:h-[25px] before:bg-transparent before:rounded-full before:shadow-before after:absolute after:bottom-[70px] after:left-0 after:w-[25px] after:h-[25px] after:bg-transparent after:rounded-full after:shadow-after ' style={{ backgroundImage: `url(${fondo})`, backgroundSize: 'cover' }}>

                </div>
                {/* container */}
                <div className='relative w-full h-[150px] bg-borraDeVino rounded-2xl rounded-tl-none'>
                    <span className='absolute left-0 w-1/2 h-[80px] -top-[80px] bg-borraDeVino border-t-[10px] border-r-[10px] border-white rounded-tr-[25px] before:absolute before:w-[25px] before:h-[25px] before:bg-transparent before:rounded-full before:shadow-before2 after:absolute after:bottom-0 after:-right-[25px] after:w-[25px] after:h-[25px] after:bg-transparent after:rounded-full after:shadow-after2'>
                        <a href="#" className='relative bg-orange-500 py-2 px-4 m-3 block rounded-lg font-medium text-center text-white transform hover:scale-105 transition-transform'>VER MAS</a>
                    </span>
                    <div className="bg-borraDeVino p-4 rounded-2xl rounded-tl-none">
                        <h1 className="text-2xl lg:text-3xl xl:text-2xl font-bold mb-2 text-white">Torta de la abuela</h1>
                        <p className="text-white">Es un postre de origen italiano que puedes hacer siguiendo los pasos que te muestro en esta receta.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Recipes2;
