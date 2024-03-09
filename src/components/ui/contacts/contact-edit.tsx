import * as React from "react"

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
import { Label } from "@/components/ui/label"
import { Contact } from "@/data/schemas/contacts"

interface ContactProps {
  contact: Contact | null
}

export function ContactEdit({contact}: ContactProps) {
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
        (<form>
          <div className="grid w-full items-center gap-4">
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="name" className="asterik">Firstname</Label>
              <Input id="name" value={contact?.firstname} placeholder="Name of your project" />
            </div>
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="name">Lastname</Label>
              <Input id="name" value={contact?.lastname} placeholder="Name of your project" />
            </div>
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="name">Email</Label>
              <Input id="name" value={contact?.email} placeholder="Name of your project" />
            </div>
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="name">Phone</Label>
              <Input id="name" value={contact?.phone} placeholder="Name of your project" />
            </div>
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="name">Address</Label>
              <Input id="name" value={contact?.address} placeholder="Name of your project" />
            </div>
          </div>
        </form>)}
      </CardContent>
      <CardFooter className="flex justify-between">
        {contact? (<Button>Update</Button>) : ""}
      </CardFooter>
    </Card>
  )
}
