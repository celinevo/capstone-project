import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { motion } from 'framer-motion';
import BookmarkButton from './BookmarkButton';
import Delete from './Delete';
import { MainButton } from './Button';
import trashIcon from '../Images/trash_red.svg';
import penIcon from '../Images/pen_red.svg';

export default function CustomCard({
  title,
  image,
  wordcount,
  id,
  onBookmarkClick,
  isBookmarked,
  onDeleteCreepypasta,
  onRedirectEdit,
}) {
  const [showMessage, setShowMessage] = useState(false);

  return (
    <Wrapper>
      <BookmarkButton
        onBookmarkClick={onBookmarkClick}
        isBookmarked={isBookmarked}
      />
      <Card
        style={{
          backgroundImage: `url(${image})`,
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
        }}
      >
        <CardContent>
          <Title>{title}</Title>
          <Wordcount>{wordcount} Words</Wordcount>
        </CardContent>
        <ReadMorePosition>
          <MainButton>
            <ReadMoreButtonText to="/fullcreepypasta" state={{ id: id }}>
              Read
            </ReadMoreButtonText>
          </MainButton>
        </ReadMorePosition>
        <EditIcon onClick={() => onRedirectEdit(id)}>
          <motion.img
            src={penIcon}
            alt="Edit this creepypasta"
            width="35px"
            whileTap={{ scale: 1.2 }}
          />
        </EditIcon>
        <DeleteIcon onClick={() => setShowMessage(true)}>
          <motion.img
            src={trashIcon}
            alt="Delete this creepypasta"
            width="35px"
            whileTap={{ scale: 1.2 }}
          />
        </DeleteIcon>
      </Card>
      {showMessage && (
        <Delete
          onConfirmDelete={handleDelete}
          onCancelDelete={() => setShowMessage(false)}
        />
      )}
    </Wrapper>
  );

  function handleDelete() {
    setShowMessage(false);
    onDeleteCreepypasta();
  }
}

const Wrapper = styled.div`
  display: grid;
  margin: 20px 0px 10px;
  overflow: visible;
  position: relative;
  align-content: center;
  @media (min-width: 500px) {
    height: 200px;
    width: 400px;
    place-self: center;
  }
`;

const Card = styled.div`
  height: 200px;
  width: 100%;
  position: relative;
  border-radius: 6px;
`;

const CardContent = styled.div`
  position: absolute;
  top: 40%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  flex-wrap: wrap;
  background-color: var(--bg-picture);
  border-radius: 6px;
`;

const Title = styled.p`
  white-space: nowrap;
  margin: 8px;
  font-size: 22px;
  font-weight: bold;
`;

const Wordcount = styled.p`
  margin: 0px;
`;

const ReadMorePosition = styled.div`
  position: absolute;
  top: 75%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 1;
`;

const ReadMoreButtonText = styled(Link)`
  z-index: 2;
  text-decoration: none;
  color: var(--text-main);
`;

const DeleteIcon = styled.button`
  background-color: transparent;
  border: none;
  position: absolute;
  left: 4%;
  bottom: 5%;
  cursor: pointer;
`;

const EditIcon = styled.button`
  background-color: transparent;
  border: none;
  position: absolute;
  left: 4%;
  bottom: 35%;
  cursor: pointer;
  z-index: 2;
`;
