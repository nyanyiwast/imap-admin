import { CreateLocalCurrencyForm } from "./forms/createLocalCurrency"

function CreateLocalCurrencyPage() {
  return (
    <div>
        <h1 className="md:text-[40px] text-[25px] font-bold">Create a local system currency exchange rate</h1>
        <p className="text-gray-500 md:text-[15px] text-[12px] font-light">
            This is where you can create a local currency to be applied on all fee types
        </p>

        <div className="md:pl-5 pt-10 overflow-y-auto">
            <CreateLocalCurrencyForm />
        </div>
    </div>
  )
}

export default CreateLocalCurrencyPage
