import { Outlet, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';

export default function Layout() {
   const location = useLocation();
   return (
      <div className="card p-10 rounded-4xl max-w-[1215px] w-full h-fit flex items-center">
         <AnimatePresence mode="wait">
            <motion.div
               key={location.pathname}
               initial={{ opacity: 0, y: 20 }}
               animate={{ opacity: 1, y: 0 }}
               exit={{ opacity: 0, y: -20 }}
               transition={{ duration: 0.4 }}
               className="flex items-center w-full p-10 justify-center"
            >
               <Outlet />
            </motion.div>
         </AnimatePresence>
      </div>
   );
}
