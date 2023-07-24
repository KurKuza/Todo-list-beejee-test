import { LoginPage } from '@/pages/login'
import { MainPage } from '@/pages/main'
import TasksList from '@/pages/tasks-list'
import { createBrowserRouter } from 'react-router-dom'
import { baseLayout } from './layouts/baseLayout'

export const appRouter = () =>
  createBrowserRouter([
    {
      element: baseLayout,
      errorElement: <div>error</div>,
      children: [
        {
          path: '/login',
          element: <LoginPage />,
        },
      ],
    },
    {
      element: baseLayout,
      errorElement: <div>error</div>,
      children: [
        {
          path: '/',
          element: <TasksList />,
        },
      ],
    },
  ])
