import { newsData } from "../../sources/sources"

const News = () => {
    return (
        <div className="mb-20">
            <h2 className="font-semibold lg:text-3xl md:text-2xl sm:text-xl mt-5 p-28 md:py-10 sm:p-10 xs:p-2">Accenture news</h2>
            <div className="w-full flex overflow-x-scroll">
                {
                    newsData.map(item=>{
                        return (<div className="lg:min-w-[70vw] p-10 md:min-w-full" key={item.id}>
                            <h6>{item.date}</h6>
                            <h3 className="font-semibold lg:text-4xl md:text-3xl sm:text-xl">{item.heading}</h3>
                        </div>)
                    })
                }
            </div>
        </div>
    )
}

export default News