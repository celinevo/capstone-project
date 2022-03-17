import { Route, Routes } from 'react-router-dom';
import { useState } from 'react';
import styled from 'styled-components';
import useLocalStorage from './hooks/useLocalStorage';
import creepypastasData from './CreepypastasData.js';
import CreepypastaPage from './pages/CreepypastaPage';
import FullCreepypastaPage from './pages/FullCreepypastaPage';
import ProfilePage from './pages/ProfilePage';
import ProfilePageBookmark from './pages/ProfilePageBookmark';
import CreatePage from './pages/CreatePage';
import ScrollToTop from './components/ScrollToTop';
import Navigation from './components/Navigation.js';

export default function App() {
  const [creepypastas, setCreepypastas] = useLocalStorage(
    'creepy',
    creepypastasData
  );
  const [searchValue, setSearchValue] = useState('');

  return (
    <AppGrid>
      <ScrollToTop />
      <Routes>
        <Route
          path="/"
          element={
            <CreepypastaPage
              handleBookmarkClick={handleBookmarkClick}
              creepypastas={creepypastas}
              searchValue={searchValue}
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
              creepypastas={creepypastas}
              handleBookmarkClick={handleBookmarkClick}
              handleDeleteCreepypasta={handleDeleteCreepypasta}
              writtenCreepypastas={creepypastas.filter(
                creepypasta => creepypasta.isWritten === true
              )}
            />
          }
        ></Route>

        <Route
          path="/profile/:spookmarked"
          element={
            <ProfilePageBookmark
              bookmarkedCreepypastas={creepypastas.filter(
                creepypasta => creepypasta.isBookmarked === true
              )}
              handleBookmarkClick={handleBookmarkClick}
              creepypastas={creepypastas}
            />
          }
        />

        <Route
          path="/create"
          element={
            <CreatePage handleCreateCreepypasta={handleCreateCreepypasta} />
          }
        />
      </Routes>
      <Navigation />
    </AppGrid>
  );

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

  function handleChange(event) {
    setSearchValue(event.target.value.trim().toLowerCase());
  }

  function handleCreateCreepypasta(createdCreepypasta) {
    setCreepypastas([createdCreepypasta, ...creepypastas]);
  }

  function handleDeleteCreepypasta(id) {
    setCreepypastas(creepypastas.filter(creepypasta => creepypasta.id !== id));
  }
}

const AppGrid = styled.div`
  height: 100vh;
  display: grid;
`;
