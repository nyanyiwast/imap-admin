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
  maxUnits: z.string().transform((value) => Number(value)).pipe(
    z.number().int().min(4).max(36).positive().transform((value) => {
      if (value < 4) {
        return 4;
      }
      if (value > 36) {
        return 36;
      }
      return value;
    }).refine((value) => value >= 4 && value <= 36, {
      message: "Field is mandatory and must be between 4 and 36",
    })
  ),
  minUnits: z.string().transform((value) => Number(value)).pipe(
    z.number().int().min(4).max(36).positive().transform((value) => {
      if (value < 4) {
        return 4;
      }
      if (value > 36) {
        return 36;
      }
      return value;
    }).refine((value) => value >= 4 && value <= 36, {
      message: "Field is mandatory and must be between 4 and 36",
    })
  ),
  maxMale: z.string().transform((value) => Number(value)).pipe(
    z.number().min(0, {
      message: "Field is mandatory and must be valid",
    })
  ),
  maxFemale: z.string().transform((value) => Number(value)).pipe(
    z.number().min(0, {
      message: "Field is mandatory and must be valid",
    })
  ), 
});

export function FormOneLimitsForm() {
  const [isLoading, setLoading] = useState(false)

 // 1. Define your form.
const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
        maxUnits: 4,
        minUnits: 4,
        maxMale: 0,
        maxFemale: 0,
        schoolTermId: 1,
        schoolId: 1
    },
  });
 
// 2. Define a submit handler.
async function onSubmit(values) {

    const {maxMale, maxFemale, schoolId, schoolTermId, maxUnits, minUnits} = form.getValues()

    if(maxMale + maxFemale <= 9){
       if(minUnits > maxUnits){
        return toast(`Attention. \n\nThe lower limit of ${minUnits} is not greater than the upper limit ${maxUnits}`)
       }
       else{
        return toast("Sorry. The number of students is too low. Try a minimum of at least 10 students.")
       }
    }

    
    else{
  setLoading(true)
  const updatedValues = { ...values, schoolId, schoolTermId }; // Include provinceId in the values object

  try {
    const url = `${baseUrl}/form-one-limits`; // Specify your API URL
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
          name="minUnits"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Minimum accepted units</FormLabel>
              <FormControl>
                <Input min={4} placeholder="7" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
            
          )}
        />

    <FormField
          control={form.control}
          name="maxUnits"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Maximum accepted units</FormLabel>
              <FormControl>
                <Input min={4} placeholder="12" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
            
          )}
        />

    <FormField
          control={form.control}
          name="maxMale"
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
          name="maxFemale"
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
