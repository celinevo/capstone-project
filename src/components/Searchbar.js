import styled from 'styled-components';

export default function Searchbar({ handleChange, searchValue }) {
  return (
    <form>
      <label htmlFor="search-input">
        <VisuallyHidden>Search Spookie Story</VisuallyHidden>
      </label>
      <input
        aria-label="search-input"
        onChange={handleChange}
        value={searchValue}
        name="search-input"
        type="text"
        placeholder="Search Spookie Story"
      />
    </form>
  );
}

const VisuallyHidden = styled.p`
  clip: rect(0 0 0 0);
  clip-path: inset(50%);
  height: 1px;
  overflow: hidden;
  position: absolute;
  white-space: nowrap;
  width: 1px;
`;
