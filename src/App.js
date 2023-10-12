import './App.css';
import { Routes,Route } from 'react-router-dom';
import Navbar from './Components/Navbar/Navbar';
import Footer from './Components/Footer/Footer';
import Home from './Pages/Home/Home';
import Series from './Pages/Series/Series';
import Films from './Pages/Films/Films';
import Login from './Pages/Login/Login';
import Search from './Pages/Search/Search';
import MoviesDetails from './Pages/MoviesDetails/MoviesDetails';
import SeriesDetails from './Pages/SeriesDetails/SeriesDetails';

function App() {

  return (
    <div className="App">
      <Navbar/>
      <Routes>
        <Route path='/' element= {<Home/>}/>
        <Route path='/films' element= {<Films/>}/>
        <Route path='/series' element= {<Series/>}/>
        <Route path='/login' element= {<Login/>}/>
        <Route path='/search' element= {<Search/>}/>
        <Route path='/films/:id' element= {<MoviesDetails/>}/>
        <Route path='/series/:id' element= {<SeriesDetails/>}/>
      </Routes>
      <Footer/> 
    </div>
  );
}

export default App;
