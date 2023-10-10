import { useEffect, useState } from 'react';
import { Form } from './Form/Form';
import { Contacts } from './Contacts/Contacts';
import { SearchField } from './SearchField/SearchField';

export const App = () => {
  const [contacts, setContacts] = useState(() => {
    const contactsInStorage = localStorage.getItem('contacts');
    if (contactsInStorage) {
      return JSON.parse(contactsInStorage);
    } else {
      return [];
    }
  });
  const [filter, setFilter] = useState('');

  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
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
