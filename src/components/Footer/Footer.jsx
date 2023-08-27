import change from "../../assets/svg/change.svg"
import { footerData } from "../../sources/sources"
const Footer = () => {
    return (
        <div className="flex md:flex-col w-full">
            <div className="w-1/2 md:w-full pl-20 pr-0  flex flex-col justify-between">
                <h4 className=" font-semibold lg:text-3xl md:text-2xl sm:text-xl">Let there be change</h4>
                <div className="flex flex-wrap leading-10">

                {
                    footerData.map((item,i)=>{
                        return (<div key={item+i} className="w-1/2 sm:w-full" ><a href="#">{item}</a></div> ) 
                    })
                }
                </div>
            </div>
            <img className="w-1/2 md:w-full h-[70vh]" src={change} alt="change image" />
        </div>
    )
}

export default Footer