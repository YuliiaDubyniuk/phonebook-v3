import { ContactItem } from 'components/ContactItem/ContactItem';
import css from './Contacts.module.css';

export const Contacts = ({ contacts, deleteContact }) => (
  <ul className={css.contactList}>
    {contacts.map(({ id, name, number }) => (
      <ContactItem
        key={id}
        id={id}
        name={name}
        number={number}
        deleteContact={() => deleteContact(id)}
      />
    ))}
  </ul>
);
