import React, {useState} from "react"
import "./Layout.scss"
import Navbar from "../navbar/Navbar"
import Footer from "../footer/Footer"



const Layout = ({children}) => {
    const [isOpen, setIsOpen] = useState(false);
    const toggleSidebar = () => {
        setIsOpen(!isOpen);
    }
    return (
        <>
        <Navbar toggleSidebar={toggleSidebar} isOpen={isOpen} />
        <div class="test">
            {children}
        </div> 
        <Footer />
        </>
    )
}

export default Layout