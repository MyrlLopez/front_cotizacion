import './App.css';
import { Routes, Route, BrowserRouter} from 'react-router-dom';
import ComponentHome from './components/ComponentHome';
import ComponentCotizacion from  './components/ComponentCotizacion';
import ComponentProductos from './components/ComponentProductos';
import ComponentLogin from './components/ComponentLogin';
import ComponentUser from './components/ComponentUser';
import ComponentLoginValidation from './components/ComponentLoginValidation'


function App() {
  return (
    <BrowserRouter>
      <Routes>
      <Route path='/' element={<ComponentHome></ComponentHome>}></Route>
    <Route path='/cotizaciones' element={<ComponentCotizacion></ComponentCotizacion>}></Route>
    <Route path='/productos' element={<ComponentProductos></ComponentProductos>}></Route>
    <Route path='/login' element={<ComponentLogin></ComponentLogin>}></Route>
    <Route path='/user' element={<ComponentUser></ComponentUser>}></Route>
    <Route path='/loginValidation' element={<ComponentLoginValidation></ComponentLoginValidation>}></Route>    

    </Routes>
    </BrowserRouter>


  );
}

export default App;
