import { Route, Routes } from 'react-router-dom';
import { useState } from 'react';
import creepypastasData from './CreepypastasData.js';
import CreepypastaPage from './pages/CreepypastaPage';
import FullCreepypastaPage from './pages/FullCreepypastaPage';
import SpookmarkPage from './pages/SpookmarkPage';
import ScrollToTop from './components/ScrollToTop';

function App() {
  const [creepypastas, setCreepypastas] = useState(creepypastasData);

  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route
          path="/"
          element={
            <CreepypastaPage
              handleSpookmarkClick={handleSpookmarkClick}
              creepypastas={creepypastas}
            />
          }
        />

        <Route path="/fullcreepypasta" element={<FullCreepypastaPage />} />

        <Route
          path="/spookmarked"
          element={
            <SpookmarkPage
              spookmarkedCreepypastas={creepypastas.filter(
                creepypasta => creepypasta.isSpookmarked === true
              )}
              handleSpookmarkClick={handleSpookmarkClick}
              creepypastas={creepypastas}
            />
          }
        />
      </Routes>
    </>
  );

  function handleSpookmarkClick(id) {
    const saveCreepypasta = creepypastas.map(creepypasta => {
      if (creepypasta.id === id) {
        return { ...creepypasta, isSpookmarked: !creepypasta.isSpookmarked };
      } else {
        return creepypasta;
      }
    });
    setCreepypastas(saveCreepypasta);
  }
}

export default App;
