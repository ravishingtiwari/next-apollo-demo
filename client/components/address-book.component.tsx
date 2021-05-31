import React from 'react'
import { Contact } from '../models/contact'
import { ContactComponent } from './contact.component'

export const AddressBook = (props: { entries: Contact[] }) => {
  const t = props.entries.map((contact: Contact) => {
    return (
      <ContactComponent key={contact.id} contact={contact} />
    )
  })
  return (
    <div className="row row-cols-1 row-cols-md-3 g-4 mt-2">
      {t}
    </div>
  )
}
