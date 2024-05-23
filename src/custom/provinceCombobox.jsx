"use client"

import * as React from "react"
import {
  Loader2,
  MapIcon,
  MapPinIcon,
} from "lucide-react"

import {
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command"

import { Badge } from '@/components/ui/badge';
// import { AppContext } from "../contexts/AppContext";
import { getDataQuery } from "../api/get";
const baseUrl = import.meta.env.VITE_BASE_URI

export function ProvinceComboBox() {
  // const { setSchoolId } = React.useContext(AppContext)

  const [open, setOpen] = React.useState(false)
  const [payload, setPayload] = React.useState([])
  const [provinceName, setProvinceName] = React.useState("Choose a province of choice")

  async function getData() {
      try {
        const url = `${baseUrl}/provinces`; // Specify your API URL
        const response = await getDataQuery(url);
        setPayload(response.data)
      } catch (error) {
        console.error('Error:', error);
        // Handle the error appropriately
      }
    }

    React.useEffect(() => {
        getData()
    }, []);  

  const openDialog = () => {
    setOpen((open) => !open);
  }

  return (
    <>
      <Badge className="flex gap-3 py-2 w-1/2 text-center text-md font-normal cursor-pointer uppercase" 
      variant="outline" onClick={openDialog}>{payload.length === 0 ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : provinceName} <MapPinIcon size={15}/></Badge>
      <CommandDialog open={open} onOpenChange={setOpen}>
        <CommandInput placeholder="Type to start a search..." />
        <CommandList>
          <CommandEmpty>{payload.length === 0 ? <Loader2 /> : 'No results found.'}</CommandEmpty>
          <CommandGroup heading="Suggestions">
          {payload.map((province) => (
            // to be set in contextAPI storage not session
              <CommandItem key={province.id}>
                <span className="flex uppercase" onClick={()=>{
                  sessionStorage.setItem("pid",province.id)
                  setProvinceName(province.name)
                  setOpen(!open)
                  }}><MapIcon /> {province.name}</span>
              </CommandItem>
            ))}
          </CommandGroup>
        </CommandList>
      </CommandDialog>
    </>
  );
}
