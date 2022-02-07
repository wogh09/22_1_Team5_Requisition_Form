import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Main from './main';
import Cardbox from 'cardbox/Cardbox';

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/card" element={<Cardbox />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
