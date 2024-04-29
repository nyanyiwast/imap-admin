import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
  } from "@/components/ui/select"
  

function ListSchoolTerms() {
  return (
    <>
      <Select>
        <SelectTrigger className="w-full">
            <SelectValue placeholder="Select School Term" />
        </SelectTrigger>
        <SelectContent>
            <SelectItem value="light">TERM 1</SelectItem>
            <SelectItem value="dark">TERM 2</SelectItem>
            <SelectItem value="system">TERM 3</SelectItem>
        </SelectContent>
        </Select>
    </>
  )
}

export default ListSchoolTerms
