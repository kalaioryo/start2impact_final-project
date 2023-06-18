import React from 'react';
import ReactDOM from 'react-dom/client';

// import { useDispatch } from 'react-redux';
// import { fetchDataRegionsLatest } from './features/regionsLatest/regionsLatestSlice';
// import { fetchDataItaly } from './features/italy/italySlice';
// import { fetchDataRegions } from './features/regions/regionsSlice';


import store from './store/store';

import App from './App';
import { Provider } from 'react-redux';

import { RouterProvider } from 'react-router-dom';
import { router } from './routes';

import './index.css';

// dispatch(fetchDataRegionsLatest())
// dispatch(fetchDataItaly())
// dispatch(fetchDataRegions())


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router}/>
      {/* <App /> */}
    </Provider>
    
  </React.StrictMode>
);

