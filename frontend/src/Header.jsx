import hamburger from './assets/hamburger.svg';

function Header(){

    const handleClick = () => {
        //todo next: onclick, open a dropdown menu
    }

    return (
        <div className="header" >
            <h1>DormSwipe</h1>
            <img src={hamburger} alt="hamburger" className="hamburger-image" onClick={handleClick}/>
        </div>
    );
}

export default Header;