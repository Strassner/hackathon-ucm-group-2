import { useState } from "react";
import { Link } from "react-router-dom";
import "./Sidebar.css";

function Sidebar() {
    const [isOpen, setIsOpen] = useState(true); // Sidebar opens by default

    return (
        <>
            {/* Sidebar */}
            <div className={`sidebar ${isOpen ? "open" : ""}`}>
                <div className="sidebar-header">
                    <div style={{display: "flex", justifyContent: "space-around"}}>
                    <h2>dormswipe</h2>
                    {/* Hamburger Button (Inside Sidebar, Right-Aligned) */}
                    <button className="hamburger-menu" onClick={() => setIsOpen(!isOpen)}>
                        ☰
                    </button>
                    </div>
                </div>

                <div className="sidebar-content">
                    <Link to="/home" className="sidebar-button" onClick={() => setIsOpen(false)}>Home</Link>
                    <Link to="/profile" className="sidebar-button" onClick={() => setIsOpen(false)}>Profile</Link>
                    <Link to="/chat" className="sidebar-button" onClick={() => setIsOpen(false)}>Chat</Link>
                    <Link to="/" className="sidebar-button" onClick={() => setIsOpen(false)}>Swipe</Link>
                </div>
            </div>

            {/* Overlay to close sidebar when clicking outside */}
            {isOpen && <div className="overlay" onClick={() => setIsOpen(false)}></div>}
        </>
    );
}

export default Sidebar;
