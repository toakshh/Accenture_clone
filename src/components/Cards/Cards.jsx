// work in progresss.............................

























import { cardData } from "../../sources/sources"
// import CardItem from "./CardItem"
import { Swiper, SwiperSlide } from "swiper/react"
import {Navigation} from "swiper/modules"

const Cards = () => {
    return (
        <div className="flex flex-nowrap overflow-x-scroll gap-8 my-20 ">
            <Swiper
                initialSlide={0}
                modules={[Navigation]}
                slidesPerView={"auto"}
                spaceBetween={20}
                allowTouchMove
                
            >
            {cardData.map((item, i) => {
                return (
                    <SwiperSlide key={item + i}>
                        <figure className="flex">
                            {/* outer card */}
                            <div className="flex">
                                <div className="cards__info">
                                    <h4>{item.summary}</h4>
                                    <h2>{item.title}</h2>
                                </div>
                                <div className="card__img">
                                    <img src={item.image} alt="caseStudy" />
                                </div>
                            </div>

                            {/* inner card  */}
                            <div className="cards__inner">
                                <div className="cards__description">
                                    <h4>{item.description}</h4>
                                </div>
                                <div className="cards__Expand">{'Expand >'}</div>
                            </div>
                        </figure>
                    </SwiperSlide>
                )
            })}
             </Swiper>
        </div>
    )
}

export default Cards