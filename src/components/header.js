import { Link } from "react-router-dom"
import allBook from "../images/hon-ichiran.PNG"
import registerBook from "../images/hon-touroku.PNG"
import account from "../images/account.PNG"

const Header = (props) => {

    const show_nav = () => {
        if(props.login){
            return (
                <ul className="header-nav">
                    <li><Link to="/item/create"><img className="registerBook" src={registerBook} /></Link></li>
                    <li><Link to="/item"><img className="allBook" src={allBook} /></Link></li>
                    <li><Link to="/"><img className="account" src={account} /></Link></li>
                </ul>
            )
        }
        else{
            return(
                <ul className="header-nav">
                    <li><Link to="/user/register">ユーザー登録</Link></li>
                    <li><Link to="/user/login">ログイン</Link></li>
                </ul>
            )
        }
    }
    return (
        <header>
            <div><Link to="/">積読タワー</Link></div>
            <nav>
                {show_nav()}
            </nav>
        </header>
    )
}

export default Header