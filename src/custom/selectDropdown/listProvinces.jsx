import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
  } from "@/components/ui/select"
  

function ListProvinces() {
  return (
    <>
      <Select>
        <SelectTrigger className="w-full">
            <SelectValue placeholder="Select Province" />
        </SelectTrigger>
        <SelectContent>
            <SelectItem value="light">HARARE</SelectItem>
            <SelectItem value="dark">MASHONALAND CENTRAL</SelectItem>
            <SelectItem value="system">MANICALAND</SelectItem>
        </SelectContent>
        </Select>
    </>
  )
}

export default ListProvinces
