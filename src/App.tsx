import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from './store/store';
import Header from './components/Header/Header';
import GuideForm from './components/GuideForm/GuideForm';
import GuideList from './components/GuideList';
import StatusPanel from './components/StatusPanel';
import { addGuide, updateGuideStatus } from './store/guidesSlice';

const App: React.FC = () => {
  const guides = useSelector((state: RootState) => state.guides.guides);
  const dispatch = useDispatch();

  const handleAddGuide = (guide: { id: string; description: string }) => {
    dispatch(addGuide(guide));
  };

  const handleUpdateGuideStatus = (id: string) => {
    dispatch(updateGuideStatus(id));
  };

  return (
    <>
      <Header />
      <main id="inicio" className="main-container">
        <GuideForm addGuide={handleAddGuide} />
        <GuideList guides={guides} updateGuideStatus={handleUpdateGuideStatus} />
        <StatusPanel guides={guides} />
      </main>
      <footer className="footer" role="contentinfo">
        <p>© 2025 Hound Express. Todos los derechos reservados.</p>
      </footer>
    </>
  );
};

export default App;
