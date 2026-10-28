import HeroSection from "../../componets/heroSection/HeroSection.tsx"
import Navbar from "../../componets/navbar/Navbar.tsx"

function HomePage() {
    return (
        <>
            <Navbar/>
            <HeroSection className={"herosection"} text={"Gpose Website made my Rosemary Uhsu"} title={"Gpose"} />
        </>
    )
}

export default HomePage 