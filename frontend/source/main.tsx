import { createRoot } from 'react-dom/client';

import { BrowserRouter } from 'react-router-dom';
import AppRoutes from './routes';

import './styles/globals.css';

createRoot(document.getElementById('root')!).render(
   <BrowserRouter>
      <AppRoutes />
   </BrowserRouter>
);
