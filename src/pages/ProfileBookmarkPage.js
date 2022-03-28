import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Card from '../components/Card.js';
import Profile from '../components/Profile.js';

export default function ProfileBookmarkPage({
  onBookmarkClick,
  bookmarkedCreepypastas,
}) {
  return (
    <>
      <Flex>
        <Wrapper>
          <Profile />
          <PageDirection>
            <InactiveLink to="/profile">My Stories</InactiveLink>
            <ActiveLink to="/profile-spookmarked">Spookmarked</ActiveLink>
          </PageDirection>
          <Format>
            {bookmarkedCreepypastas.length > 0 ? (
              bookmarkedCreepypastas.map(creepypasta => (
                <Card
                  key={creepypasta.id}
                  id={creepypasta.id}
                  title={creepypasta.title}
                  image={creepypasta.image}
                  wordcount={creepypasta.wordcount}
                  onBookmarkClick={() => onBookmarkClick(creepypasta.id)}
                  isBookmarked={creepypasta.isBookmarked}
                />
              ))
            ) : (
              <>
                <h3>It's ghostly quiet in here...</h3>
                <p>You need to spookmark a story to see it here!</p>
              </>
            )}
          </Format>
        </Wrapper>
      </Flex>
    </>
  );
}

const PageDirection = styled.h3`
  display: flex;
  justify-content: space-evenly;
  font-size: 18px;
  padding-top: 2px;
  margin: 0px -20px 10px -20px;
  border: 1px solid var(--passive);
  border-left: 0px;
  border-right: 0px;
`;

const ActiveLink = styled(Link)`
  text-decoration: none;
  color: var(--active-main);
`;

const InactiveLink = styled(Link)`
  text-decoration: none;
  color: var(--text-main);
`;

const Format = styled.div`
  display: grid;
  gap: 2px;
`;

const Wrapper = styled.section`
  position: relative;
  margin-bottom: 50px;
  @media (min-width: 500px) {
    height: 100%;
    width: 500px;
  }
`;

const Flex = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 25px 20px 20px 20px;
`;
