import Sidebar from "./Sidebar";

function Home() {
    return (
        <div className="container">


          <div>
            <Sidebar open="true"/>
            

         </div>


            {/* Main Content */}
            <div className="home-content">
                <h1>Welcome to DormSwipe</h1>
            </div>
        </div>
    );
}

export default Home;
