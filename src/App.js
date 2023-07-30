
import './App.css';
import {
  Routes,
  Route
} from 'react-router-dom';

import Navegar from './componentes/Navegar';
import Formulario from './componentes/Formulario';
import About from './componentes/About';
import Login from './componentes/Login';
import Error from'./componentes/Error';
import Home from './componentes/Home';
import Productos from './componentes/Productos'



function App() {
  return (
    <div>
    <Navegar />
    <Routes>
      <Route index element={ <Home /> }></Route>
      <Route path='/Formulario' element={<Formulario />}></Route>
      <Route path='/About' element={ <About />}></Route>
      <Route path='/Login' element={ <Login />}></Route>
      <Route path='/Productos' element={ <Productos />}></Route>
      <Route path='*' element={ <Error />}></Route>
    </Routes>
    </div>
  );
}

export default App;
