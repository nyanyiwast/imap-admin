import { useState, useEffect } from "react";

import {
  Card,
} from "@/components/ui/card"

import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarSeparator,
  MenubarShortcut,
  MenubarTrigger,
} from "@/components/ui/menubar"

import { getDataQuery } from "../../api/get";
import { getTotalDataQuery } from "../../api/getTotal";
import { Loader2 } from "lucide-react";

const baseUrl = import.meta.env.VITE_BASE_URI

function Dashboard() {

// LOADING STATES
  const [schoolsData, setSchoolsData] = useState("")
  const [provincesData, setProvincesData] = useState("")
  const [termData, setTermData] = useState("")
  const [formOneApplicants, setFormOneApplicants] = useState("")

  useEffect(() => {
    getTotalData();
  }, []);
  
  async function getTotalData() {
    try {
  
      const [schoolsResponse, provincesResponse, formOneDataResponse, termResponse] = await Promise.all([
        getTotalDataQuery(`${baseUrl}/schools`),
        getTotalDataQuery(`${baseUrl}/provinces`),
        getTotalDataQuery(`${baseUrl}/form-one-applications`),
        getDataQuery(`${baseUrl}/school-terms`),
      ]);
  
      setSchoolsData(schoolsResponse)
      setProvincesData(provincesResponse)
      setFormOneApplicants(formOneDataResponse)
      setTermData(termResponse)
  
    } catch (error) {
      console.error('Error:', error);
      // Handle the error appropriately
    }
  }

  // DESTRUCTURED OBJECTS
  // First, check if termData.data exists and has at least one element
    if (termData.data && termData.data.length > 0) {
      const { schoolTerm } = termData.data[0];
      var { name, startDate, endDate } = schoolTerm
    }

  const cardData = [
    {
      title: 'Total Registered Schools',
      description: 'Card Description',
      content: `+${schoolsData}`,
      footer: 'The number of full registered and active schools',
      startDate: null,
      endDate: null,
      textCase: ''
    },
    {
      title: 'Total Provinces',
      description: 'Card Description',
      content: `+${provincesData}`,
      footer: 'The total number of provinces registered',
      startDate: null,
      endDate: null,
      textCase: ''
    },
    {
      title: 'Active Students',
      description: 'Card Description',
      content: `+${formOneApplicants}`,
      footer: 'Number of successfully enrolled students',
      startDate: null,
      endDate: null,
      textCase: ''
    },
    {
      title: 'Latest School Term',
      description: 'Card Description',
      content: name,
      footer: `Latest active term for the year ${new Date().getFullYear()}`,
      startDate,
      endDate,
      textCase: 'uppercase'
    }
  ];

  return (
<div className="py-10">
    <h1 className="text-2xl font-bold">Dashboard</h1>
  
  <div className="pt-5 w-1/4">
    <Menubar>
      <MenubarMenu>
        <MenubarTrigger>File</MenubarTrigger>
        <MenubarContent>
          <MenubarItem>
            New Tab <MenubarShortcut>⌘T</MenubarShortcut>
          </MenubarItem>
          <MenubarItem>New Window</MenubarItem>
          <MenubarSeparator />
          <MenubarItem>Share</MenubarItem>
          <MenubarSeparator />
          <MenubarItem>Print</MenubarItem>
        </MenubarContent>
      </MenubarMenu>
    </Menubar>
  </div>

  <div className="flex flex-col md:flex-row gap-2 md:space-x-3 py-5">
    {cardData.map(card => (
      <Card key={Math.random()} className="w-full md:w-1/4">
        <div className="px-5 py-5">
          <p className="font-semibold">{card.title}</p>
          {
          schoolsData || provincesData || formOneApplicants || termData ?  
          <div>
              <div className="pt-5 font-extrabold text-2xl">
                <p className={card.textCase}>{card.content}</p>
              </div>  
              <div>
                <p className="text-gray-500 text-[13px] font-extralight">{card.startDate !== null ? `Starts: ${startDate} & Ends:${endDate}` : card.footer}</p>
              </div>
            </div>  
            : 
            <Loader2 className="mr-2 h-4 w-4 animate-spin text-blue-300 font-extrabold" />
          }
      </div>
      </Card>
    ))}
  </div>
</div>
  );
}

export default Dashboard
