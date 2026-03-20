import { formatCurrency } from '../../utils/helpers'

function OrderItem({ item, isLoadingIngredients, ingredients }) {
  const { quantity, name, totalPrice } = item

  return (
    <li className="py-3">
      <div className="flex cursor-pointer items-center justify-between gap-4 text-sm transition-opacity duration-300 ease-in-out hover:opacity-50">
        <p>
          <span className="font-bold">{quantity}&times;</span> {name}
        </p>
        <p className="font-bold">{formatCurrency(totalPrice)}</p>
      </div>
    </li>
  )
}

export default OrderItem
