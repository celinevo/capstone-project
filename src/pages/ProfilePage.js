import { Link } from 'react-router-dom';
import styled from 'styled-components';
import CustomCard from '../components/CustomCard.js';
import Profile from '../components/Profile.js';
import PageSwitchAnimation from '../components/PageSwitchAnimation.js';

export default function ProfilePage({
  writtenCreepypastas,
  onBookmarkClick,
  onDeleteCreepypasta,
  onRedirectEdit,
}) {
  return (
    <PageSwitchAnimation>
      <Flex>
        <Wrapper>
          <Profile />
          <PageDirection>
            <ActiveLink to="/profile">My Stories</ActiveLink>
            <InactiveLink to="/profile/spookmarked">Spookmarked</InactiveLink>
          </PageDirection>
          <Format>
            {writtenCreepypastas.length > 0 ? (
              writtenCreepypastas.map(creepypasta => (
                <CustomCard
                  key={creepypasta.id}
                  id={creepypasta.id}
                  title={creepypasta.title}
                  image={creepypasta.image}
                  wordcount={creepypasta.wordcount}
                  onBookmarkClick={() => onBookmarkClick(creepypasta.id)}
                  isBookmarked={creepypasta.isBookmarked}
                  isWritten={creepypasta.isWritten}
                  onDeleteCreepypasta={() =>
                    onDeleteCreepypasta(creepypasta.id)
                  }
                  onRedirectEdit={onRedirectEdit}
                />
              ))
            ) : (
              <>
                <h3>It's ghostly quiet in here...</h3>
                <p>You need to create a story to see it here!</p>
              </>
            )}
          </Format>
        </Wrapper>
      </Flex>
    </PageSwitchAnimation>
  );
}

const Flex = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 25px 20px 20px 20px;
`;

const Wrapper = styled.section`
  position: relative;
  margin-bottom: 50px;
  @media (min-width: 500px) {
    height: 100%;
    width: 500px;
  }
`;

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
