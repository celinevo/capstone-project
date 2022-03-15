import { Route, Routes } from 'react-router-dom';
import { useState } from 'react';
import useLocalStorage from './hooks/useLocalStorage';
import creepypastasData from './CreepypastasData.js';
import CreepypastaPage from './pages/CreepypastaPage';
import FullCreepypastaPage from './pages/FullCreepypastaPage';
import ProfilePage from './pages/ProfilePage';
import ScrollToTop from './components/ScrollToTop';

function App() {
  const [creepypastas, setCreepypastas] = useLocalStorage(
    'creepy',
    creepypastasData
  );
  const [searchValue, setSearchValue] = useState('');

  return (
    <>
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
          path="/profilepage"
          element={
            <ProfilePage
              bookmarkedCreepypastas={creepypastas.filter(
                creepypasta => creepypasta.isBookmarked === true
              )}
              handleBookmarkClick={handleBookmarkClick}
              creepypastas={creepypastas}
            />
          }
        />
      </Routes>
    </>
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
}

export default App;
