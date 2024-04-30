import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { DashboardFatory } from './components/DashboardFactory'
import { Layout } from './components/layout/Layout'
import { WidgetDetailFactory } from './components/detail/WidgetDetailFactory'

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
        element:WidgetDetailFactory.create(),
      },
    ],
  },
])

export function Router() {
  return <RouterProvider router={router} />
}
