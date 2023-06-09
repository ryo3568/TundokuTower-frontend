
import { useEffect, useState } from "react"
import { Link } from "react-router-dom"

const ReadAll = () => {

    const [finishedItems, setFinishedItems] = useState()
    const [unreadItems, setUnreadItems] = useState()

    useEffect(() => {
        document.title = "All Books"

        const getAllItems = async() => {
            const finishedResponse = await fetch("https://tundoku-tower.onrender.com/item/finished")
            const jsonFinishedResponse = await finishedResponse.json()
            setFinishedItems(jsonFinishedResponse)

            const unreadResponse = await fetch("https://tundoku-tower.onrender.com/item/unread")
            const jsonUnreadResponse = await unreadResponse.json()
            setUnreadItems(jsonUnreadResponse)
        }
        getAllItems()
    }, [])
    
    return (
        <div>
            <div>
                <h1 className="allbooks-title">蔵書一覧</h1>
                <div>
                    <h2>読了本</h2>
                    <div className="books">
                        {finishedItems && finishedItems.finishedItems.map(item => 
                            <Link to={`/item/single/${item._id}`} key={item._id}>
                                <img className="books-img" src={item.image} alt="item" />
                                <div>
                                    <h3>『{item.title.length >= 5 ? item.title.substring(0,5) + "..." : item.title}』</h3>
                                    <h4>{item.author}</h4>
                                </div>
                            </Link>
                        )}
                    </div>
                </div>
                <div>
                    <h2 className="border">積読本</h2>
                    <div className="books">
                        {unreadItems && unreadItems.unreadItems.map(item => 
                            <Link to={`/item/single/${item._id}`} key={item._id}>
                                <img className="books-img" src={item.image} alt="item" />
                                <div>
                                    <h3>『{item.title.length > 5 ? item.title.substring(0,5) + "..." : item.title}』</h3>
                                    <h4>{item.author}</h4>
                                </div>
                            </Link>
                        )}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ReadAll