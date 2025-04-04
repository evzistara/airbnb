import Logo from "../assets/airbnb.svg"

function Navbar(){
    return(
        <nav className="navbar">
            <img src={Logo} alt="Airbnb logo" />
        </nav>
    )
}

export default Navbar