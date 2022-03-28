import styled from 'styled-components';

export default function Searchbar({ onChange, searchValue }) {
  return (
    <SearchForm>
      <label htmlFor="search-input">
        <VisuallyHidden>Search Spookie Story</VisuallyHidden>
      </label>
      <InputField
        aria-label="search-input"
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

const VisuallyHidden = styled.p`
  clip: rect(0 0 0 0);
  clip-path: inset(50%);
  height: 1px;
  overflow: hidden;
  position: absolute;
  white-space: nowrap;
  width: 1px;
`;
