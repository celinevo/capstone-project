import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export default function ProfilePage() {
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
            <ProfileName>Creeps</ProfileName>
          </Position>
          <ProfileInfo>About me</ProfileInfo>
          <p>
            Welcome to my spooky scary page! I love everything horror, so I'm
            excited to be here!
          </p>
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
  margin-left: 40px;
  font-size: 40px;
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
