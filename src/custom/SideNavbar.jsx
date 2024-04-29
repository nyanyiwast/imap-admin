import { BadgeDollarSign, BlocksIcon, CalendarCheck, LayoutDashboard, ListMinus, ListPlus, LogOutIcon, LucideSplitSquareVertical, Map, RecycleIcon, School2Icon, SchoolIcon, UserCheck2Icon, UserPlus } from "lucide-react";
import { useNavigate } from "react-router-dom";

function SideNavbar() {
    const navigateTo = useNavigate()
  return (
    <>
      <div className="relative flex h-full w-full max-w-[20rem] flex-col rounded-xl bg-white bg-clip-border p-4 text-gray-700 ">
        <div className="p-4 mb-2 pr-5">
          <h5 className="block font-sans text-sm md:text-[35px] antialiased font-bold leading-snug tracking-normal text-blue-gray-900">
            iMAP
          </h5>
        </div>
        <nav className="flex min-w-[20px] md:min-w-[190px] flex-col gap-1 p-2 font-sans text-base font-normal text-blue-gray-700">
          <div
            onClick={()=> navigateTo("/")}
            role="button"
            className="flex items-center w-[10px] md:w-full p-3 leading-tight transition-all rounded-lg outline-none text-start hover:bg-gray-100 hover:text-gray-900 focus:bg-blue-gray-50 focus:bg-opacity-80 focus:text-blue-gray-900 active:bg-blue-gray-50 active:bg-opacity-80 active:text-blue-gray-900"
          >
            <div className="grid mr-4 place-items-center">
              <LayoutDashboard size={17}/>
            </div>
            <span className="hidden md:inline text-[15px]">Dashboard</span>
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
            onClick={()=> navigateTo("/create-province")}
            role="button"
            className="flex items-center w-[10px] md:w-full p-3 leading-tight transition-all rounded-lg outline-none text-start hover:bg-gray-100 hover:text-gray-900 focus:bg-blue-gray-50 focus:bg-opacity-80 focus:text-blue-gray-900 active:bg-blue-gray-50 active:bg-opacity-80 active:text-blue-gray-900"
          >
            <div className="grid mr-4 place-items-center">
              <Map size={17}/>
            </div>
            <span className="hidden md:inline text-[15px]">Create Province</span>
          </div>
          <div
            role="button"
            onClick={()=> navigateTo("/create-currency")}
            className="flex items-center w-[10px] md:w-full p-3 leading-tight transition-all rounded-lg outline-none text-start hover:bg-gray-100 hover:text-gray-900 focus:bg-blue-gray-50 focus:bg-opacity-80 focus:text-blue-gray-900 active:bg-blue-gray-50 active:bg-opacity-80 active:text-blue-gray-900"
          >
            <div className="grid mr-4 place-items-center">
              <BadgeDollarSign size={17}/>
            </div>
            <span className="hidden md:inline text-[15px]">System Currency</span>
          </div>
          <div
            role="button"
            onClick={()=> navigateTo("/create-currency-local")}
            className="flex items-center w-[10px] md:w-full p-3 leading-tight transition-all rounded-lg outline-none text-start hover:bg-gray-100 hover:text-gray-900 focus:bg-blue-gray-50 focus:bg-opacity-80 focus:text-blue-gray-900 active:bg-blue-gray-50 active:bg-opacity-80 active:text-blue-gray-900"
          >
            <div className="flex mr-4 place-items-center">
            <RecycleIcon size={17}/>
            </div>
            <span className="hidden md:inline text-[15px]">Exchange Rate</span>
          </div>
          <div
            role="button"
            onClick={()=> navigateTo("/create-users")}
            className="flex items-center w-[10px] md:w-full p-3 leading-tight transition-all rounded-lg outline-none text-start hover:bg-gray-100 hover:text-gray-900 focus:bg-blue-gray-50 focus:bg-opacity-80 focus:text-blue-gray-900 active:bg-blue-gray-50 active:bg-opacity-80 active:text-blue-gray-900"
          >
            <div className="grid mr-4 place-items-center">
              <UserCheck2Icon size={17}/>
            </div>
            <span className="hidden md:inline text-[15px]">System Users</span>
          </div>
          <div
            role="button"
            onClick={()=> navigateTo("/create-school-admins")}
            className="flex items-center w-[10px] md:w-full p-3 leading-tight transition-all rounded-lg outline-none text-start hover:bg-gray-100 hover:text-gray-900 focus:bg-blue-gray-50 focus:bg-opacity-80 focus:text-blue-gray-900 active:bg-blue-gray-50 active:bg-opacity-80 active:text-blue-gray-900"
          >
            <div className="grid mr-4 place-items-center">
              <UserPlus size={17}/>
            </div>
            <span className="hidden md:inline text-[15px]">School Admins</span>
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
            role="button"
            onClick={()=> navigateTo("/create-school-term")}
            className="flex items-center w-[10px] md:w-full p-3 leading-tight transition-all rounded-lg outline-none text-start hover:bg-gray-100 hover:text-gray-900 focus:bg-blue-gray-50 focus:bg-opacity-80 focus:text-blue-gray-900 active:bg-blue-gray-50 active:bg-opacity-80 active:text-blue-gray-900"
          >
            <div className="grid mr-4 place-items-center">
              <CalendarCheck size={17}/>
            </div>
            <span className="hidden md:inline text-[15px]">School Term</span>
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
            onClick={()=> navigateTo("/create-uni-users")}
            role="button"
            className="flex items-center w-[10px] md:w-full p-3 leading-tight transition-all rounded-lg outline-none text-start hover:bg-gray-100 hover:text-gray-900 focus:bg-blue-gray-50 focus:bg-opacity-80 focus:text-blue-gray-900 active:bg-blue-gray-50 active:bg-opacity-80 active:text-blue-gray-900"
          >
            <div className="flex mr-4 place-items-center">
              <UserPlus size={17}/>
            </div>
            <span className="hidden md:inline text-[15px]">Create University Admins</span>
          </div>
          <div
            onClick={()=> navigateTo("/create-uni-dean")}
            role="button"
            className="flex items-center w-[10px] md:w-full p-3 leading-tight transition-all rounded-lg outline-none text-start hover:bg-gray-100 hover:text-gray-900 focus:bg-blue-gray-50 focus:bg-opacity-80 focus:text-blue-gray-900 active:bg-blue-gray-50 active:bg-opacity-80 active:text-blue-gray-900"
          >
            <div className="flex mr-4 place-items-center">
              <UserPlus size={17}/>
            </div>
            <span className="hidden md:inline text-[15px]">Create University Deans</span>
          </div>
          <div
            onClick={()=> navigateTo("/create-uni-dept")}
            role="button"
            className="flex items-center w-[10px] md:w-full p-3 leading-tight transition-all rounded-lg outline-none text-start hover:bg-gray-100 hover:text-gray-900 focus:bg-blue-gray-50 focus:bg-opacity-80 focus:text-blue-gray-900 active:bg-blue-gray-50 active:bg-opacity-80 active:text-blue-gray-900"
          >
            <div className="flex mr-4 place-items-center">
              <School2Icon size={17}/>
            </div>
            <span className="hidden md:inline text-[15px]">Create University Department</span>
          </div>
          <div
            onClick={()=> navigateTo("/create-uni-faculty")}
            role="button"
            className="flex items-center w-[10px] md:w-full p-3 leading-tight transition-all rounded-lg outline-none text-start hover:bg-gray-100 hover:text-gray-900 focus:bg-blue-gray-50 focus:bg-opacity-80 focus:text-blue-gray-900 active:bg-blue-gray-50 active:bg-opacity-80 active:text-blue-gray-900"
          >
            <div className="flex mr-4 place-items-center">
              <BlocksIcon size={17}/>
            </div>
            <span className="hidden md:inline text-[15px]">Create University Faculty</span>
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

export default SideNavbar;