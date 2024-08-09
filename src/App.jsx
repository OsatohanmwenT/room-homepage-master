import { useState, useCallback } from "react"
import Nav from "./components/Nav"
import About from "./components/About"
import CarouselContent from "./components/CarouselContent"
import data from "./data"

export default function App() {
  const [isMenuActive, setIsMenuActive] = useState(false)
  const [currentIndex, setCurrentIndex] = useState(0)

  const openMenu = () => {
    setIsMenuActive(true)
  }

  const closeMenu = () => {
    setIsMenuActive(false)
  }

  
  const handleNext = useCallback(() => {
    setCurrentIndex((prevIndex) =>
      prevIndex === data.length - 1 ? 0 : prevIndex + 1
    );
  }, [data.length]);

  const handlePrev = useCallback(() => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? data.length - 1 : prevIndex - 1
    );
  }, [data.length]);

  return (
    <main className="bg-White max-container h-screen grid">
      <Nav openMenu={openMenu} closeMenu={closeMenu} Active={isMenuActive} />
      <CarouselContent key={data[currentIndex].id} handleNext={handleNext} handlePrev={handlePrev} data={data} currentIndex={currentIndex} />
      <About />
    </main>
  )
}