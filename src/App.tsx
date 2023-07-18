import './App.css'
import Card from './components/Card'
import Login from './Routes/Login'
import Recovery from './Routes/Recovey'
import SignUp from './Routes/SignUp'
import { createBrowserRouter, RouterProvider } from "react-router-dom"

function App() {

  const routes = createBrowserRouter([
    {path:"/", element:<Login/>},
    {path:"/new-account", element:<SignUp/>},
    {path:"/recovey", element:<Recovery/>}
  ])

  return (
      <Card>
        <RouterProvider router={routes} />
      </Card>
  )
}

export default App
