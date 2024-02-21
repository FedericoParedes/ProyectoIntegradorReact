
import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Routes } from 'react-router-dom';
import TarjetaDetalle from './components/TarjetaDetalle';
import Catalogo from './components/Catalogo';
import Visualizer from './components/Visualizer';
import Buscador from './components/Buscador';
import Home from './components/Home'

function App() {
  
 
  return (
        <>
         <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/catalogo-peliculas' element={<Catalogo/>}/>
            <Route path='/tarjeta-detalle/:id' element={<TarjetaDetalle/>}/>
            <Route path='/visualizer' element={<Visualizer/>}/>
            <Route path='/buscador-peliculas' element={<Buscador/>}/>

          </Routes> 
        </> 
  )
}

export default App


