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
          path: 'user/:id',
          element: <UserDetails></UserDetails>,
          loader: async ( { params } ) => {
            return fetch( `http://59.152.62.177:8085/api/Employee/IndividualEmployeeData/${ params.id }` )
          }
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
