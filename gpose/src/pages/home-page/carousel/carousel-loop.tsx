import type { CSSProperties } from "react";
import type { CarouselLoopProp } from "../../../types/CarouselLoopInfinite.type";
import "./carousel-loop.css"


function Carousel ({items, duration = 36, gap = 16 }: CarouselLoopProp){

    const style = {
        "--carousel-duration" : `${duration}s`,
        "--carousel-gap" : `${gap}px`
    } as CSSProperties

    return (
        <section className="home--carousel" style={style}>
            <div className="home--carousel_track">
                {[false, true].map((isCopy) => (
                    <div className="home--carousel_set" key = {isCopy ? "copy" : "main"} aria-hidden = {isCopy || undefined}>
                        {items.map((item, i)  => (
                         <div className="home--carousel_item bg-black text-amber-50" key={i}>{item}</div>   
                        ))}
                    </div>
                ))}
            </div>
        </section>
    )
}

export default Carousel