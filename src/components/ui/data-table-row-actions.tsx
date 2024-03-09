"use client"

import { Row } from "@tanstack/react-table"

import { TrashIcon } from "@radix-ui/react-icons"

interface DataTableRowActionsProps<TData> {
  row: Row<TData>
}

export function DataTableRowActions<TData>({
  row,
}: DataTableRowActionsProps<TData>) {
  return (
    <div className="flex items-center">
      <TrashIcon className="mr-2 h-5 w-5"/>
    </div>
  )
}