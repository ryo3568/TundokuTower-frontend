import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import bookshelf from "../../images/hondana.png"
import cat from "../../images/kuroneko.png"
import tsundoku from "../../images/tsundoku.png"

const Main = () => {

    const [allItems, setAllItems] = useState()

    useEffect(() => {
        document.title = "Tundoku Tower"

        const getAllItems = async() => {
            const response = await fetch("http://localhost:5000")
            const jsonResponse = await response.json()
            setAllItems(jsonResponse)
        }
        getAllItems()
    }, [])
    
    return (
        <div>
            <div>
                <Link to="/item/all"><img className="bookshelf" src={bookshelf}/></Link>
                <img className="cat" src={cat} />
                <Link to="/item/all"><img className="tsundoku" src={tsundoku}/></Link>
            </div>
        </div>
    )
}

export default Main