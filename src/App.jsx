import { useState } from 'react'
import './App.css'
import ContactList from './components/ContactList.jsx'

const [contacts, setContacts] = useState(dummyContacts)

function App() {
  console.log('Contacts: ', contacts)
  return (
    <>
      <ContactList />
    </>
  )
}

export default App
