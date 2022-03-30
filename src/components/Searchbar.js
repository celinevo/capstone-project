import styled from 'styled-components';

export default function Searchbar({ onChange, searchValue }) {
  return (
    <SearchForm>
      <label htmlFor="search-input"></label>
      <InputField
        aria-label="Search Spookie Story"
        maxLength={25}
        onChange={onChange}
        value={searchValue}
        name="search-input"
        type="text"
        placeholder=" Search Spookie Story"
      />
    </SearchForm>
  );
}

const SearchForm = styled.form`
  display: grid;
  margin-top: 8px;
  margin-bottom: 12px;
`;

const InputField = styled.input`
  border-radius: 6px;
  padding-bottom: 0px;
  border: 2px solid var(--passive);
  cursor: pointer;
  &:focus {
    outline: none;
    border: 3px solid var(--active-main);
  }
  @media (min-width: 500px) {
    height: 100%;
    width: 400px;
    place-self: center;
  }
`;
