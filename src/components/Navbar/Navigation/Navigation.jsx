
import { navigationItems } from "../../../sources/sources"

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