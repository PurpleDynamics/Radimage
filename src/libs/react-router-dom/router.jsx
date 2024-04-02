import { createBrowserRouter } from 'react-router-dom'
import { Backdrop } from '../../component'
import { Gallery } from '../../pages'
import Home from '../../pages/home'

export const Router = createBrowserRouter([
  {
    path: '/',
    element: <Backdrop />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/gallery',
        element: <Gallery />,
      },
    ],
  },
])
