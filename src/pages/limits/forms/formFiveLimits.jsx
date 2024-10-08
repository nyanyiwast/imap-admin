"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { postDataQuery } from "../../../api/post"
const baseUrl = import.meta.env.VITE_BASE_URI
import { useState } from "react"


import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"

import { Input } from "@/components/ui/input"
import { Loader2 } from "lucide-react"
import ListSchoolTerms from "../../../custom/selectDropdown/listSchoolTerms"
import ListSchools from "../../../custom/selectDropdown/listSchools"
import { toast } from "sonner"

const formSchema = z.object({
    upperPointsLimits: z.number().int().gte(1, {
    message: "Field is mandatory and must be valid",
  }),
    lowerPointsLimits: z.number().int().gte(1, {
    message: "Field is mandatory and must be valid",
  }),
    genderMale: z.number().int().gte(0, {
    message: "Field is mandatory and must be valid",
  }),
    genderFemale: z.number().int().gte(0, {
    message: "Field is mandatory and must be valid",
  })
  })

export function FormFiveLimitsForm() {
  const [isLoading, setLoading] = useState(false)

 // 1. Define your form.
const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
        schoolId: 1,
        upperPointsLimits: 1,
        lowerPointsLimits: 1,
        genderMale: 0,
        genderFemale: 0,
        schoolTermId: 1
    },
  });
 
// 2. Define a submit handler.
async function onSubmit(values) {

    const {genderMale, genderFemale, schoolId, schoolTermId, upperPointsLimits, lowerPointsLimits} = form.getValues()

    if(genderMale + genderFemale <= 9){
       if(lowerPointsLimits > upperPointsLimits){
        return toast(`Attention. \n\nThe lower limit of ${lowerPointsLimits} is not greater than the upper limit ${upperPointsLimits}`)
       }
       else{
        return toast("Sorry. The number of students is too low. Try a minimum of at least 10 students.")
       }
    }

    
    else{
  setLoading(true)
  const updatedValues = { ...values, schoolId, schoolTermId }; // Include provinceId in the values object

  try {
    const url = `${baseUrl}/form_five_limits`; // Specify your API URL
    const response = await postDataQuery(url, updatedValues);
    console.log('Response:', response);
    setLoading(false)
  } catch (error) {
    setLoading(false)
    console.error('Error:', error);
    // Handle the error appropriately
  }
}}

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8 md:w-1/2 w-full p-5 md:p-0">
        <FormField
          control={form.control}
          name="lowerPointsLimits"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Minimum accepted Points</FormLabel>
              <FormControl>
                <Input min={4} placeholder="7" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
            
          )}
        />

    <FormField
          control={form.control}
          name="upperPointsLimits"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Maximum accepted Points</FormLabel>
              <FormControl>
                <Input min={4} placeholder="12" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
            
          )}
        />

    <FormField
          control={form.control}
          name="genderMale"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Maximum number of male students</FormLabel>
              <FormControl>
                <Input placeholder="24" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
            
          )}
        />

    <FormField
          control={form.control}
          name="genderFemale"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Maximum number of female students</FormLabel>
              <FormControl>
                <Input placeholder="30" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
            
          )}
        />    

            <ListSchoolTerms />

            <ListSchools />

        { !isLoading ?
        <Button type="submit">Proceed</Button>
        :
        <Button disabled>
          <Loader2 className="mr-2 h-4 w-4 animate-spin" />
          Please wait
        </Button>
        }
      </form>
    </Form>
  )
}
