import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
  } from "@/components/ui/select"
  

function ListSchools() {
  return (
    <>
      <Select>
        <SelectTrigger className="w-full">
            <SelectValue placeholder="Select School" />
        </SelectTrigger>
        <SelectContent>
            <SelectItem value="light">MUTARE BOYS HIGH</SelectItem>
            <SelectItem value="dark">HARARE GIRLS HIGH</SelectItem>
            <SelectItem value="system">GLEN VIEW HIGH 2</SelectItem>
        </SelectContent>
        </Select>
    </>
  )
}

export default ListSchools
