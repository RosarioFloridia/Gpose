import Carousel from "./carousel-loop";
import Placeholder from "@/assets/images/Placeholder.png"

const images = [
    {src: Placeholder, alt: "Placeholder"},
    {src: Placeholder, alt: "Placeholder"},
    {src: Placeholder, alt: "Placeholder"},
    {src: Placeholder, alt: "Placeholder"},
    {src: Placeholder, alt: "Placeholder"},
    {src: Placeholder, alt: "Placeholder"},
    {src: Placeholder, alt: "Placeholder"}
]

function CarouselSection() {
    return (
        <>
            <Carousel gap={16} duration={36} items={images.map((img) => (
                <img src={img.src} alt={img.alt} draggable={false} />
            ))}/>
        </>
    )
}

export default CarouselSection