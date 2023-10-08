import { useEffect, useState } from 'react';
import { Form } from './Form/Form';
import { Contacts } from './Contacts/Contacts';
import { SearchField } from './SearchField/SearchField';

export const App = () => {
  const [contacts, setContacts] = useState([
    { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
    { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
    { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
    { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
  ]);
  const [filter, setFilter] = useState('');

  useEffect(() => {
    const contactsInStorage = localStorage.getItem('myContacts');
    if (contactsInStorage) {
      const savedContacts = JSON.parse(contactsInStorage);
      setContacts(savedContacts);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('myContacts', JSON.stringify(contacts));
  }, [contacts]);

  const addContact = newContact => {
    contacts.some(
      contact => contact.name.toLowerCase() === newContact.name.toLowerCase()
    )
      ? alert(`${newContact.name} is already in contacts.`)
      : setContacts([newContact, ...contacts]);
  };

  const changeFilter = evt => {
    setFilter(evt.target.value);
  };

  const deleteContact = contactId => {
    setContacts(prevContacts =>
      prevContacts.filter(contact => contact.id !== contactId)
    );
  };

  const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <div>
      <h1>Phonebook</h1>
      <Form onFormSubmit={addContact}></Form>
      <h2>Contacts</h2>
      <SearchField value={filter} onChange={changeFilter}></SearchField>
      <Contacts
        contacts={filteredContacts}
        deleteContact={deleteContact}
      ></Contacts>
    </div>
  );
};
