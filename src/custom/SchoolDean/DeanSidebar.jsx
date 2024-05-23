import { LayoutDashboard, ListMinus, ListPlus, LogOutIcon, LucideSplitSquareVertical, SchoolIcon, UserPlus } from "lucide-react";
import { useNavigate } from "react-router-dom";

function DeanSidebar() {
    const navigateTo = useNavigate()
  return (
    <>
      <div className="relative flex h-full w-full max-w-[20rem] flex-col rounded-xl bg-white bg-clip-border p-4 text-gray-700 ">
        <div className="p-4 mb-2 pr-5">
          <h5 className="block font-sans text-black text-sm md:text-[35px] antialiased font-bold leading-snug tracking-normal text-blue-gray-900">
            iMAP <span className="text-black text-[10px] md:text-[15px]">(dean/bursar)</span>
          </h5>
        </div>
        <nav className="flex min-w-[20px] md:min-w-[190px] flex-col gap-1 p-2 font-sans text-base font-normal text-blue-gray-700">
          <div
            onClick={()=> navigateTo("/dashboard")}
            role="button"
            className="flex items-center w-[10px] md:w-full p-3 leading-tight transition-all rounded-lg outline-none text-start hover:bg-gray-100 hover:text-gray-900 focus:bg-blue-gray-50 focus:bg-opacity-80 focus:text-blue-gray-900 active:bg-blue-gray-50 active:bg-opacity-80 active:text-blue-gray-900"
          >
            <div className="grid mr-4 place-items-center">
              <LayoutDashboard size={17}/>
            </div>
            <span className="hidden md:inline text-[15px]"> School Dashboard</span>
          </div>
          <div
            onClick={()=> navigateTo("/create-school")}
            role="button"
            className="flex items-center w-[10px] md:w-full p-3 leading-tight transition-all rounded-lg outline-none text-start hover:bg-gray-100 hover:text-gray-900 focus:bg-blue-gray-50 focus:bg-opacity-80 focus:text-blue-gray-900 active:bg-blue-gray-50 active:bg-opacity-80 active:text-blue-gray-900"
          >
            <div className="grid mr-4 place-items-center">
              <SchoolIcon size={17}/>
            </div>
            <span className="hidden md:inline text-[15px]">Create School</span>
          </div>
          <div
            role="button"
            onClick={()=> navigateTo("/create-school-deans")}
            className="flex items-center w-[10px] md:w-full p-3 leading-tight transition-all rounded-lg outline-none text-start hover:bg-gray-100 hover:text-gray-900 focus:bg-blue-gray-50 focus:bg-opacity-80 focus:text-blue-gray-900 active:bg-blue-gray-50 active:bg-opacity-80 active:text-blue-gray-900"
          >
            <div className="grid mr-4 place-items-center">
              <UserPlus size={17}/>
            </div>
            <span className="hidden md:inline text-[15px]">School Deans</span>
          </div>
          <div
            onClick={()=> navigateTo("/create-form-one-limit")}
            role="button"
            className="flex items-center w-[10px] md:w-full p-3 leading-tight transition-all rounded-lg outline-none text-start hover:bg-gray-100 hover:text-gray-900 focus:bg-blue-gray-50 focus:bg-opacity-80 focus:text-blue-gray-900 active:bg-blue-gray-50 active:bg-opacity-80 active:text-blue-gray-900"
          >
            <div className="flex mr-4 place-items-center">
              <ListMinus size={17}/>
            </div>
            <span className="hidden md:inline text-[15px]">Form One Limits</span>
          </div>
          <div
            onClick={()=> navigateTo("/create-form-five-limit")}
            role="button"
            className="flex items-center w-[10px] md:w-full p-3 leading-tight transition-all rounded-lg outline-none text-start hover:bg-gray-100 hover:text-gray-900 focus:bg-blue-gray-50 focus:bg-opacity-80 focus:text-blue-gray-900 active:bg-blue-gray-50 active:bg-opacity-80 active:text-blue-gray-900"
          >
            <div className="flex mr-4 place-items-center">
              <ListPlus size={17}/>
            </div>
            <span className="hidden md:inline text-[15px]">A{"'"} Level Limits</span>
          </div>
          <div
            onClick={()=> navigateTo("/create-category")}
            role="button"
            className="flex items-center w-[10px] md:w-full p-3 leading-tight transition-all rounded-lg outline-none text-start hover:bg-gray-100 hover:text-gray-900 focus:bg-blue-gray-50 focus:bg-opacity-80 focus:text-blue-gray-900 active:bg-blue-gray-50 active:bg-opacity-80 active:text-blue-gray-900"
          >
            <div className="flex mr-4 place-items-center">
              <LucideSplitSquareVertical size={17}/>
            </div>
            <span className="hidden md:inline text-[15px]">A{"'"} Level Category</span>
          </div>
          <div
            role="button"
            className="flex items-center w-[10px] md:w-full p-3 leading-tight transition-all rounded-lg outline-none text-start hover:bg-gray-100 hover:text-gray-900 focus:bg-blue-gray-50 focus:bg-opacity-80 focus:text-blue-gray-900 active:bg-blue-gray-50 active:bg-opacity-80 active:text-blue-gray-900"
          >
            <div className="grid mr-4 place-items-center">
              <LogOutIcon size={17}/>
            </div>
            <span className="hidden md:inline text-[15px]">Log Out</span>
          </div>
        </nav>
      </div>
    </>
  );
}

export default DeanSidebar;