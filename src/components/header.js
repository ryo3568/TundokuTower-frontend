import { Link } from "react-router-dom"
import headerPNG from "../images/header.png"
import allBook from "../images/hon-ichiran.PNG"
import registerBook from "../images/hon-touroku.PNG"

const Header = () => {
    return (
        <header>
            <div><Link to="/">積読タワー</Link></div>
            <nav>
                <ul className="header-nav">
                    <li><Link to="/user/register">ユーザー登録</Link></li>
                    <li><Link to="/user/login">ログイン</Link></li>
                    <li><Link to="/item/create"><img className="allBook" src={allBook} /></Link></li>
                    <li><Link to="/item/all"><img className="registerBook" src={registerBook} /></Link></li>
                </ul>
            </nav>
        </header>
    )
}

export default Header