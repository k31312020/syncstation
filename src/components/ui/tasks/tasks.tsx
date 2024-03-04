import { z } from "zod"

import { columns } from "@/components/ui/columns"
import { DataTable } from "@/components/ui/data-table"
import { taskSchema } from "../../../data/schema"
import { useEffect, useState } from "react"

// export const metadata: Metadata = {
//   title: "Tasks",
//   description: "A task and issue tracker build using Tanstack Table.",
// }

// Simulate a database read for tasks.
async function getTasks(): Promise<z.infer<typeof taskSchema>[]> {
    const data = await fetch("tasks.json").then(data => data.json())

    return z.array(taskSchema).parse(data)
}

export default function TaskPage() {

    const [tasks, setTasks] = useState<z.infer<typeof taskSchema>[]>([]);

    useEffect(() => {
        getTasks().then(result => {
            setTasks(result)
        })
    }, [])

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
                        <h2 className="text-2xl font-bold tracking-tight">Welcome back!</h2>
                        <p className="text-muted-foreground">
                            Here&apos;s a list of your tasks for this month!
                        </p>
                    </div>
                </div>
                <DataTable data={tasks} columns={columns} />
            </div>
        </>
    )
}