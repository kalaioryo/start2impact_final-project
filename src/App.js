import { useEffect } from 'react';
import './App.css';

import { useDispatch } from 'react-redux';
import { fetchDataRegionsLatest } from './features/regionsLatest/regionsLatestSlice';
import { fetchDataItaly } from './features/italy/italySlice';
import { fetchDataRegions } from './features/regions/regionsSlice';

import { RouterProvider } from 'react-router-dom';
import { router } from './routes';

import Sidebar from './components/Sidebar'
import SidebarMobile from './components/SidebarMobile';

function App() {
  const dispatch = useDispatch()

  useEffect(()=>{
    dispatch(fetchDataRegionsLatest())
    dispatch(fetchDataItaly())
    dispatch(fetchDataRegions())
  },[])

  return (
    <div className="App bg-quinary bg-opacity-70">
      {/* <SidebarMobile/> */}

      {/* <RouterProvider router={router} /> */}


      {/* <div 
      // className='sm:pl-20 '
      className='pt-14'
      >
        <MapPage/>
      </div>
       */}
    </div>
  );
}

export default App;
