import { useState } from 'react';
import { nanoid } from 'nanoid';
import css from './Form.module.css';

export const Form = ({onFormSubmit}) => {
 
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const handleChange = (evt) => {
    switch (evt.target.name) {
      case 'name':
        setName(evt.target.value);
        break;
      case 'number':
        setNumber(evt.target.value);
        break;
      default:
        return;
    }
  };

  const handleSubmit = evt => {
    evt.preventDefault();
    const contactId = nanoid();
    const newContact = {
      id: contactId,
      name: name,
      number: number,
    };
    onFormSubmit(newContact);
    reset();
  };

  const reset = () => {
    setName('');
    setNumber('');
  }

    return (
      <form className={css.form} onSubmit={handleSubmit}>
        <label className={css.label}>
          Name
          <input
            className={css.inputLabel}
            type="text"
            name="name"
            value={name}
            onChange={handleChange}
            pattern="^[a-zA-Zа-яА-Я]+(([' \-][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            required
          />
        </label>
        <label className={css.label}>
          Number
          <input
            className={css.inputLabel}
            type="tel"
            name="number"
            value={number}
            onChange={handleChange}
            pattern="\+?\d{1,4}?[ .\-\s]?\(?\d{1,3}?\)?[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,9}"
            required
          />
        </label>
        <button className={css.formBtn} type="submit">
          Add contact
        </button>
      </form>
    );
  }
