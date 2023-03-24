import { useEffect } from "react"
import { Link } from "react-router-dom"
import bookshelf from "../../images/hondana.png"
import cat from "../../images/kuroneko.png"
import tsundoku from "../../images/tsundoku.png"

const Main = () => {
    useEffect(() => {
        document.title = "Tundoku Tower"
    }, [])
    
    return (
        <div>
            <div>
                <Link to="/item/finished"><img className="bookshelf" src={bookshelf}/></Link>
                <img className="cat" src={cat} />
                <Link to="/item/unread"><img className="tsundoku" src={tsundoku}/></Link>
            </div>
        </div>
    )
}

export default Main