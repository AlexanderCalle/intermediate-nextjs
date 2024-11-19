'use client'
import { getKeyValue, Table, TableBody, TableCell, TableColumn, TableHeader, TableRow } from "@nextui-org/react";

const columns = [
  {
    key: "name",
    label: "NAME",
  },
  {
    key: "email",
    label: "EMAIL", 
  }
]

type Guest = {
  id: string | null;
  name: string | null;
  email: string | null;
}

export const GuestList = ({guests}: {guests: Guest[]}) => {
  return (
    <Table 
      removeWrapper 
      color="default"
      selectionMode="single" 
      aria-label="Guests table"
    >
      <TableHeader columns={columns}>
        {(column) => <TableColumn key={column.key}>{column.label}</TableColumn>}
      </TableHeader>
      <TableBody emptyContent={"No guests to display."} items={guests}>
        {(item) => (
          <TableRow key={item.id}>
            {(columnKey) => <TableCell>{getKeyValue(item, columnKey)}</TableCell>}
          </TableRow>
        )}
      </TableBody>
    </Table>
  )
}
