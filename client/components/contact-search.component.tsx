import React from 'react'

export const ContactSearch = (props: any) => {
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
