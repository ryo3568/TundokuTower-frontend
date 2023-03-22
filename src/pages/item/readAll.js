
import { useEffect, useState } from "react"
import { Link } from "react-router-dom"

const ReadAll = () => {

    const [allItems, setAllItems] = useState()

    useEffect(() => {
        const getAllItems = async() => {
            const response = await fetch("https://tundoku-tower.onrender.com")
            const jsonResponse = await response.json()
            setAllItems(jsonResponse)
        }
        getAllItems()
    }, [])

    return (
        <div>
            <div>
                {allItems && allItems.allItems.map(item => 
                    <Link to={`/item/${item._id}`} key={item._id}>
                        <img src={require(`../../images${item.image}`)} alt="item" />
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

export default ReadAll