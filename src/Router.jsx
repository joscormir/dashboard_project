import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { DashboardFatory } from './components/dashboard/DashboardFactory'
import { Layout } from './components/layout/Layout'
import { WidgetDetailFactory } from './components/detail/WidgetDetailFactory'
import { RouterMiddleware } from './RouterMiddleware'
import { ConfigFactory } from './components/config/ConfigFactory'
const router = createBrowserRouter([
  {
    path: '/',
    element: (
      <RouterMiddleware>
        <Layout />
      </RouterMiddleware>
    ),
    children: [
      {
        path: '/',
        element: <DashboardFatory />,
      },
      {
        path: 'repository/:owner/:name',
        element: WidgetDetailFactory.create(),
      },
      {
        path: '/config',
        element: <ConfigFactory />,
      },
    ],
  },
])

export function Router() {
  return <RouterProvider router={router} />
}
