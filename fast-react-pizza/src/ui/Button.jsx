import { Link } from 'react-router'

export default function Button({ children, disabled, to, type }) {
  const base =
    'text-sm inline-block rounded-full bg-yellow-500 font-semibold tracking-widest text-stone-700 uppercase transition-colors duration-300 ease-in-out hover:cursor-pointer focus:ring focus:ring-yellow-400 focus:ring-offset-2 focus:outline-none disabled:cursor-not-allowed hover:bg-yellow-400'

  const styles = {
    primary: base + ' px-4 py-3 md:px-5 md:py-4',
    small: base + ' py-2 px-3 md:px-4 md:py-3 text-xs',
    secondary:
      'text-sm inline-block rounded-full font-semibold tracking-widest text-stone-700 uppercase transition-colors duration-300 ease-in-out hover:cursor-pointer focus:ring focus:ring-stone-400 focus:ring-offset-2 focus:outline-none border-2 border-stone-400 disabled:cursor-not-allowed px-3.5 py-2.5 md:px-5.5 md:py-4 hover:bg-stone-200',
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
