import { createBrowserRouter, RouterProvider } from 'react-router'

import { loader as menuLoader } from './features/menu/loader'
import Home from './ui/Home'
import Menu from './features/menu/Menu'
import Cart from './features/cart/Cart'
import CreateOrder, {
  action as orderAction,
} from './features/order/CreateOrder'
import Order from './features/order/Order'
import AppLayout from './ui/AppLayout'
import Error from './ui/Error'

const router = createBrowserRouter([
  {
    element: <AppLayout />,
    errorElement: <Error />,

    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/menu',
        element: <Menu />,
        loader: menuLoader,
      },
      {
        path: '/cart',
        element: <Cart />,
      },
      {
        path: '/order/new',
        element: <CreateOrder />,
        action: orderAction,
      },
      {
        path: '/order/:id',
        element: <Order />,
        // loader: orderLoader,
        errorElement: <Error />,
      },
      {
        path: '*',
        element: <Error />,
      },
    ],
  },
])

export default function App() {
  return <RouterProvider router={router} />
}
