import React from 'react'
import Recipes1 from './Recipes1'
import Recipes2 from './Recipes2'
import Recipes3 from './Recipes3'

function Recipes() {
    return (
        <div className='mt-20'>
            <h1 className="font-fredoka text-3xl sm:text-3xl md:text-4xl lg:text-5xl text-center">Ideas para Utilizar la Mejor Azúcar</h1>
            <div className="flex flex-wrap justify-center m-5 space-x-2 mt-20">
                <div className="w-full sm:w-1/2 lg:w-1/4 p-2 sm:mt-0 sm:mb-0">
                    <Recipes1 />
                </div>
                <div className="w-full sm:w-1/2 lg:w-1/4 p-2 sm:mt-0 sm:mb-0">
                    <Recipes2 />
                </div>
                <div className="w-full sm:w-1/2 lg:w-1/4 p-2 sm:mt-0 sm:mb-0">
                    <Recipes3 />
                </div>
            </div>
        </div>
    )
}

export default Recipes
