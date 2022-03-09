import { Route, Routes } from 'react-router-dom';
import CreepypastaPage from './pages/CreepypastaPage';
import FullCreepypastaPage from './pages/FullCreepypastaPage';
import ScrollToTop from './components/ScrollToTop';

function App() {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<CreepypastaPage />} />
        <Route path="/fullcreepypasta" element={<FullCreepypastaPage />} />
      </Routes>
    </>
  );
}

export default App;
