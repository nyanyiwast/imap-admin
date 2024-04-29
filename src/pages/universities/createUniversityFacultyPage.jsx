import { CreateUniversityDepartment } from "./forms/createUniversityDepartment"

function CreateUniversityFacultyPage() {
  return (
    <div>
        <h1 className="md:text-[40px] text-[25px] font-bold">Create university faculty</h1>
        <p className="text-gray-500 md:text-[15px] text-[12px] font-light">
            This is where you can create a university system admin who will control all global settings of the university
        </p>

        <div className="md:pl-5 pt-10 overflow-y-auto">
            <CreateUniversityDepartment />
        </div>
    </div>
  )
}

export default CreateUniversityFacultyPage
