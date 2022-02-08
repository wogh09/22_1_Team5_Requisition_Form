import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Main from 'main';
import { Filter } from './filter/index';

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/filter" element={<Filter />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
