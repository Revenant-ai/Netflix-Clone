import "./navbar.scss"
import Search from '@material-ui/icons/Search';
import Notifications from '@material-ui/icons/Notifications';
import Settings from '@material-ui/icons/Settings'

const Navbar = () => {
    return (
        <div className="navbar" >
            <div className="container">
                <div className="left">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg"
                    alt="logo for netflix"/>
                    <span>Homepage</span>
                    <span>Series</span>
                    <span>Movies</span>
                    <span>New and Popular</span>
                    <span>My list</span>
                </div>
                <div className="right">
                    <Search/>
                    <Notifications/>
                    <Settings/>
                </div>
            </div>
        </div>
    )
}

export default Navbar
