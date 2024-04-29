import { CreateSchoolAdminForm } from "./forms/createSchoolAdmin"

function CreateSchoolAdminPage() {
  return (
    <div>
        <h1 className="md:text-[40px] text-[25px] font-bold">Create a school administrator</h1>
        <p className="text-gray-500 md:text-[15px] text-[12px] font-light">
            This is a school administrator who oversees all users and activities of their particular school
        </p>

        <div className="md:pl-5 pt-10 overflow-y-auto">
            <CreateSchoolAdminForm />
        </div>
    </div>
  )
}

export default CreateSchoolAdminPage
