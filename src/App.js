import { Route, Routes } from 'react-router-dom';
import CreepypastaPage from './pages/CreepypastaPage';
import FullCreepypastaPage from './pages/FullCreepypastaPage';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<CreepypastaPage />} />
        <Route path="/FullCreepypasta" element={<FullCreepypastaPage />} />
      </Routes>
    </>
  );
}

export default App;
