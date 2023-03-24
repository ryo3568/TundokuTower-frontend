
import { useEffect, useState } from "react"
import { Link } from "react-router-dom"

const ReadUnread = () => {

    const [unreadItems, setUnreadItems] = useState()

    useEffect(() => {
        document.title = "Unread Books"

        const getUnreadItems = async() => {
            const response = await fetch("http://localhost:5000/item/unread")
            const jsonResponse = await response.json()
            setUnreadItems(jsonResponse)
        }
        getUnreadItems()
    }, [])
    
    return (
        <div>
            <div>
                <h1>積読本一覧</h1>
                {unreadItems && unreadItems.unreadItems.map(item => 
                    <Link to={`/item/${item._id}`} key={item._id}>
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
    )
}

export default ReadUnread