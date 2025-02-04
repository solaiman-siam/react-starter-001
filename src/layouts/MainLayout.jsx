import { Outlet } from "react-router"



function MainLayout() {
  return (
    <div className="font-poppins">
      <nav>
        Navbar
      </nav>
       <Outlet/>
    </div>
  )
}

export default MainLayout