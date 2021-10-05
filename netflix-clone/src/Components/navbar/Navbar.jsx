import "./navbar.scss"

const Navbar = () => {
    return (
        <div className="navbar" >
            <div className="container">
                <div className="left">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg"/>
                    <span>Homepage</span>
                    <span>Series</span>
                    <span>Movies</span>
                    <span>New and Popular</span>
                    <span>My list</span>
                </div>

                <div className="right">
                    
                </div>
            </div>
        </div>
    )
}

export default Navbar