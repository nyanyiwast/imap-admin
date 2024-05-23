import { CreateOLevelSubjectsForm } from "./forms/createOLevelSubjects"

function CreateOLevelSubjectsPage() {
  return (
    <div>
        <h1 className="md:text-[40px] text-[25px] font-bold">Create O{"'"} Level Subject</h1>
        <p className="text-gray-500 md:text-[15px] text-[12px] font-light">
            This is where you can create a subject by entering it{"'"}s correctly registered details as per the Ministry guide
        </p>

        <div className="md:pl-5 pt-10 overflow-y-auto">
            <CreateOLevelSubjectsForm />
        </div>
    </div>
  )
}

export default CreateOLevelSubjectsPage
