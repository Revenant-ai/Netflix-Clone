import "./navbar.scss"
import Search from '@material-ui/icons/Search';
import Notifications from '@material-ui/icons/Notifications';
import Arrow from '@material-ui/icons/ArrowDropDown';
import { useState } from "react"

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);

    window.onscroll = () => {
        setIsScrolled(window.pageYOffset === 0 ? false : true);
        return() => (window.onscroll = null);
    };
    return (
        <div className={isScrolled ? "navbar scrolled" : "navbar"}>
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
                    <Search className="icon"/>
                    <Notifications className="icon"/>
                    <img src="https://media.istockphoto.com/photos/portrait-of-grey-wolf-in-the-forest-picture-id1208985997?k=20&m=1208985997&s=612x612&w=0&h=_KXetfa-GdYiX73azWge2aRQQQ6rGXc7sKQDj_fCNgM="
                    alt=""/>
                    <div className="profile">
                        <Arrow className="icon"/>
                        <div className="options">
                            <span>Settings</span>
                            <span>Sign out</span>
                        </div>
                    </div>
                    
                </div>
            </div>
        </div>
    )
}

export default Navbar
