import Funcionamento from './pages/Funcionamento.jsx'
import Inicio from './pages/Inicio.jsx'
import Referencias from './pages/Referencias.jsx'
import SobreNos from './pages/SobreNos.jsx'

import { createBrowserRouter, RouterProvider } from 'react-router-dom'
const router = createBrowserRouter([
{
  path: "/",
  element: <Inicio/>
},

{
  path: "/inicio",
  element: <Inicio/>
},

{
  path: "/funcionamento",
  element: <Funcionamento/>
},

{
  path: "/referencias",
  element: <Referencias/>
},

{
  path: "/sobrenos",
  element: <SobreNos/>
},

])

export default function App() {
  return (
    <RouterProvider router={router}/>
)
}
