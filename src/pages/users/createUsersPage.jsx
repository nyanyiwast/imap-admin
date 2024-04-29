import { CheckCheckIcon } from "lucide-react"
import { CreateUsersForm } from "./forms/createUsers"

function CreateUsersPage() {
  return (
    <div>
        <h1 className="md:text-[40px] text-[25px] font-bold">Create system users</h1>
        <p className="text-gray-500 md:text-[15px] text-[12px] font-light">
            Overal system users with almost every access right. This is where you can create a system user of types:
        </p>
        <span className="flex gap-2">
                <p className="flex text-gray-500 md:text[12px] text-[12px]"><CheckCheckIcon size={15} />ADMIN 1</p>
                <p className="flex text-gray-500 md:text[12px] text-[12px]"><CheckCheckIcon size={15} />ADMIN 2</p>
                <p className="flex text-gray-500 md:text[12px] text-[12px]"><CheckCheckIcon size={15} />ADMIN 3</p>
        </span>

        <div className="md:pl-5 pt-10 overflow-y-auto">
            <CreateUsersForm />
        </div>
    </div>
  )
}

export default CreateUsersPage
