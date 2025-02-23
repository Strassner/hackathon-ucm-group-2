import Sidebar from "./Sidebar";

function Home() {
    return (
        <div className="container">


          <div>
            <Sidebar open="true"/>
            <h1>Welcome to dormswipe</h1>

         </div>


            {/* Main Content */}
            <div className="home-content">
                <h1>Welcome to DormSwipe</h1>
            </div>
        </div>
    );
}

export default Home;
