import Featured from "../Components/featured/Featured"
import { List } from "../Components/list/List"
import Navbar from "../Components/navbar/Navbar"
import "./home.scss"
const Home = () => {
    return (
        <div className="home">
          
           <Featured type="movie"/>
           <List/>
           <List/>
           <List/>
           <List/>
           <Navbar/>
           
           
        </div>
    )
}

export default Home
