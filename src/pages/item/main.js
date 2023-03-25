import { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import bookshelf from "../../images/hondana.png"
import tsundoku from "../../images/tsundoku.png"

// 対象物
import catImage from "../../images/kuroneko.png"
import cupImage from "../../images/cup.png"
import carImage from "../../images/car.png"

const Main = (props) => {

    const cup = {
        "name": "コップ",
        "height": 10,
        "image": cupImage,
    }

    const cat = {
        "name": "猫",
        "height": 40,
        "image": catImage,
    }

    const car = {
        "name": "車",
        "height": 200,
        "image": carImage,
    }

    const [object, setObject] = useState(cup)
    const [height, setHeight] = useState()
    const [style, setStyle] = useState({
        height: object.height * 10
    })

    useEffect(() => {
        document.title = "つんどくタワー"
        if(props.books.numbers == 0) {
            setHeight(0)
        }
        else{
            var res = (props.books.pages *  0.1/ 2 + 0.15 * 2) *10
            res = Math.round(res)
            res /= 100
            setHeight(res)
        }
        setStyle({
            height: object.height * 300 / height
        })
    }, [props.books, object, height])

    const changeObject = () => {
        if(object.name === "コップ") setObject(cat)
        else if(object.name === "猫") setObject(car)
        else setObject(cup)
    }
    
    return (
        <div>
            {props.login && 
                <div>
                    <h1>積読本の冊数：{props.books.numbers}冊</h1>
                    <h1>積読の高さ:{height}cm</h1>
                    <h1>比較対象：{object.name}</h1>
                    <h1>比較対象の高さ：{object.height}cm</h1>
                </div>
            }
            <div className="main">
                <Link to="/item/finished"><img className="bookshelf" src={bookshelf}/></Link>
                <img className="cup" style={style} src={object.image} />
                <button onClick={changeObject}>比較対象を変更</button>
                <Link to="/item/unread"><img className="tsundoku" src={tsundoku}/></Link>
            </div>
        </div>
    )
}

export default Main