import { AppHeader } from "@/components/ui/header"
import React, { Suspense } from "react"

const Tasks = React.lazy(() => import('@/components/ui/tasks/tasks'))

export default function Layout() {

  return (<>
    <AppHeader />
    <Suspense>
      <Tasks />
    </Suspense>
  </>
  )
}
