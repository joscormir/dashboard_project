import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { DashboardFatory } from './components/DashboardFactory'
import {WidgetDetail} from './components/detail/WidgetDetail'

const router = createBrowserRouter([
  {
    path: '/',
    element: DashboardFatory.create(),
  },
  {
    path: 'repository/:organization/:name',
    element: <WidgetDetail />
  },
])

export function Router() {
  return <RouterProvider router={router} />
}
