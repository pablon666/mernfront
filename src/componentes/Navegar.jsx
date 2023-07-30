import Nav from 'react-bootstrap/Nav';
import { NavLink,Outlet } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

function Navegar() {
    return (
        <Nav className='navbar text-bg-dark text-center'
        activeKey="/home"
        onSelect={(selectedKey) => alert(`selected ${selectedKey}`)}
        >
        <Nav.Item>
            <NavLink to='/'>Home</NavLink>
        </Nav.Item>
        <Nav.Item>
            <NavLink to='/Formulario' eventKey="link-1">Registro</NavLink>
        </Nav.Item>
        <Nav.Item>
            <NavLink to='/Login' eventKey="link-2">Logeate</NavLink>
        </Nav.Item>
        <Nav.Item>
            <NavLink to='/About' eventKey="link-3">
            ¿Quienes son?
            </NavLink>
        </Nav.Item>
        <Nav.Item>
            <NavLink to='/Productos' eventKey="link-3">nuestros usuarios mas corruptos</NavLink>
        </Nav.Item>
        <Outlet />
        </Nav>
    );
}

export default Navegar;