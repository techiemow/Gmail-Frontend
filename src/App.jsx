import { createBrowserRouter, createRoutesFromElements, Navigate, Route, RouterProvider } from "react-router-dom"
import Navbar from "./components/Navbar"
import { routes } from "./Routes/routes"
import Errorpage from "./extras/Errorpage"
import Loading from "./extras/Loading"
import { Suspense } from "react"




const router=createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route path={routes.home.path} element={<Navigate to={`${routes.emails.path}/inbox`}/>}/>
      <Route path={routes.home.path} element={<routes.home.element/>}>
      <Route path={`${routes.emails.path}/:type`} element={<routes.emails.element/>} errorElement={<Errorpage/>}/>
      <Route path={routes.view.path} element={<routes.view.element/>} errorElement={<Errorpage/>}/>      
      </Route>
<Route path={routes.invalid.path} element={<Navigate to={`${routes.emails.path}/inbox`}/>}/>
    </Route>

  )
)
function App() {


  return (
    <Suspense fallback={<Loading/>}>
   
    <RouterProvider router={router}/>

    </Suspense>
  )
}

export default App
