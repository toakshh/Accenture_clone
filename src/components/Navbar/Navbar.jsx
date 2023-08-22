import Hamburger from "./Hamburger/Hamburger"
import Logo from "./Logo/Logo"
import Navigation from "./Navigation/Navigation"
import Search from "./Search/Search"

const Navbar = () => {
    return (
        <nav className="flex justify-around items-center my-5 fixed w-full" >
            <Hamburger />
            <Logo />
            <Navigation />
            <Search />
        </nav>
    )
}

export default Navbar