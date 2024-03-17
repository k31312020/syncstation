import { z } from "zod"
import { columns } from "@/components/contacts/contact-columns"
import { DataTable } from "@/components/ui/data-table"
import { useState } from "react"
import { Contact, contactsSchema } from "@/data/schemas/contacts"
import { ContactEdit } from "./contact-edit"
import axios from "axios"
import { useQuery } from "react-query"
// Simulate a database read for customers.
async function getTasks(): Promise<Contact[]> {
    const response = await axios.get("customers.json")
    return z.array(contactsSchema).parse(response.data)
}

export default function ContactsTable() {

    const [selectedContact, setSelectedContact] = useState<Contact | null>(null)

    const onRowSelected = (contact: Contact) => {
        setSelectedContact(contact)
    }

    const { data: contacts } = useQuery("getTasks", getTasks)

    return (
        <>
            <div className="md:hidden">
                <img
                    src="/examples/tasks-light.png"
                    width={1280}
                    height={998}
                    alt="Playground"
                    className="block dark:hidden"
                />
                <img
                    src="/examples/tasks-dark.png"
                    width={1280}
                    height={998}
                    alt="Playground"
                    className="hidden dark:block"
                />
            </div>
            <div className="hidden h-full flex-1 flex-col space-y-8 p-8 md:flex">
                <div className="flex items-center justify-between space-y-2">
                    <div>
                        <h2 className="text-2xl font-bold tracking-tight">Contacts</h2>
                    </div>
                </div>
                <div className="flex gap-8">
                    <ContactEdit contact={selectedContact}/>
                    <div className="flex-1">
                        <DataTable data={contacts || []} columns={columns} onRowSelected={onRowSelected} />
                    </div>
                </div>
                
            </div>
        </>
    )
}