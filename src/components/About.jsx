import darkImg from "../assets/images/image-about-dark.jpg"
import lightImg from "../assets/images/image-about-light.jpg"

export default function About() {
    return(
        <div className="grid grid-cols-7 max-md:grid-cols-1 max-md:grid-rows-auto">
            <img className="col-span-2 h-full w-full" src={darkImg} alt="about image" />
            <div className="col-span-3 p-14 max-sm:p-8">
            <h2 className="text-Black text-xl font-semibold tracking-[0.6rem] mb-3">ABOUT OUR FURNITURE</h2>
            <p className="text-Dark-Gray">Our multifunctional collection blends design and function to suit your individual taste.
                Make each room unique, or pick a cohesive theme that best express your interests and what
                inspires you. Find the furniture pieces you need, from traditional to contemporary styles
                or anything in between. Product specialists are available to help you create your dream space.
            </p>
            </div>
            <img className="col-span-2 h-full w-full" src={lightImg} alt="" />
        </div>
    )
}