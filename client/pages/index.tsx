import React, { useState } from 'react'
import { Header } from '../components/header.component'
import { useQuery, gql } from '@apollo/client'
import { AddressBook } from '../components/address-book.component'
import { LoadMore } from '../components/load-more.component'

const peopleQuery = gql`
  query people($offset: Int, $limit: Int) {
    people(offset: $offset, limit: $limit) {
      id
      name
      address
      email
      phone
    }
  }
`

const contactFilter = (contact: { name: string }, nameFilter:string) => {
  let result = true
  if (nameFilter) {
    result = contact.name.toLowerCase().includes(nameFilter.toLowerCase())
  }

  return result
}

export default function Main () {
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
    const r = data.people.filter((contact: any) => contactFilter(contact, e.target.value))
    setContacts(r)
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
