import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Contact, contactsSchema } from "@/data/schemas/contacts"
import { zodResolver } from "@hookform/resolvers/zod"
import { UseFormReturn, useForm } from "react-hook-form"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { toast } from "@/components/ui/use-toast"

interface ContactProps {
  contact: Contact | undefined,
}

export function ContactEdit({ contact }: ContactProps) {
  const form: UseFormReturn<Contact> = useForm<Contact>({
    resolver: zodResolver(contactsSchema),
    mode: 'all',
    defaultValues: {
      id: undefined,
      firstname: '',
      lastname: '',
      email: '',
      phone: '',
      address: ''
    },
    values: contact
  })

  const submit = (contact: Contact) => {
    // after async update
    toast({
      description: "Contact updated successfully",
    })
  }

  return (
    <Card className="w-[350px]">
      <CardHeader>
        <CardTitle>Edit Contact</CardTitle>
        <CardDescription>Make changes to your contact</CardDescription>
      </CardHeader>
      <CardContent>
        {!contact ? (<div className="text-center">
          Please select a contact
        </div>) :
          (<Form {...form}>
              <FormField
                control={form.control}
                name="firstname"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Firstname</FormLabel>
                    <FormControl>
                      <Input placeholder="firstname" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )} />
              <FormField
                control={form.control}
                name="lastname"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Lastname</FormLabel>
                    <FormControl>
                      <Input placeholder="lastname" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )} />
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email</FormLabel>
                    <FormControl>
                      <Input placeholder="email" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )} />
              <FormField
                control={form.control}
                name="phone"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Phone</FormLabel>
                    <FormControl>
                      <Input placeholder="phone" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )} />
              <FormField
                control={form.control}
                name="address"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Address</FormLabel>
                    <FormControl>
                      <Input placeholder="address" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )} />
          </Form>)}
      </CardContent>
      <CardFooter className="flex justify-between">
        {contact ? (<Button onClick={form.handleSubmit(submit)}>Update</Button>) : ""}
      </CardFooter>
    </Card>
  )
}
