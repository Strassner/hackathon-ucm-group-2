import Sidebar from "./Sidebar";
import johnSmithImage from "./johnSmithClean.webp";

function Profile() {
    return (
        <div className="container">
            <Sidebar />
            <div className="profile-content">
                <h1>John Smiths Profile</h1>
                <div className="profile-card">
                    <img
                           src={johnSmithImage}
                           alt="John Smith - The Clean Roommate"
                           className="profile-picture"
                    />
                    <h2>John Smith</h2>
                    <p>Bio: Hey there, I’m John Smith, your potential future roommate and possibly the best thing to happen to your living space since Wi-Fi. I keep things organized (translation: I don’t want to find dirty socks in the fridge) and believe in the sacred roommate code of respecting each other’s space. </p>
                    <p>Identification: Male</p>
                    <p>Email: fakeEmail@domain.com</p>
                    <p>Fun Facts: Neat-Freak, Early-Bird,Reader</p>
                    <button className="edit-profile-btn">Edit Profile</button>
                </div>
            </div>
        </div>
    );
}

export default Profile;
