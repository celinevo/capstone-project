import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import TrashIcon from '../Images/trash_red.svg';
import BookmarkButton from './BookmarkButton';
import Delete from './Delete';

export default function CustomCard({
  title,
  image,
  wordcount,
  id,
  onBookmarkClick,
  isBookmarked,
  handleDeleteCreepypasta,
}) {
  const [showMessage, setShowMessage] = useState(false);

  return (
    <Grid>
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
          <ReadMoreButton>
            <ReadMoreButtonText to="/fullcreepypasta" state={{ id: id }}>
              Read
            </ReadMoreButtonText>
          </ReadMoreButton>
          <DeleteIcon onClick={() => setShowMessage(true)}>
            <img src={TrashIcon} alt="Delete this creepypasta" width="35px" />
          </DeleteIcon>
        </Card>
        {showMessage && (
          <Delete
            onConfirmDelete={handleDelete}
            onCancelDelete={() => setShowMessage(false)}
          />
        )}
      </Wrapper>
    </Grid>
  );

  function handleDelete() {
    setShowMessage(false);
    handleDeleteCreepypasta();
  }
}

const Grid = styled.section`
  display: grid;
  margin: 20px 0px 10px 0px;
`;

const Wrapper = styled.div`
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
  background-color: rgba(0, 0, 0, 0.4);
  border-radius: 6px;
`;

const Title = styled.h3`
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  margin: 8px;
`;

const Wordcount = styled.p`
  margin: 0px;
`;

const ReadMoreButton = styled.div`
  margin-top: 15px;
  background-color: #990000;
  border: none;
  border-radius: 6px;
  padding: 5px 10px 2px 10px;
  position: absolute;
  top: 65%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 1;
`;

const ReadMoreButtonText = styled(Link)`
  z-index: 2;
  text-decoration: none;
  color: #e6e6e6;
`;

const DeleteIcon = styled.button`
  background-color: transparent;
  border: none;
  position: absolute;
  right: 4%;
  bottom: 5%;
`;
