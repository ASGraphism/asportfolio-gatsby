import React, { useContext } from "react"
import Links from "../../constants/links"
import { MenuContext } from "../../context/MenuContext"
import "./Navbar.scss"

const Navbar = () => {
    const { menuState, setMenuState } = useContext(MenuContext)
    return (
        <>
            <button className={`btn btn-main btn-main--squeeze ${menuState ? "is-active" : ""}`} type="button" onClick={() => setMenuState(!menuState)}>
                <span className="btn-main-box">
                    <span className="btn-main-inner"></span>
                </span>
            </button>

            <div className={`main-navbar ${menuState ? "main-navbar-active" : ""}`}>
                <nav>
                    <Links styleClass="nav-links"></Links>
                </nav>
            </div>
        </>
    )
}

export default Navbar