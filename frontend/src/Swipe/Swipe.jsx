import { useEffect, useState } from "react";
import Sidebar from "../Sidebar";
import johnSmith from "../assets/johnSmithClean.webp";
import gamer_dude from "../assets/gamer_dude.jpg";
import frog_girl from "../assets/frog_girl.webp";
import cheeseburger_guy from "../assets/cheeseburger_guy.jpg";
import "./Swipe.css";
import Tags from "./Tags";
function Swipe() {

    const [profiles, setProfiles] = useState([
        {name: "John Smith", image: johnSmith, 
            bio: "Hey there, I’m John Smith, your potential future roommate and possibly the best thing to happen to your living space since WiFi.", 
            tags: ["Neat-Freak", "Early-Bird", "Reader"], id: 0},
        {name: "Jon Doe", image: gamer_dude,
            bio: "Hi, I'm Jon Doe. I'm a gamer and I'm looking for a roommate who can tolerate my late night gaming sessions.",
            tags: ["Gamer", "Night-Owl", "Introvert"], id: 1},
        {name: "Jane Doe", image: frog_girl, 
            bio: "Hello, I'm Jane Doe. I love frogs and I'm looking for a roommate who doesn't mind my frog collection.",
            tags: ["Animal-Lover", "Quirky", "Quiet"], id: 2},
        {name: "Tanner Hughes", image: cheeseburger_guy,
            bio: "Sup, I'm Tanner. I like cheeseburgers and I'm looking for a roommate who can cook.",
            tags: ["Foodie", "Cook", "Friendly"], id: 3},
    ]);
    const [currentProfile, setCurrentProfile] = useState(profiles[0]);

    const handleYes = () => {
        setCurrentProfile(profiles[currentProfile.id + 1]);
        if (currentProfile.id === profiles.length - 1) {
            setCurrentProfile(profiles[0]);
        }
    }

    const handleNo = () => {
        setCurrentProfile(profiles[currentProfile.id + 1]);
        if (currentProfile.id === profiles.length - 1) {
            setCurrentProfile(profiles[0]);
        }
    }

return(<>
    <Sidebar />
    <div className="swipe-container">
    <Tags tags={currentProfile.tags} />
    <div className="center-container">
    <img src={currentProfile.image} alt="profile" className="profile-pic" />
    <div style={{width: '100%'}}>
    <button className="swipe-button" onClick={handleNo}>❌</button>
    <button className="swipe-button" onClick={handleYes}>✅</button>
    </div>
    </div>
    <h2 className="profile-bio">{currentProfile.bio}</h2>
    </div>
</>);
}

export default Swipe;