import BurgerMenu from '../singleComponents/BurgerMenu'
import './Header.css'

function Header(props){
    return (
        <div className="headerContainer">
            <BurgerMenu/>
        </div>
    )
}

export default Header