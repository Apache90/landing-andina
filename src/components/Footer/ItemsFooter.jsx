import ItemsF from "./ItemsF"
import { PRODUCTS, RESOURCES, COMPANY, SUPPORT } from "./Menu"

const ItemsFooter = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-4 gap-6 sm:px-8 px-5 py-16 ">
      <ItemsF Links={PRODUCTS} title="PRODUCTS" />
      <ItemsF Links={RESOURCES} title="RESOURCES" />
      <ItemsF Links={COMPANY} title="COMPANY" />
      <ItemsF Links={SUPPORT} title="SUPPORT" />
    </div>
  )
}

export default ItemsFooter