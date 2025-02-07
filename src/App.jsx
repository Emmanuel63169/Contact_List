import { useState } from 'react'
import './App.css'
import ContactList from './components/ContactList.jsx'
// import SelectedContact from './components/SelectedContact'


function App() {

  function selectedContact() {
    return (
      console.log('e')
    )
  }
  // useState hook for selectedContactId
const [selectedContactId, setSelectedContactId] = useState(null);

// dummy array
  const dummyContacts = [
    { id: 1, name: "R2-D2", phone: "222-222-2222", email: "r2d2@droids.com" },
    { id: 2, name: "C-3PO", phone: "333-333-3333", email: "c3po@droids.com" },
    { id: 3, name: "BB-8", phone: "888-888-8888", email: "bb8@droids.com" },
  ]; 
// useState hok for contacts
  const [contacts, setContacts] = useState(dummyContacts)
  console.log('Contacts: ', contacts)
  return (
    <>
    {selectedContactId ? (
      <div>Selected Contact View</div>
    ) : (
      <ContactList contacts={contacts} setContacts={setContacts}/>
    )} 
    </>
  );
}

export default App
