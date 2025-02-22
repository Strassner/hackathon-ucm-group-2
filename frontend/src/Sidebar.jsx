import { useNavigate } from 'react-router-dom';

function Sidebar() {
    const navigate = useNavigate();

    const handleClick = (path) => {
        navigate("/" + path);
    }

    return(
        <div className='sidebar'>
            <button onClick={() => {handleClick('home')}}>Home</button>
            <button onClick={() => {handleClick('')}}>Login</button>
            <button onClick={() => {handleClick('')}}>Swipe</button>
        </div>
    );
}


export default Sidebar;