import { CreateSchoolForm } from "./forms/createSchool"

function CreateSchoolPage() {
  return (
    <div>
        <h1 className="md:text-[40px] text-[25px] font-bold">Create a school </h1>
        <p className="text-gray-500 md:text-[15px] text-[12px] font-light">
            This is where you can create a high school by entering it{"'"}s correctly registered details as per the Ministry
        </p>

        <div className="md:pl-5 pt-10 overflow-y-auto">
            <CreateSchoolForm />
        </div>
    </div>
  )
}

export default CreateSchoolPage
