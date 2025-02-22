import hamburger from '../assets/hamburger.svg';

function HamburgerMenu() {

    const handleClick = () => {
        //todo next: onclick, open a dropdown menu

    }

    return(
        <img src={hamburger} alt="hamburger" className="hamburger-image" onClick={handleClick}/>
    );
}

export default HamburgerMenu;