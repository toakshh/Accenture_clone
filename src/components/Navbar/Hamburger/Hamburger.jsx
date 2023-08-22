import { useState } from "react"

const navigationItems = [{ title: "Insight", href: "/" }, { title: "Services", href: "/" }, { title: "Industries", href: "/" }, { title: "Carrer", href: "/" }, { title: "About", href: "/" }]


const Hamburger = () => {
    const [sideBar, setSideBar] = useState(false)

    return (<div className="hidden md:flex">

        <button onClick={() => setSideBar(!sideBar)} className="w-30 h-30 rounded-full bg-primary-500 p-5 relative"></button>
        {
            sideBar &&
            <div className={`lg:hidden md:flex flex-col gap-10 absolute left-0 -bottom-[500px] bg-primary-500 p-20 ${sideBar && `w-['100%']`} w-0  `}>
                {navigationItems.map((item, index) => {
                    return (<a href={item.href} className="font-medium" key={index + item}>{item.title}</a>)
                })}
            </div>
        }
    </div>
    )
}

export default Hamburger