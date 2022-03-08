import BurgerMenu from '../singleComponents/BurgerMenu/BurgerMenu'
import './Header.css'

function Header(props){
    return (
        <div className="headerContainer">
            <BurgerMenu/>
        </div>
    )
}

export default Header