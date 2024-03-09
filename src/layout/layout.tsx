import { AppHeader } from "@/components/ui/header"
import React, { Suspense } from "react"

const Contacts = React.lazy(() => import('@/components/ui/contacts/contacts'))

export default function Layout() {

  return (<>
    <AppHeader />
    <Suspense>
      <Contacts />
    </Suspense>
  </>
  )
}
