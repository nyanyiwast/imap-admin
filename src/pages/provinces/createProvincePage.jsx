import { CreateProvinceForm } from "./forms/createProvince"

function CreateProvincePage() {
  return (
    <div>
        <h1 className="md:text-[40px] text-[25px] font-bold">Create a province</h1>
        <p className="text-gray-500 md:text-[15px] text-[12px] font-light">
            This is where you can create a province as registered by the Zimbabwe demographics department
        </p>

        <div className="md:pl-5 pt-10 overflow-y-auto">
            <CreateProvinceForm />
        </div>
    </div>
  )
}

export default CreateProvincePage
