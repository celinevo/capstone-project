import styled from 'styled-components';
import SpookmarkIconActive from '../Images/redskull.svg';
import SpookmarkIconInactive from '../Images/grayskull.svg';

export default function SpookmarkButton({ isSpookmarked, onSpookmarkClick }) {
  return (
    <Spookmark type="button" onClick={onSpookmarkClick}>
      {isSpookmarked ? (
        <img
          src={SpookmarkIconActive}
          alt="Story is spookmarked"
          width="35px"
        />
      ) : (
        <img
          src={SpookmarkIconInactive}
          alt="Story is not spookmarked"
          width="35px"
        />
      )}
    </Spookmark>
  );
}

const Spookmark = styled.button`
  border: none;
  background-color: transparent;
  position: absolute;
  top: -8%;
  right: 4%;
  z-index: 100;
`;
