import { CreateFormFiveCategoryForm } from "./forms/createFormFiveCategory"

function FormFiveCategoryPage() {
  return (
    <div>
        <h1 className="md:text-[40px] text-[25px] font-bold">Create A{"'"} Level categories</h1>
        <p className="text-gray-500 md:text-[15px] text-[12px] font-light">
            Set the A{"'"} level categories that will be used to create possible combinations a school will offer
        </p>

        <div className="md:pl-5 pt-10 overflow-y-auto">
            <CreateFormFiveCategoryForm />
        </div>
    </div>
  )
}

export default FormFiveCategoryPage
