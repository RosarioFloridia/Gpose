import Carousel from "./carousel-loop";

function CarouselSection() {
    return (
        <>
            <Carousel gap={16} duration={36} items={["Card 1", "Card 2", "Card 3", "Card 4", "Card 5", "Card 6","Card 7","Card 8"]}/>
        </>
    )
}

export default CarouselSection