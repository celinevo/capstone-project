import styled from 'styled-components';
import bookmarkIconActive from '../Images/redskull.svg';
import bookmarkIconInactive from '../Images/grayskull.svg';

export default function BookmarkButton({ isBookmarked, onBookmarkClick }) {
  return (
    <Bookmark type="button" onClick={onBookmarkClick}>
      {isBookmarked ? (
        <img src={bookmarkIconActive} alt="Story is spookmarked" width="35px" />
      ) : (
        <img
          src={bookmarkIconInactive}
          alt="Story is not spookmarked"
          width="35px"
        />
      )}
    </Bookmark>
  );
}

const Bookmark = styled.button`
  border: none;
  background-color: transparent;
  position: absolute;
  top: -8%;
  right: 4%;
  z-index: 9;
  cursor: pointer;
`;
