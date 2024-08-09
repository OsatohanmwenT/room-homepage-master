import { memo } from "react"
import logo from "../assets/images/logo.svg"
import burgerMenu from "../assets/images/icon-hamburger.svg"
import closeIcon from "../assets/images/icon-close.svg"

function Nav({ Active, openMenu, closeMenu }) {
    return(
        <>
            <header className="p-6 absolute top-4 left-5">
            <nav className="flex items-center justify-between">
                <button className="hidden max-sm:block mr-28" onClick={openMenu}>
                    <img src={burgerMenu} alt="hamburger icon" />
                </button>
                <a href="/">
                    <img src={logo} alt="logo" />
                </a>
                <ul className="flex items-center gap-8 ml-20 max-sm:hidden">
                    <li className="text-White font-semibold text-lg py-4 border-b-2 border-White/0 hover:border-White/100 rounded-sm transition-all duration-200"><a href="/">home</a></li>
                    <li className="text-White font-semibold text-lg py-4 border-b-2 border-White/0 hover:border-White/100 rounded-sm transition-all duration-200"><a href="/">shop</a></li>
                    <li className="text-White font-semibold text-lg py-4 border-b-2 border-White/0 hover:border-White/100 rounded-sm transition-all duration-200"><a href="/">about</a></li>
                    <li className="text-White font-semibold text-lg py-4 border-b-2 border-White/0 hover:border-White/100 rounded-sm transition-all duration-200"><a href="/">contact</a></li>
                </ul>
            </nav>
        </header>
            <div className={`p-6 px-10 absolute ${Active ? "flex" : "hidden"} justify-between items-center bg-White w-full sm:hidden`}>
                    <button className="flex items-center justify-center" onClick={closeMenu}>
                        <img src={closeIcon} alt="close Icon" />
                    </button>
                    <ul className="flex gap-4">
                        <li className="text-Black font-semibold text-lg py-4"><a href="/">home</a></li>
                        <li className="text-Black font-semibold text-lg py-4"><a href="/">shop</a></li>
                        <li className="text-Black font-semibold text-lg py-4"><a href="/">about</a></li>
                        <li className="text-Black font-semibold text-lg py-4"><a href="/">contact</a></li>
                    </ul>
                </div>
        </>
        
    )
}

export default memo(Nav)