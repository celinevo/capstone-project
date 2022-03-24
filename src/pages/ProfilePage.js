import { NavLink, Link } from 'react-router-dom';
import styled from 'styled-components';
import CustomCard from '../components/CustomCard.js';
import sparkles from '../Images/sparkles.svg';
import editPen from '../Images/pen_darkgray.svg';

export default function ProfilePage({
  writtenCreepypastas,
  handleBookmarkClick,
  handleDeleteCreepypasta,
  handleRedirectEdit,
  onBlur,
  onChange,
  onKeyDown,
  editingValue,
  image,
  upload,
}) {
  return (
    <>
      <Flex>
        <Wrapper>
          <Position>
            <div>
              {image ? (
                <PictureCropper>
                  <ProfilePicture
                    alt="Person that created this profile"
                    height="150px"
                    src={image}
                  />
                </PictureCropper>
              ) : (
                <input type="file" name="file" onChange={upload} />
              )}
            </div>
            <Input
              type="text"
              aria-label="Field name"
              onChange={onChange}
              onKeyDown={onKeyDown}
              value={editingValue}
              onBlur={onBlur}
              maxLength="10"
            />
            <img
              src={editPen}
              alt="You can edit the name next to the pen"
              height="25px"
            />
          </Position>
          <ProfileInfo>
            About me
            <NavLink to="/feelgood">
              <img
                width="45px"
                src={sparkles}
                alt="Icon of sprakles that lead, if pressed, to feel good page."
              />
            </NavLink>
          </ProfileInfo>
          <p>
            Welcome to my spooky scary page! I love everything that is horror,
            so I'm excited to be here!
          </p>
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
                  onBookmarkClick={() => handleBookmarkClick(creepypasta.id)}
                  isBookmarked={creepypasta.isBookmarked}
                  isWritten={creepypasta.isWritten}
                  handleDeleteCreepypasta={() =>
                    handleDeleteCreepypasta(creepypasta.id)
                  }
                  handleRedirectEdit={handleRedirectEdit}
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
    </>
  );
}

const Position = styled.div`
  display: flex;
  align-items: center;
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
  margin-left: -25%;
  height: 100%;
  width: auto;
`;

const Input = styled.input`
  background-color: transparent;
  border: none;
  padding: 0;
  margin-left: 15px;
  width: 50%;
  font-size: 35px;
  font-family: 'Creepster';
  &:hover {
    cursor: pointer;
  }
  @media (min-width: 600px) {
    height: 100%;
    width: 50%;
  }
`;

const ProfileInfo = styled.h2`
  margin: 15px 0px -20px 0px;
  font-family: 'Special Elite';
  letter-spacing: 1px;
  font-size: 23px;
  display: flex;
  align-items: center;
  gap: 15px;
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
