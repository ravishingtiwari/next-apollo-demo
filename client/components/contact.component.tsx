import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPhone, faEnvelope, faMapMarker } from '@fortawesome/free-solid-svg-icons'

export const Contact = (props:any) => {
  return (
    <div key={props.contact.name} className="col">
      <div className="card">
        <div className="card-header">
          <h5 className="card-title">{props.contact.name}</h5></div>
        <div className="card-body">
          <div><FontAwesomeIcon icon={faMapMarker} /> {props.contact.address}</div>
          <div><FontAwesomeIcon icon={faEnvelope} /> {props.contact.email}</div>
          <div><FontAwesomeIcon icon={faPhone} /> {props.contact.phone}</div>
        </div>
      </div>
    </div>
  )
}
