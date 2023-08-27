import Hamburger from "./Hamburger/Hamburger"
import Logo from "./Logo/Logo"
import Navigation from "./Navigation/Navigation"
import Search from "./Search/Search"

const Navbar = () => {
    return (
        <nav className="p-5 flex justify-around items-center mb-5 sticky top-0 bg-black w-full z-20" >
            <Hamburger />
            <Logo />
            <Navigation />
            <Search />
        </nav>
    )
}

export default Navbar