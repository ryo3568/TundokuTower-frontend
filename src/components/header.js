import { Link } from "react-router-dom"
import allBook from "../images/hon-ichiran.PNG"
import registerBook from "../images/hon-touroku.PNG"
import account from "../images/account.PNG"
import logo from "../images/logo.png"

const Header = (props) => {

    const logout = () => {
        localStorage.removeItem('token')
        props.setLogin(false)
    }

    const show_nav = () => {
        if(props.login){
            return (
                <ul className="header-nav">
                    <li><Link to="/item/create"><img className="registerBook" src={registerBook} /></Link></li>
                    <li><Link to="/item/all"><img className="allBook" src={allBook} /></Link></li>
                    <li><Link to="/" onClick={logout}><img className="account" src={account} /></Link></li>
                </ul>
            )
        }
        else{
            return(
                <ul className="header-nav">
                    <li><Link to="/user/register">新規登録</Link></li>
                    <li><Link to="/user/login">ログイン</Link></li>
                </ul>
            )
        }
    }
    return (
        <header>
            <div><Link to="/"><img className="header-logo" src={logo}/></Link></div>
            <nav>
                {show_nav()}
            </nav>
        </header>
    )
}

export default Header