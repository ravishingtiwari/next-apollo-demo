import React from 'react'
import { Contact } from './contact.component'

export const AddressBook = (props: any) => {
  const t = props.entries.map((contact: { id:string, name: string, address: string, email: string, phone: string }) => {
    return (
      <Contact key={contact.id} contact={contact} className="col" />
    )
  })
  return (
    <div className="row row-cols-1 row-cols-md-3 g-4 mt-2">
      {t}
    </div>
  )
}
