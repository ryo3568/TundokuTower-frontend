import logo from "../images/Tenpensyalogo.png"
const Footer = () => {
    return (
        <footer>
            <img className="Tenpensya-logo" alt="てんぺん舎のロゴ" src={logo}/>
            <p>©{new Date().getFullYear()} TundokuTower</p>
        </footer>
    )
}

export default Footer