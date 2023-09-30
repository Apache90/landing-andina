import React from 'react'
import ItemsFooter from './ItemsFooter'
import SocialIcon from './SocialIcon'

function Footer() {
    return (
        <footer className='mt-20'>
            {/* <div className='md:flex md:justify-between md:items-center sm:px-12 px-4 bg-orange-500 py-7'>
                <h1 className='lg:text-4xl text-3xl md:mb-0 mb-6 lg:leading-normal font-semibold md:w-2/4 text-center md:text-left'>
                    Para mas <span className='text-borraDeVino'>informacion</span> comercial dejanos tu numero y nos comunicamos con vos!
                </h1>
                <div>
                    <input
                        type="text"
                        placeholder='Ingrese su número de Teléfono'
                        className='text-gray-800 w-full mb-2 md:mb-0 md:w-72 py-2.5 rounded px-2 focus:outline-none'
                    />
                    <button className='bg-borraDeVino hover:bg-white hover:text-borraDeVino duration-300 px-5 py-2.5 font-[Poppins] rounded-md text-white md:w-auto w-full md:mx-2 mx-0'>
                        Enviar
                    </button>
                </div>
            </div> */}
            <ItemsFooter />
            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 text-center pt-2 text-orange-500 text-sm pb-4'>
                <span>© 2023 SoftFusion. All rights reserved.</span>
                <span>Terms · Privacy Policy</span>
                <SocialIcon/>
            </div>
        </footer>
    )
}
export default Footer