import { Header } from './components/Header';
import {BrowserRouter, Routes, Route } from 'react-router-dom';
import { Productos } from './components/Productos';
import { NuevoProducto } from './components/NuevoProducto';
import { EditarProducto } from './components/EditarProducto';
function App() {
  return (
   <BrowserRouter>
    <Header/>
    <div className='container mt-5'>
      <Routes>
        <Route exact path='/' element={<Productos/>}/>
        <Route path='/producto/nuevo' element={<NuevoProducto/>}/>
        <Route path='/producto/editar/:id' element={<EditarProducto/>}/>
      </Routes>
    </div>
   </BrowserRouter>
  );
}

export default App;
