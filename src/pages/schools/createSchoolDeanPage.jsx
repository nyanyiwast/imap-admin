import { CreateSchoolDeanForm } from "./forms/createSchoolDean"

function CreateSchoolDeanPage() {
  return (
    <div>
        <h1 className="md:text-[40px] text-[25px] font-bold">Create a school dean / bursar</h1>
        <p className="text-gray-500 md:text-[15px] text-[12px] font-light">
            This is where you can create a high school system Dean or Bursar who will control all applications and enrollment settings
        </p>

        <div className="md:pl-5 pt-10 overflow-y-auto">
            <CreateSchoolDeanForm />
        </div>
    </div>
  )
}

export default CreateSchoolDeanPage
