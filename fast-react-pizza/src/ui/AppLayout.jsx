import { Outlet, useNavigation } from 'react-router'
import Header from './Header'
import CartOverview from '../features/cart/CartOverview'
import Loader from './Loader'

export default function AppLayout() {
  const navigation = useNavigation()
  const isLoading = navigation.state === 'loading'

  return (
    <div className="grid h-screen grid-rows-[auto_1fr_auto]">
      {isLoading && <Loader />}

      <Header />

      <main className="no-scrollbar overflow-y-scroll">
        <Outlet />
      </main>

      <CartOverview />
    </div>
  )
}
