import './App.css';
import {Routes, Route} from 'react-router-dom';
import HomePage from './pages/HomePage/HomePage.jsx';
import CreatePage from './pages/CreatePage/CreatePage.jsx';
import DetailPage from './pages/DetailPage/DetailPage.jsx';
import NavBar from './components/NavBar/NavBar.jsx';

function App() {
  return (
    <div className="App">
      <NavBar/>
      <Routes>
        <Route path='/home' element={<HomePage />}/>
        <Route path='/create' element={<CreatePage />}/>
        <Route path='/detail/:id' element={<DetailPage />}/>
      </Routes>
    </div>
  );
}

export default App;
