import { useState, useEffect, memo } from "react";
import CarouselBtn from "./CarouselBtn"
import ShowBtn from "./ShowBtn"
import { imageMap } from "../assets/images/imageMap"
import useWindowSize from "../hooks/useWindowSize";

function CarouselContent({ currentIndex, handleNext, handlePrev, data }) {
    const width = useWindowSize();
    const imageSrc = width < 768 ? data[currentIndex].image.mobile : data[currentIndex].image.desktop;
    const [isTransitioning, setIsTransitioning] = useState(false);

    useEffect(() => {
        setIsTransitioning(true);
        const timeoutId = setTimeout(() => {
            setIsTransitioning(false);
        }, 500);

        return () => clearTimeout(timeoutId);
    }, [currentIndex]);

    return(
        <div className="grid grid-cols-5 grid-rows-1 max-md:grid-cols-1 max-md:grid-rows-2">
            <CarouselBtn handleNext={handleNext} handlePrev={handlePrev} />
            <div
                className={`col-span-3 w-full h-full transition-opacity duration-150 ease-in-out ${isTransitioning ? "opacity-0" : "opacity-100"}`}>
                <img src={imageMap[imageSrc]} alt="hero image" className="w-full h-full" />
            </div>
            <div
                className={`p-20 pt-36 max-xl:p-8 max-xl:py-32 max-lg:py-16 max-lg:pt-20 max-sm:pt-14 col-span-2 transition-opacity ease-in-out ${isTransitioning ? "opacity-0" : "opacity-100"}`}
            >
                <h1 className="font-bold text-5xl max-lg:text-3xl text-Black mb-3">
                    {data[currentIndex].title}
                </h1>
                <p className="text-Dark-Gray">
                    {data[currentIndex].detail}
                </p>
                <ShowBtn />
            </div>
            
        </div>
    )
}

export default memo(CarouselContent);
