import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
  } from "@/components/ui/select"
  

function ListUniversities() {
  return (
    <>
      <Select>
        <SelectTrigger className="w-full">
            <SelectValue placeholder="Select University" />
        </SelectTrigger>
        <SelectContent>
            <SelectItem value="light">UNIVERSITY OF ZIMBABWE</SelectItem>
            <SelectItem value="dark">NUST UNIVERSITY</SelectItem>
            <SelectItem value="system">MSU UNIVERSITY</SelectItem>
        </SelectContent>
        </Select>
    </>
  )
}

export default ListUniversities
