
const navigationItems= [{title:"Insight", href:"/"},{title:"Services", href:"/"},{title:"Industries", href:"/"}, {title:"Carrer", href:"/"}, {title:"About", href:"/"}]

const Navigation = () => {

    return (
        <div className="lg:d-flex md:hidden gap-10">
            {navigationItems.map((item,index)=>{
                return (<a href={item.href} className="font-medium" key={index+item}>{item.title}</a>)
            })}
        </div>
    )
}

export default Navigation