import css from './ContactItem.module.css';

export const ContactItem = ({ id, name, number, deleteContact }) => (
  <li className={css.listItem}>
    {`${name}: ${number}`}
    <button
      className={css.deleteBtn}
      type="button"
      onClick={() => deleteContact(id)}
    >
      Delete
    </button>
  </li>
);
