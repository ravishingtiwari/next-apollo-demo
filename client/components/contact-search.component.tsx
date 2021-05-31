import React from 'react'
import { ContactSearchArgs } from '../models/contact.search.args'

export const ContactSearch = (props: { onContactSearch: (e: ContactSearchArgs) => void }) => {
  return (
    <div className="row">
      <div className="col">
        <input
          className="form-control me-2"
          type="search"
          placeholder="Search"
          onChange={props.onContactSearch}
          aria-label="Search" />
      </div>
    </div>
  )
}
