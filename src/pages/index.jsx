import { Routes, Route } from 'react-router-dom';
import { Homepage } from './homepage';

function Pages() {
  return (
    <Routes>
      <Route path="/" exact element={<Homepage />} />
    </Routes>
  );
}
export { Pages };
