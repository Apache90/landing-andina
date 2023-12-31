import React from 'react'

const ItemsF = ({ Links, title }) => {
  return (
    <ul className='sm:mx-auto md:mx-auto lg:mx-auto'>
      <h1 className='mb-1 font-semibold'>{title}</h1>
      {
        Links.map((link) => (
          <li key={link.name}>
            <a className='text-orange-500 hover:text-borraDeVino duration-300 text-sm cursor-pointer leading-6' href={link.link}>{link.name}</a>
          </li>
        ))
      }
    </ul>
  )
}

export default ItemsF