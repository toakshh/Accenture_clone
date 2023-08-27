import posterImage from "../../assets/webp/hero2.webp"
import change from "../../assets/svg/text.svg"
const Poster = () => {
    return (
        <div className="w-full h-screen my-40 flex md:flex-col">
            <div className="lg:w-1/2 w-full">
                <img src={posterImage} alt="poster image"/>
                <img src={change} alt="change image" />
            </div>
            <div className="lg:w-1/2 md:w-full flex flex-col justify-end items-start lg:pl-40 pr-16 gap-6 md:p-20 sm:p-4 font-semibold">
                <h5 className="lg:text-lg sm:text-sm">OUR CULTURE</h5>
                <h3 className="lg:text-5xl md:text-3xl sm:text-xl">We make change, together</h3>
                <h4 className="font-light text-2xl md:text-lg sm:text-base leading-7">We combine technology with human ingenuity to solve some of the world&apos;s biggest challenges. When you work with us, the possibilities are endless.</h4>
                <div className="">Join us <span></span></div>
            </div>
        </div>
    )
}

export default Poster