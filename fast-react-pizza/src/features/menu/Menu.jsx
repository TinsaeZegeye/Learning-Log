import { useLoaderData } from 'react-router'

import MenuItem from './MenuItem'
import Loader from '../../ui/Loader'

export default function Menu() {
  const menu = useLoaderData()

  return (
    <ul className="divide-y-2 divide-stone-400 px-4 py-2">
      {menu.map((pizza) => (
        <MenuItem pizza={pizza} key={pizza.id} />
      ))}
    </ul>
  )
}
