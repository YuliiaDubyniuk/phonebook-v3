import css from './SearchField.module.css';

export const SearchField = ({ value, onChange }) => (
  <label className={css.searchLabel}>
    Find contacts by name
    <input
      className={css.searchInput}
      type="text"
      name="filter"
      value={value}
      onChange={onChange}
    />
  </label>
);
