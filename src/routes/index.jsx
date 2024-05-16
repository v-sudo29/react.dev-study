import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider
} from "react-router-dom";

const Home = () => {
  return <div>Home</div>
}

const router = createBrowserRouter(
createRoutesFromElements(
  <Route path='/' element={<Home />}>
  </Route>
)
)

 export const AppRoutes = () => {
  return (
    <RouterProvider router={router}/>
  )
 } 