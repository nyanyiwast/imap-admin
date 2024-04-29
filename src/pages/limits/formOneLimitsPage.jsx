import { FormOneLimitsForm } from "./forms/formOneLimits"

function FormOneLimitsPage() {
  return (
    <div>
        <h1 className="md:text-[40px] text-[25px] font-bold">Create form 1 enrollment limit</h1>
        <p className="text-gray-500 md:text-[15px] text-[12px] font-light">
            Set your preferred limits
        </p>

        <div className="md:pl-5 pt-10 overflow-y-auto">
            <FormOneLimitsForm />
        </div>
    </div>
  )
}

export default FormOneLimitsPage
