import '../componets/components-style/header-style.scss'
import {AppstoreTwoTone} from "@ant-design/icons";

const Header = () => {
  const navTitles = ["Home", "Porfolio", "About", "Contact"];
  return (
    <header>
        <div className='navigator'>
            <ul className='nav-list'>
                {navTitles.map((value, index) => {
                    return (
                        <li key={index}><a href='#'  className="nav-link">
                            {value}
                        </a></li>
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
