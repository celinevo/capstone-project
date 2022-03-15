import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import Card from '../components/Card.js';

export default function ProfilePage({
  handleBookmarkClick,
  bookmarkedCreepypastas,
}) {
  return (
    <>
      <Navigation>
        <Link to="/">All</Link>
        <Link to="/spookmarked">Spookmarked</Link>
      </Navigation>
      <Flex>
        <Wrapper>
          <Position>
            <PictureCropper>
              <ProfilePicture
                alt="Person that created this profile"
                height="150px"
                src="https://images.unsplash.com/photo-1487174244970-cd18784bb4a4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1173&q=80"
              />
            </PictureCropper>
            <ProfileName>Creepster</ProfileName>
          </Position>
          <ProfileInfo>About me</ProfileInfo>
          <p>
            Welcome to my spooky scary page! I love everything horror, so I'm
            excited to be here!
          </p>
          <Header>Spookmarked</Header>
          {bookmarkedCreepypastas.length > 0 ? (
            bookmarkedCreepypastas.map(creepypasta => (
              <Card
                key={creepypasta.id}
                id={creepypasta.id}
                title={creepypasta.title}
                image={creepypasta.image}
                wordcount={creepypasta.wordcount}
                onBookmarkClick={() => handleBookmarkClick(creepypasta.id)}
                isBookmarked={creepypasta.isBookmarked}
              />
            ))
          ) : (
            <>
              <h3>It's ghostly quiet in here...</h3>
              <p>You need to spookmark a story to see it here!</p>
            </>
          )}
        </Wrapper>
      </Flex>
    </>
  );
}

const Navigation = styled.nav`
  display: flex;
  justify-content: flex-end;
`;

const Link = styled(NavLink)`
  text-decoration: none;
  color: #e6e6e6;
  margin: 10px;
`;

const Position = styled.div`
  display: flex;
  align-items: center;
  margin: 10px 0px 0px 0px;
`;

const ProfileName = styled.h1`
  margin-left: 30px;
  font-size: 35px;
`;

const PictureCropper = styled.div`
  width: 125px;
  height: 125px;
  position: relative;
  overflow: hidden;
  border-radius: 50%;
`;

const ProfilePicture = styled.img`
  display: inline;
  margin: 0 auto;
  margin-left: -25%;
  height: 100%;
  width: auto;
`;

const ProfileInfo = styled.h2`
  margin: 20px 0px -15px 0px;
  font-family: 'Special Elite';
  letter-spacing: 1px;
  font-size: 23px;
`;

const Header = styled.h3`
  text-align: center;
  font-size: 18px;
  padding-top: 2px;
  margin: 0px -20px 25px -20px;
  border: 1px solid #4d4d4d;
  border-left: 0px;
  border-right: 0px;
`;

const Wrapper = styled.section`
  position: relative;
  @media (min-width: 500px) {
    height: 200px;
    width: 500px;
  }
`;

const Flex = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0px 20px 20px 20px;
`;