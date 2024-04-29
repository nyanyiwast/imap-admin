import { CreateUniversityUsersForm } from "./forms/createUniversityUsers"

function CreateUniversityUsersPage() {
  return (
    <div>
        <h1 className="md:text-[40px] text-[25px] font-bold">Create university administrator(s)</h1>
        <p className="text-gray-500 md:text-[15px] text-[12px] font-light">
            This is where you can create a university system admin who will control all global settings of the university
        </p>

        <div className="md:pl-5 pt-10 overflow-y-auto">
            <CreateUniversityUsersForm />
        </div>
    </div>
  )
}

export default CreateUniversityUsersPage
