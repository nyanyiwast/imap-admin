import { useState, useEffect } from "react";
import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
  } from "@/components/ui/table"
import { getDataQuery } from "../../api/get";
import { Loader2 } from "lucide-react";

const baseUrl = import.meta.env.VITE_BASE_URI

function ListSchoolAdminsPage() {
    const [payload, setPayload] = useState("")

    async function getData() {
        try {
          const url = `${baseUrl}/school-admins`; // Specify your API URL
          const response = await getDataQuery(url);
          setPayload(response.data)
          console.log('Response:', response);
        } catch (error) {
          console.error('Error:', error);
          // Handle the error appropriately
        }
      }
    useEffect(() => {
        getData()
    }, []);  

  return (
    <div>
        <h1 className="md:text-[40px] text-[25px] font-bold">List Provinces Subject</h1>
        <p className="text-gray-500 md:text-[15px] text-[12px] font-light">
            This is where you can see a subject by entering it{"'"}s correctly registered details as per the Ministry guide
        </p>

        <div className="md:pl-5 pt-10 overflow-y-auto w-1/2">
        <Table>
            <TableCaption>A list of all the active subjects.</TableCaption>
            <TableHeader>
                <TableRow>
                <TableHead className="w-[100px]">ID</TableHead>
                <TableHead>Employee Number (EC)</TableHead>
                <TableHead>Email</TableHead>
                <TableHead className="text-right">Active</TableHead>
                </TableRow>
            </TableHeader>
            {
            payload ?
            <TableBody>
                {payload.map((data, index) => (
                    <TableRow key={index}>
                        <TableCell className="font-medium">{data.id}</TableCell>
                        <TableCell className="uppercase">{data.ecNumber}</TableCell>
                        <TableCell className="font-medium">{data.email}</TableCell>
                        <TableCell className="text-right">{data.status ? "YES" : "NO"}</TableCell>
                    </TableRow>
                    ))}
            </TableBody>
            :
            <Loader2 className="mr-2 h-4 w-4 animate-spin text-3xl" />
            }
            </Table>
        </div>
    </div>
  )
}

export default ListSchoolAdminsPage
