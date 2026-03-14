import Button from '../../ui/Button'
import ButtonLink from '../../ui/ButtonLink'
import CartItem from './CartItem'

const fakeCart = [
  {
    pizzaId: 12,
    name: 'Mediterranean',
    quantity: 2,
    unitPrice: 16,
    totalPrice: 32,
  },
  {
    pizzaId: 6,
    name: 'Vegetale',
    quantity: 1,
    unitPrice: 13,
    totalPrice: 13,
  },
  {
    pizzaId: 11,
    name: 'Spinach and Mushroom',
    quantity: 1,
    unitPrice: 15,
    totalPrice: 15,
  },
]

function Cart() {
  const cart = fakeCart

  return (
    <div className="m-4">
      <ButtonLink to="/menu">&larr; Back to menu</ButtonLink>

      <h2 className="mt-6 mb-3 text-xl font-bold">Your cart, %NAME%</h2>

      <ul className="my-3 divide-y divide-stone-400 border-b border-stone-400">
        {cart.map((item) => (
          <CartItem item={item} key={item.pizzaId} />
        ))}
      </ul>

      <div className="flex justify-center gap-6">
        <Button type="primary" to="/order/new">
          Order Pizzas
        </Button>
        <Button type="secondary">Clear cart</Button>
      </div>
    </div>
  )
}

export default Cart
