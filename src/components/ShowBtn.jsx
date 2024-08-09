import arrowHead from "../assets/images/icon-arrow.svg"

export default function ShowBtn() {
    return(
        <button className="flex items-center justify-center gap-4 mt-4 hover:gap-8 transition-all duration-300 ease-in-out">
            <span className="text-Black text-lg tracking-[1rem] font-semibold">SHOP NOW</span>
            <img src={arrowHead} alt="arrow" />
          </button>
    )
}