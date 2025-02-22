import Sidebar from "./Sidebar";
import Header from "./Header";

function Home() {



    return (
        <div className="container">
        <Header />
        <div>
            <Sidebar />
            <h1>Home</h1>
            
        </div>
        </div>
    )
}

export default Home;