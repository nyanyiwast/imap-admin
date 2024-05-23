import { CreateCombinationForm } from "./forms/createCombination"

function CreateCombinationPage() {
  return (
    <div>
        <h1 className="md:text-[40px] text-[25px] font-bold">Create a combination </h1>
        <p className="text-gray-500 md:text-[15px] text-[12px] font-light">
            This is where you can create a combination by entering it{"'"}s correctly registered details as per the Ministry
        </p>

        <div className="md:pl-5 pt-10 overflow-y-auto">
            <CreateCombinationForm />
        </div>
    </div>
  )
}

export default CreateCombinationPage
