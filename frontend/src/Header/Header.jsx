import Dropdown from 'react-bootstrap/Dropdown';
import HamburgerMenu from './HamburgerMenu';
function Header(){

   

    return (
        <div className="header" >
            <h1>dormswipe</h1>
            <HamburgerMenu />
            
        </div>
    );
}

export default Header;