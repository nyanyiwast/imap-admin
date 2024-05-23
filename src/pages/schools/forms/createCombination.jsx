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
import { Loader2 } from "lucide-react"
import { SchoolComboBox } from "../../../custom/schoolCombobox"

const formSchema = z.object({
    subjectOneLimit: z.string().max(3, {
    message: "Please limit",
    }),
    subjectTwoLimit: z.string().max(3, {
    message: "Please limit",
    }),
    subjectThreeLimit: z.string().max(3, {
    message: "Please limit",
    })
  })

export function CreateCombinationForm() {
  const [isLoading, setLoading] = useState(false)

 // 1. Define your form.
const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
        schoolId: sessionStorage.getItem("sid"),
        subjectOneId: 2,
        subjectTwoId: 5,
        subjectThreeId: 6,
        subjectOneLimit: "",
        subjectTwoLimit: "",
        subjectThreeLimit: "",
        alevelCategoryId: 2
    },
  });
 
// 2. Define a submit handler.
async function onSubmit(values) {
  setLoading(true)
  const { schoolId, subjectOneId, subjectTwoId, subjectThreeId, alevelCategoryId } = form.getValues(); // Access the schoolId, subjectOneId, subjectTwoId, subjectThreeId, alevelCategoryId value
  const updatedValues = { ...values, schoolId, subjectOneId, subjectTwoId, subjectThreeId, alevelCategoryId }; // Include provinceId in the values object

  try {
    const url = `${baseUrl}/school-a-level-combinations`; // Specify your API URL
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
          name="subjectOneLimit"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Subject One Limit</FormLabel>
              <FormControl>
                <Input className="uppercase" placeholder="A" {...field} />
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
            name="subjectTwoLimit"
            render={({ field }) => (
                <FormItem>
                <FormLabel>Subject Two Limit</FormLabel>
                <FormControl>
                    <Input className="uppercase" type="text" placeholder="B" {...field} />
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
            name="subjectThreeLimit"
            render={({ field }) => (
                <FormItem>
                <FormLabel>Subject Three Limit</FormLabel>
                <FormControl>
                    <Input type="text" placeholder="C" {...field} />
                </FormControl>
                <FormDescription>
                The center number allocated to the school by Zimsec upon registering
              </FormDescription>
                <FormMessage />
                </FormItem>
            )}
            />      
          <SchoolComboBox />

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
