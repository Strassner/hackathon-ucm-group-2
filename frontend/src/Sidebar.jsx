import { useState } from "react";
import { Link } from "react-router-dom";
import "./Sidebar.css";

function Sidebar() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
            <button className="hamburger-menu" onClick={() => setIsOpen(!isOpen)}>
                ☰
            </button>

            <div className={`sidebar ${isOpen ? "open" : ""}`}>
                <button className="close-btn" onClick={() => setIsOpen(false)}>✖</button>
                <h2>dormswipe</h2>
                <Link to="/home" className="sidebar-button" onClick={() => setIsOpen(false)}>Home</Link>
                <Link to="/profile" className="sidebar-button" onClick={() => setIsOpen(false)}>Profile</Link>
                <Link to="/" className="sidebar-button" onClick={() => setIsOpen(false)}>Chat</Link>
                <Link to="/" className="sidebar-button" onClick={() => setIsOpen(false)}>Swipe</Link>
            </div>

            {isOpen && <div className="overlay" onClick={() => setIsOpen(false)}></div>}
        </>
    );
}

export default Sidebar;
