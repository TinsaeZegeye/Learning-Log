import Button from '../../ui/Button'
import { formatCurrency } from '../../utils/helpers'

function CartItem({ item }) {
  const { name, quantity, totalPrice } = item

  return (
    <li className="py-3 sm:flex sm:items-center sm:justify-between">
      <p className="mb-1 text-lg">
        {quantity}&times; {name}
      </p>
      <div className="flex items-center justify-between gap-6">
        <p className="text-xs font-bold italic">{formatCurrency(totalPrice)}</p>
        <Button type="small">Delete</Button>
      </div>
    </li>
  )
}

export default CartItem
