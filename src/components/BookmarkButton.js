import styled from 'styled-components';
import BookmarkIconActive from '../Images/redskull.svg';
import BookmarkIconInactive from '../Images/grayskull.svg';

export default function BookmarkButton({ isBookmarked, onBookmarkClick }) {
  return (
    <Bookmark type="button" onClick={onBookmarkClick}>
      {isBookmarked ? (
        <img src={BookmarkIconActive} alt="Story is spookmarked" width="35px" />
      ) : (
        <img
          src={BookmarkIconInactive}
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
