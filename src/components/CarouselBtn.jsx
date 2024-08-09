import prevIcon from "../assets/images/icon-angle-left.svg"
import nextIcon from "../assets/images/icon-angle-right.svg"

export default function CarouselBtn({ handlePrev, handleNext }) {
    return(
        <div className="absolute bg-Black flex flex-1  items-center justify-self-end self-end left-[60%] max-sm:left-auto ">
            <button onClick={handlePrev}>
              <img className="p-5 px-[2.2rem] bg-Black hover:bg-Very-Dark-Gray" src={prevIcon} alt="previous icon"/>
            </button>
            <button onClick={handleNext}>
              <img className="p-5 px-[2.2rem] bg-Black hover:bg-Very-Dark-Gray" src={nextIcon} alt="next icon" />
            </button>
        </div>
    )
}