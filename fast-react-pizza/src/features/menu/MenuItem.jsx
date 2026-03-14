import { formatCurrency } from '../../utils/helpers'
import Button from '../../ui/Button'

function MenuItem({ pizza }) {
  //   const { id, name, unitPrice, ingredients, soldOut, imageUrl } = pizza;

  const { name, unitPrice, ingredients, soldOut, imageUrl } = pizza

  return (
    <li className={`flex gap-4 py-2 ${soldOut ? ' opacity-70 grayscale' : ''}`}>
      <img src={imageUrl} alt={name} className="h-24 rounded-md" />
      <div className="flex grow flex-col py-0.5">
        <p className="font-medium">{name}</p>
        <p className="text-stone-500 capitalize italic">
          {ingredients.join(', ')}
        </p>
        <div className="mt-auto flex items-center justify-between text-sm">
          {!soldOut ? (
            <p>{formatCurrency(unitPrice)}</p>
          ) : (
            <p className="text-lg text-stone-500 uppercase">Sold out</p>
          )}

          <Button disabled={soldOut} type="small">
            Add to cart
          </Button>
        </div>
      </div>
    </li>
  )
}

export default MenuItem
