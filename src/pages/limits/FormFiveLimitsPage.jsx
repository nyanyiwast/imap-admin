import { FormFiveLimitsForm } from "./forms/formFiveLimits"

function FormFiveLimitsPage() {
  return (
    <div>
        <h1 className="md:text-[40px] text-[25px] font-bold">Create an enrollment limit for A{"'"}Level</h1>
        <p className="text-gray-500 md:text-[15px] text-[12px] font-light">
            Set you preferred limits
        </p>

        <div className="md:pl-5 pt-10 overflow-y-auto">
            <FormFiveLimitsForm />
        </div>
    </div>
  )
}

export default FormFiveLimitsPage
