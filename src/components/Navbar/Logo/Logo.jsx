import logo from "../../../assets/favicon.ico"
import "./Logo.css"


const Logo = () => {
    return (
        <a href="/" className="flex flex-col justify-start h-10 hamburger">
            <img src={logo} alt="Accenture" className="w-10 h-min"/>
        </a>
    )
}

export default Logo