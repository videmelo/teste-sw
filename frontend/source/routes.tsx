import { Routes, Route } from 'react-router-dom';

import Layout from './layout';

import Home from './pages/Home';
import Unsubscribe from './pages/Unsubscribe';
import Confirm from './pages/Confirm';

export default function AppRoutes() {
   return (
      <Routes>
         <Route element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="unsubscribe" element={<Unsubscribe />} />
            <Route path="confirm" element={<Confirm />} />
         </Route>
      </Routes>
   );
}
