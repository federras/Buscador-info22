import './Header.css'


const Header = () => {
    return(
        <header className="header">
            <figure className="header__logo">
                <a href="/buscador">
                    <img src="/img/logo-horizontal.png" alt="logo" />
                </a>
            </figure>
            <nav className='nav'>
                <ul className='nav__menu'>
                    <li>
                        <a href="/buscador">Home</a>
                    </li>
                    <li>
                        <a href="/">Help</a>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default Header;