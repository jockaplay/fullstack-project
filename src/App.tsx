import './App.css'
import Card from './components/Card'
import Login from './Routes/Login'
import SignUp from './Routes/SignUp'
import { createBrowserRouter, RouterProvider } from "react-router-dom"

function App() {

  const routes = createBrowserRouter([{path:"/", element:<Login/>},{path:"/new-account", element:<SignUp/>}])

  return (
      <Card>
        <RouterProvider router={routes} />
      </Card>
  )
}

export default App
