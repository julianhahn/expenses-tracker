import './BurgerMenu.css'
import { useRef } from 'react'

function BurgerMenu(props){

    let menuOpen = false;
    const buttonRef = useRef(null);

    function toggleMenu() {
        buttonRef.current.classList.toggle("open");
        menuOpen = !menuOpen
    }

    return(
        <div className="BurgerMenu" ref={buttonRef} onClick={toggleMenu}>
            <div className="bar1 menu-btn__burger"/>
            <div className="bar2 menu-btn__burger"/>
            <div className="bar3 menu-btn__burger"/>
        </div>
    )
}

export default BurgerMenu