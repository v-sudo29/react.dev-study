import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider
} from "react-router-dom";
import Home from "./home/Home";
import ContentLayout from "@/components/layouts/ContentLayout";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route element={<ContentLayout />}>
      <Route path='/' element={<Home />}/>
    </Route>
  )
)

 export const AppRoutes = () => {
  return (
    <RouterProvider router={router}/>
  )
 } 