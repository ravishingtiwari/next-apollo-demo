export const contactFilter = (contact: { name: string }, nameFilter: string) => {
  let result = true
  if (nameFilter) {
    result = contact.name.toLowerCase().includes(nameFilter.toLowerCase())
  }

  return result
}
