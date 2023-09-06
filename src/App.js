import { Route,Routes } from 'react-router-dom';
import './App.css';
import { Home } from './home';
import { Add } from './adddata';
import { Scan } from './scan';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/adddata' element={<Add />}></Route>
        <Route path='/scan' element={<Scan />}></Route>
      </Routes>
    </div>
  );
}

export default App;
