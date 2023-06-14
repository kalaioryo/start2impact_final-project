import './App.css';
import { GMap } from './components/GMap';
import { ItalyMap } from './components/ItalyMap';
// import DataView from './features/getData/DataView';
import ItalyView from './features/italy/ItalyView';
import RegionsView from './features/regions/RegionsView';
import Home from './pages/Home';

function App() {
  return (
    <div className="App">
      {/* <h1 className="text-3xl font-bold underline">
        Hello world!
      </h1> */}
      {/* <ItalyView/> */}
      <Home/>
    </div>
  );
}

export default App;
