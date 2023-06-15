import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import './App.css'

import Home from './pages/Home'
import UserDetails from './pages/UserDetails'
import HomeTabs from './components/Tabs'


// routes
const routes = createBrowserRouter( [
  {
    path: '/',
    element: <Home></Home>,
    children:
      [
        {
          path: '/',
          element: <HomeTabs></HomeTabs>

        },
        {
          path: '/user',
          element: <UserDetails></UserDetails>
        }
      ]
  }

] )



function App () {


  return (
    <div>
      <RouterProvider router={ routes }></RouterProvider>
    </div>
  )
}

export default App
