import { useNavigate } from 'react-router-dom';

function Sidebar() {
    const navigate = useNavigate();

    const handleClick = (path) => {
        navigate("/" + path);
    }

    return(
        <div className='sidebar'>
            <h1 className='menu'>Menu</h1>
            <button onClick={() => {handleClick('home')}}>Home</button>
            <button onClick={() => {handleClick('')}}>Login</button>
            <button onClick={() => {handleClick('')}}>Swipe</button>
            <button onClick={() => {handleClick('')}}>Chat</button>
        </div>
    );
}


export default Sidebar;