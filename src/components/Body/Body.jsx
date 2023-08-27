// import Cards from "../Cards/Cards"
import Global from "../Global/Global"
import Hero from "../Hero/Hero"
import Poster from "../Poster/Poster"
import Value from "../Value/Value"
import News from "../News/News"

const Body = () => {
    return (
        <main className="mt-10">
            <Hero />
            {/* todo cards... */}
            {/* <Cards /> */}
            <Value />   
            {/* todo gallery... */}
            <Global />
            <Poster />
            <News />
        </main>
    )
}

export default Body