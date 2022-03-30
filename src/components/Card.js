import { Link } from 'react-router-dom';
import styled from 'styled-components';
import BookmarkButton from './BookmarkButton';
import { MainButton } from './Button';

export default function Creepypasta({
  title,
  image,
  wordcount,
  id,
  onBookmarkClick,
  isBookmarked,
}) {
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
      </Card>
    </Wrapper>
  );
}

const Wrapper = styled.section`
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
