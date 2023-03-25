import { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import bookshelf from "../../images/hondana.png"
import tsundoku from "../../images/tsundoku.png"

// 対象物
import catImage from "../../images/kuroneko.png"
import cupImage from "../../images/hondana.png"
import carImage from "../../images/tsundoku.png"

const Main = (props) => {

    const cup = {
        "name": "コップ",
        "height": 10,
        "image": cupImage
    }

    const cat = {
        "name": "猫",
        "height": 40,
        "image": catImage
    }

    const car = {
        "name": "車",
        "height": 200,
        "image": carImage
    }

    const [object, setObject] = useState(cat)

    const calc_backwidth = () => {
        if(props.books.numbers == 0) return 0
        var res = (props.books.pages *  0.1/ 2 + 0.15 * 2) *10
        res = Math.round(res)
        res /= 100
        return res
    }

    useEffect(() => {
        document.title = "つんどくタワー"
    }, [props.books])


    return (
        <div>
            {props.login && 
                <div>
                    <h1>積読本の冊数：{props.books.numbers}冊</h1>
                    <h1>積読の高さ:{calc_backwidth()}cm</h1>
                    <h1>対象物：{object.name}</h1>
                    <h1>対象物の高さ：{object.height}cm</h1>
                </div>
            }
            <div>
                <Link to="/item/finished"><img className="bookshelf" src={bookshelf}/></Link>
                <img className="cat" src={object.image} />
                <Link to="/item/unread"><img className="tsundoku" src={tsundoku}/></Link>
            </div>
        </div>
    )
}

export default Main