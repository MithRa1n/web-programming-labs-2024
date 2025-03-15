import './Header.css';

const Header = () => {
    return (
        <header className="header">
            <h1>Фільмовий Каталог</h1>
            <ul className="nav-links">
                <li><a href="#">Головна</a></li>
                <li><a href="#">Каталог</a></li>
                <li><a href="#">Контакти</a></li>
            </ul>
        </header>
    );
};

export default Header;
