import { useEffect } from 'react';
import './App.css';
// import { GMap } from './components/GMap';
// import { ItalyMap } from './components/ItalyMap';
// import DataView from './features/getData/DataView';
// import ItalyView from './features/italy/ItalyView';
// import RegionsView from './features/regions/RegionsView';
import Home from './pages/Home';
import { useDispatch } from 'react-redux';
import { fetchDataRegionsLatest } from './features/regionsLatest/regionsLatestSlice';
import { fetchDataItaly } from './features/italy/italySlice';
import { fetchDataRegions } from './features/regions/regionsSlice';

function App() {
  const dispatch = useDispatch()

  useEffect(()=>{
    dispatch(fetchDataRegionsLatest())
    dispatch(fetchDataItaly())
    dispatch(fetchDataRegions())
  },[])
  return (
    <div className="App">
      <Home/>
    </div>
  );
}

export default App;
