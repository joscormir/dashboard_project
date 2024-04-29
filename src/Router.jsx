import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { DashboardFatory } from './components/DashboardFactory'
import { WidgetDetail } from './components/detail/WidgetDetail'
import { Layout } from './components/layout/Layout'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        path: '/',
        element: DashboardFatory.create(),
      },
      {
        path: 'repository/:organization/:name',
        element: <WidgetDetail />,
      },
    ],
  },
])

export function Router() {
  return <RouterProvider router={router} />
}
