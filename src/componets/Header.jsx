import { NavLink } from 'react-router-dom'; // Import NavLink for client-side navigation
import '../componets/components-style/header-style.scss'
import { AppstoreTwoTone } from "@ant-design/icons";

const Header = () => {
    // List of navigation titles
    const navTitles = ["Home", "Portfolio", "About", "Contact"];

    return (
        <header className='header'>
            <div className='navigator'>
                <ul className='nav-list'>
                    {navTitles.map((value, index) => {
                        // Convert each title to a lowercase path
                        const path = `/${value.toLowerCase()}`;

                        // Use NavLink instead of <a> for client-side routing
                        // NavLink will not cause the page to reload, unlike <a> tags
                        return (
                            <li key={index}>
                                <NavLink to={path} className="nav-link">
                                    {value}
                                </NavLink>
                            </li>
                        );
                    })}
                </ul>
            </div>

            <div className='nav-icon'>
                <button><AppstoreTwoTone style={{fontSize: '1.5em'}}/></button>
            </div>
        </header>
    );
};

export default Header;
