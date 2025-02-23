import Sidebar from "./Sidebar";

function Home() {
    return (
        <div className="container">
            {/* Sidebar */}
            <Sidebar />

            {/* Main Content */}
            <div className="home-content">
                <h1>Welcome to DormSwipe</h1>
            </div>
        </div>
    );
}

export default Home;
