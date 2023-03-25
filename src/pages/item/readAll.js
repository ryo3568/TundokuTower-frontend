
import { useEffect, useState } from "react"
import { Link } from "react-router-dom"

const ReadAll = () => {

    const [finishedItems, setFinishedItems] = useState()
    const [unreadItems, setUnreadItems] = useState()

    useEffect(() => {
        document.title = "All Books"

        const getAllItems = async() => {
            const finishedResponse = await fetch("http://localhost:5000/item/finished")
            const jsonFinishedResponse = await finishedResponse.json()
            setFinishedItems(jsonFinishedResponse)

            const unreadResponse = await fetch("http://localhost:5000/item/unread")
            const jsonUnreadResponse = await unreadResponse.json()
            setUnreadItems(jsonUnreadResponse)
        }
        getAllItems()
    }, [])
    
    return (
        <div>
            <div>
                <h1>蔵書一覧</h1>
                <div>
                    <h2>読了本</h2>
                    {finishedItems && finishedItems.finishedItems.map(item => 
                        <Link to={`/item/single/${item._id}`} key={item._id}>
                            <img src={item.image} alt="item" />
                            <div>
                                <h2>{item.title}</h2>
                                <h3>{item.author}</h3>
                                <h4>{item.isbn}</h4>
                                <h5>{item.publisher}</h5>
                            </div>
                        </Link>
                    )}
                </div>
                <div>
                    <h2>積読本</h2>
                    {unreadItems && unreadItems.unreadItems.map(item => 
                        <Link to={`/item/single/${item._id}`} key={item._id}>
                            <img src={item.image} alt="item" />
                            <div>
                                <h2>{item.title}</h2>
                                <h3>{item.author}</h3>
                                <h4>{item.isbn}</h4>
                                <h5>{item.publisher}</h5>
                            </div>
                        </Link>
                    )}
                </div>
            </div>
        </div>
    )
}

export default ReadAll