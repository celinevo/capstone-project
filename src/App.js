import { Route, Routes } from 'react-router-dom';
import useLocalStorage from './hooks/useLocalStorage';
import creepypastasData from './CreepypastasData.js';
import CreepypastaPage from './pages/CreepypastaPage';
import FullCreepypastaPage from './pages/FullCreepypastaPage';
import BookmarkPage from './pages/BookmarkPage';
import ScrollToTop from './components/ScrollToTop';

function App() {
  const [creepypastas, setCreepypastas] = useLocalStorage(
    'creepy',
    creepypastasData
  );

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
            />
          }
        />

        <Route path="/fullcreepypasta" element={<FullCreepypastaPage />} />

        <Route
          path="/spookmarked"
          element={
            <BookmarkPage
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
}

export default App;
