import { Link } from 'react-router'

export default function Button({ children, disabled, to, type }) {
  const base =
    'text-sm inline-block rounded-full bg-yellow-500 font-semibold tracking-widest text-stone-700 uppercase transition-colors duration-300 ease-in-out hover:cursor-pointer focus:ring focus:ring-yellow-400 focus:ring-offset-2 focus:outline-none disabled:cursor-not-allowed hover:bg-yellow-400'

  const styles = {
    primary: base + ' px-3 py-2 md:px-4 md:py-3',
    small: base + ' py-1 px-2 md:px-3 md:py-2 text-xs',
    secondary:
      'text-sm inline-block rounded-full font-semibold tracking-widest text-stone-700 uppercase transition-colors duration-300 ease-in-out hover:cursor-pointer focus:ring focus:ring-stone-400 focus:ring-offset-2 focus:outline-none border-2 border-stone-400 disabled:cursor-not-allowed px-2.5 py-1.5 md:px-4.5 md:py-3 hover:bg-stone-200',
  }

  if (to)
    return (
      <Link to={to} className={`${styles[type]} hover:bg-yellow-400`}>
        {children}
      </Link>
    )

  return (
    <button
      disabled={disabled}
      className={`${styles[type]} ${!disabled ? 'hover:bg-none' : ''}`}
    >
      {children}
    </button>
  )
}
