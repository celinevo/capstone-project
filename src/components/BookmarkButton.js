import styled from 'styled-components';
import { motion } from 'framer-motion';
import bookmarkIconActive from '../Images/redskull.svg';
import bookmarkIconInactive from '../Images/grayskull.svg';

export default function BookmarkButton({ isBookmarked, onBookmarkClick }) {
  return (
    <Bookmark whileTap={{ scale: 1.2 }} type="button" onClick={onBookmarkClick}>
      {isBookmarked ? (
        <img
          src={bookmarkIconActive}
          alt="Story is spookmarked"
          width="35px"
          height="35px"
        />
      ) : (
        <img
          src={bookmarkIconInactive}
          alt="Story is not spookmarked"
          width="35px"
          height="35px"
        />
      )}
    </Bookmark>
  );
}

const Bookmark = styled(motion.button)`
  border: none;
  background-color: transparent;
  position: absolute;
  top: -8%;
  right: 4%;
  z-index: 9;
  cursor: pointer;
`;
