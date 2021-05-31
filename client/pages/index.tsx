import React, { useState } from 'react'
import { Header } from '../components/header.component'
import { useQuery } from '@apollo/client'
import { peopleQuery } from './api/queries'
import { AddressBook } from '../components/address-book.component'
import { LoadMore } from '../components/load-more.component'
import { contactFilter } from '../lib/filters'

export default function Home () {
  const [contacts, setContacts] = useState(new Array())
  const { loading, data, fetchMore } = useQuery(peopleQuery, {
    variables: {
      offset: 0,
      limit: 10
    },
    onCompleted: (data) => {
      setContacts(data.people)
    }
  })

  const loadMore = () => {
    fetchMore({
      variables: {
        offset: data.people.length
      }
    }).then((res:any) => {
      const p = [...contacts, ...res.data.people]
      setContacts(p)
    })
  }

  const onContactSearch = (e: any) => {
    const filteredContacts = data.people.filter((contact: any) => contactFilter(contact, e.target.value))
    setContacts(filteredContacts)
  }

  if (loading) return <p>Loading...</p>
  return (
    <div className="container mb-5">
      <Header onContactSearch={onContactSearch} />
      <AddressBook entries={contacts} />
      <LoadMore loadMore={loadMore}/>
    </div>
  )
}
