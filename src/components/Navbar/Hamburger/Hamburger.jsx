import { useState } from "react"
import { navigationItems } from "../../../sources/sources"


const Hamburger = () => {
    const [sideBar, setSideBar] = useState(false)

    return (<div className="hidden md:flex">

        <button onClick={() => setSideBar(!sideBar)} className="w-30 h-30 rounded-full bg-primary-500 p-5 relative"></button>
        {
            sideBar &&
            <div className={`lg:hidden md:flex flex-col gap-10 absolute left-0 -bottom-[400px]`}>
                <div className={`flex flex-col justify-center items-center gap-10 bg-primary-500 px-20 py-10 ${sideBar ? 'w-full' : 'w-0'} duration-500 ease-in-out transition-all`}>
                {navigationItems.map((item, index) => {
                    return (<a href={item.href} className="font-medium" key={index + item}>{item.title}</a>)
                })}
                </div>
            </div>
        }
    </div>
    )
}

export default Hamburger