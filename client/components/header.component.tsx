import React from 'react'
import { ContactSearch } from './contact-search.component'

export const Header = (props: any) => {
  return (
    <div>
      <nav className="navbar navbar-expand-md navbar-dark bg-dark">
        <div className="container">
          <a className="navbar-brand" href="#">Brand</a>
          <ContactSearch onContactSearch={props.onContactSearch} />
        </div>
      </nav>
    </div>
  )
}
