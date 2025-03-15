import './Header.css';
import { Link } from 'react-router-dom';


const Header = () => {
    return (
        <header className="header">
            <h1>Фільмовий Каталог</h1>
            <ul className="nav-links">
                <li> <Link to="/">Home</Link> </li>
                <li> <Link to="/catalog">Catalog</Link> </li>
                <li> <Link to="/Cart">Cart</Link> </li>
            </ul>
        </header>
    );
};

export default Header;