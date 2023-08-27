import right from "../../assets/svg/right.svg"

const Hero = () => {
    return (
        <div className="w-full d-flex flex-col p-4 ">
            <div className="w-full flex flex-col justify-center items-center mx-auto sm:w-2/3 ">
                <h1 className="text-7xl md:text-5xl sm:text-xl font-semibold flex flex-col self-start ">REINVENT WHAT YOUR</h1>
                <h1 className="text-7xl md:text-5xl sm:text-xl font-semibold self-end ">BUSINESS COULD BE</h1>
            </div>
            <h6 className="font-medium text-3xl d-flex gap-4 sm:text-sm">Let there be change <a><img className="bg-primary-500 w-5 h-4 px-1" src={right} alt="next" /></a></h6>
        </div>
    )
}

export default Hero