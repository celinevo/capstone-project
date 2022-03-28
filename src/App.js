import { Route, Routes, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import useLocalStorage from './hooks/useLocalStorage';
import creepypastasData from './CreepypastasData.js';
import CreepypastaPage from './pages/CreepypastaPage';
import FullCreepypastaPage from './pages/FullCreepypastaPage';
import CreatePage from './pages/CreatePage';
import ProfilePage from './pages/ProfilePage';
import ProfileBookmarkPage from './pages/ProfileBookmarkPage';
import FeelGoodPage from './pages/FeelGoodPage';
import EditCreepypasta from './pages/EditCreepypasta.js';
import Navigation from './components/Navigation.js';
import ScrollToTop from './components/ScrollToTop';

const CLOUDNAME = process.env.REACT_APP_CLOUDINARY_CLOUDNAME;
const PRESET = process.env.REACT_APP_CLOUDINARY_PRESET;

export default function App() {
  const [creepypastas, setCreepypastas] = useLocalStorage(
    'creepy',
    creepypastasData
  );
  const [searchValue, setSearchValue] = useState('');
  const [creepypastaEdit, setCreepypastaEdit] = useState([]);
  const [profileImage, setProfileImage] = useLocalStorage('ProfileImage', '');
  const [nameValue, setNameValue] = useLocalStorage('NameKey', 'Your name');
  const [nameEditingValue, setNameEditingValue] = useState(nameValue);
  const [infoValue, setInfoValue] = useLocalStorage(
    'InfoKey',
    'Here you can write something about yourself!'
  );
  const [infoEditingValue, setInfoEditingValue] = useState(infoValue);

  const navigate = useNavigate();

  // Edit profile name and info
  const onNameChange = event => setNameEditingValue(event.target.value);
  const onInfoChange = event => setInfoEditingValue(event.target.value);

  const onNameBlur = event => {
    if (event.target.value.trim() === '') {
      setNameEditingValue(nameValue);
    } else {
      setNameValue(event.target.value);
    }
  };

  const onInfoBlur = event => {
    if (event.target.value.trim() === '') {
      setInfoEditingValue(infoValue);
    } else {
      setInfoValue(event.target.value);
    }
  };

  const onKeyDown = event => {
    if (event.key === 'Enter' || event.key === 'Escape') {
      event.target.blur();
    }
  };

  return (
    <AppGrid>
      <ScrollToTop />
      <Routes>
        <Route
          path="/"
          element={
            <CreepypastaPage
              handleBookmarkClick={handleBookmarkClick}
              searchValue={searchValue}
              creepypastas={creepypastas}
              handleChange={handleChange}
            />
          }
        />

        <Route
          path="/fullcreepypasta"
          element={<FullCreepypastaPage creepypastas={creepypastas} />}
        />

        <Route
          path="/profile"
          element={
            <ProfilePage
              handleBookmarkClick={handleBookmarkClick}
              creepypastas={creepypastas}
              nameEditingValue={nameEditingValue}
              infoEditingValue={infoEditingValue}
              onNameChange={onNameChange}
              onInfoChange={onInfoChange}
              onNameBlur={onNameBlur}
              onInfoBlur={onInfoBlur}
              onKeyDown={onKeyDown}
              profileImage={profileImage}
              profileUpload={profileUpload}
              handleDeleteCreepypasta={handleDeleteCreepypasta}
              handleRedirectEdit={handleRedirectEdit}
              writtenCreepypastas={creepypastas.filter(
                creepypasta => creepypasta.isWritten === true
              )}
            />
          }
        ></Route>

        <Route
          path="/profile/spookmarked"
          element={
            <ProfileBookmarkPage
              bookmarkedCreepypastas={creepypastas.filter(
                creepypasta => creepypasta.isBookmarked === true
              )}
              handleBookmarkClick={handleBookmarkClick}
              creepypastas={creepypastas}
              nameEditingValue={nameEditingValue}
              infoEditingValue={infoEditingValue}
              onNameChange={onNameChange}
              onInfoChange={onInfoChange}
              onNameBlur={onNameBlur}
              onInfoBlur={onInfoBlur}
              onKeyDown={onKeyDown}
              profileImage={profileImage}
              profileUpload={profileUpload}
            />
          }
        />

        <Route
          path="/create"
          element={
            <CreatePage
              handleCreateCreepypasta={handleCreateCreepypasta}
              handleRedirectEdit={handleRedirectEdit}
            />
          }
        />

        <Route
          path="/edit-creepypasta"
          element={
            <EditCreepypasta
              onEditCreepypasta={handleEditCreepypasta}
              creepypastaEdit={creepypastaEdit}
            />
          }
        />
        <Route path="/feelgood" element={<FeelGoodPage />} />
      </Routes>
      <Navigation />
    </AppGrid>
  );

  // Bookmark
  function handleBookmarkClick(id) {
    const saveCreepypasta = creepypastas.map(creepypasta => {
      if (creepypasta.id === id) {
        return { ...creepypasta, isBookmarked: !creepypasta.isBookmarked };
      } else {
        return creepypasta;
      }
    });
    setCreepypastas(saveCreepypasta);
  }

  // Searchbar
  function handleChange(event) {
    setSearchValue(event.target.value.trim().toLowerCase());
  }

  // Create a creepypasta
  function handleCreateCreepypasta(createdCreepypasta) {
    setCreepypastas([createdCreepypasta, ...creepypastas]);
  }

  // Delete a creepypasta
  function handleDeleteCreepypasta(id) {
    setCreepypastas(creepypastas.filter(creepypasta => creepypasta.id !== id));
  }

  // Edit a creepypasta
  function handleEditCreepypasta(editedCreepypasta) {
    const oldCreepypastas = creepypastas.filter(
      creepypasta => creepypasta.id !== editedCreepypasta.id
    );

    setCreepypastas([editedCreepypasta, ...oldCreepypastas]);
    navigate(-1);
  }

  function handleRedirectEdit(id) {
    setCreepypastaEdit(
      creepypastas.filter(creepypasta => creepypasta.id === id)
    );
    navigate('/edit-creepypasta');
  }

  // Profile picture upload with Cloudinary
  function profileUpload(event) {
    const url = `https://api.cloudinary.com/v1_1/${CLOUDNAME}/image/upload`;

    const formData = new FormData();
    formData.append('file', event.target.files[0]);
    formData.append('upload_preset', PRESET);

    axios
      .post(url, formData, {
        headers: {
          'Content-type': 'multipart/form-data',
        },
      })
      .then(onProfileImageSave)
      .catch(err => console.error(err));
  }

  function onProfileImageSave(response) {
    setProfileImage(response.data.url);
  }
}

const AppGrid = styled.div`
  height: 100vh;
`;
