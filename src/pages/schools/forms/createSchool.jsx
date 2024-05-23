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
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"

import { Input } from "@/components/ui/input"
import ListProvinces from "../../../custom/selectDropdown/listProvinces"
import { Loader2 } from "lucide-react"

const formSchema = z.object({
    name: z.string().min(5, {
    message: "School field is mandatory",
  }).refine(value => value.includes('HIGH SCHOOL') || value.includes('SECONDARY SCHOOL'), {
    message: "Text is missing either 'HIGH SCHOOL' or 'SECONDARY SCHOOL'",
  }),
    address: z.string().min(10, {
    message: "Please use valid address",
  }),
    centreNumber: z.string().min(5, {
    message: "Please enter a valid center number",
  })
  })

export function CreateSchoolForm() {
  const [isLoading, setLoading] = useState(false)

 // 1. Define your form.
const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      address: "",
      centreNumber: "",
      provinceId: 1,
    },
  });
 
// 2. Define a submit handler.
async function onSubmit(values) {
  setLoading(true)
  const { provinceId } = form.getValues(); // Access the provinceId value
  const updatedValues = { ...values, provinceId }; // Include provinceId in the values object

  try {
    const url = `${baseUrl}/schools`; // Specify your API URL
    const response = await postDataQuery(url, updatedValues);
    console.log('Response:', response);
    setLoading(false)
  } catch (error) {
    setLoading(false)
    console.error('Error:', error);
    // Handle the error appropriately
  }
}

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8 md:w-1/2 w-full p-5 md:p-0">
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Registered School Name</FormLabel>
              <FormControl>
                <Input className="uppercase" placeholder="Chirumhanzu" {...field} />
              </FormControl>
              <FormDescription>
                Do not forget to append Secondary or High School to the name
              </FormDescription>
              <FormMessage />
            </FormItem>
            
          )}
        />
        
        <FormField
            control={form.control}
            name="address"
            render={({ field }) => (
                <FormItem>
                <FormLabel>Physical Address</FormLabel>
                <FormControl>
                    <Input className="uppercase" type="text" placeholder="F6GX+GR5, Chinamhora" {...field} />
                </FormControl>
                <FormDescription>
                This is the physical address of the school, where it is located
              </FormDescription>
                <FormMessage />
                </FormItem>
            )}
            />

        <FormField
            control={form.control}
            name="centreNumber"
            render={({ field }) => (
                <FormItem>
                <FormLabel>Zimsec Center Number</FormLabel>
                <FormControl>
                    <Input type="text" placeholder="5562822" {...field} />
                </FormControl>
                <FormDescription>
                The center number allocated to the school by Zimsec upon registering
              </FormDescription>
                <FormMessage />
                </FormItem>
            )}
            />      

          <ListProvinces />


        { isLoading ?
        <Button disabled>
          <Loader2 className="mr-2 h-4 w-4 animate-spin" />
          Please wait
        </Button>
        :
        <Button type="submit">Proceed</Button>
        }
      </form>
    </Form>
  )
}
