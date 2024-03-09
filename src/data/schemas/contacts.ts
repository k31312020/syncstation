import { z } from "zod"

// We're keeping a simple non-relational schema here.
// IRL, you will have a schema for your data models.
export const contactsSchema = z.object({
  id: z.number(),
  firstname: z.string(),
  lastname: z.string(),
  phone: z.string(),
  email: z.string(),
  address: z.string()
})

export type Contact = z.infer<typeof contactsSchema>