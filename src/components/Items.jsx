import { itemsData } from "../contants/indejx"

const Items = () => {
  return (
    <section className='w-full mb-52'>
    <div className='grid grid-col:1 w-full space-y-16 md:space-y-0 lg:w-5/6 lg:flex lg:space-x-5 mx-auto'>
      {itemsData.map((item, index) => (
        <div key={index} className="px-10 py-5 w-full mx-auto">
          <img src={item.imageSrc} alt={item.title} className='mx-auto' />
          <h2 className="text-center py-5 text-borraDeVino text-[25px] font-fredoka">{item.title}</h2>
          <p className="text-center">{item.description}</p>
        </div>
      ))}
    </div>
  </section>
  )
}

export default Items