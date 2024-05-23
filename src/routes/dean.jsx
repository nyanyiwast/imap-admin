import { Outlet } from "react-router-dom"
import DeanSidebar from "../custom/SchoolDean/DeanSidebar"

export default function DeanRoot() {
  return (
    <>
      <div className="flex h-screen">
      {/* Sidebar/Navbar */}
      <div className="w-[10px] md:w-1/6 mr-10">
        {/* Sidebar content goes here */}
        <DeanSidebar />
      </div>
      {/* Main Content */}
      <div className="flex-grow p-5">
        {/* Content of the page */}
        <Outlet />
      </div>
      {/* <div id="footer" className="flex-shrink-0 py-4 text-center text-[14px]">
          <p>
            Developed with ❤️ by <span className="text-blue-600">Sedrick_Tha_Dev</span> © {year}
          </p>
        </div> */}
    </div>
    </>
  )
}
