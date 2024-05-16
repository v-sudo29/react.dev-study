import { Outlet } from "react-router-dom"
import Header from "./header/Header"

const ContentLayout = () => {
  return (
    <>
      <Header />
      <Outlet />
    </>
  )
}

export default ContentLayout