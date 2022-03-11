import styled from 'styled-components';
import { Link } from 'react-router-dom';
import BookmarkButton from './BookmarkButton';

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
        <ReadMoreButton>
          <ReadMoreButtonText to="/fullcreepypasta" state={{ id: id }}>
            Read
          </ReadMoreButtonText>
        </ReadMoreButton>
      </Card>
    </Wrapper>
  );
}

const Wrapper = styled.section`
  overflow: visible;
  position: relative;
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
