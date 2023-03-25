
import { useEffect, useState } from "react"
import { Link } from "react-router-dom"

const ReadFinished = () => {

    const [finishedItems, setFinishedItems] = useState()

    useEffect(() => {
        document.title = "Finished Books"

        const getFinishedItems = async() => {
            const response = await fetch("http://localhost:5000/item/finished")
            const jsonResponse = await response.json()
            setFinishedItems(jsonResponse)
        }
        getFinishedItems()
    }, [])
    
    return (
        <div>
            <div>
                <h1>読了本一覧</h1>
                {finishedItems && finishedItems.finishedItems.map(item => 
                    <Link to={`/item/single/${item._id}`} key={item._id}>
                        <img src={item.image} alt="item" />
                        <div>
                            <h2>{item.title}</h2>
                            <h3>{item.author}</h3>
                        </div>
                    </Link>
                )}
            </div>
        </div>
    )
}

export default ReadFinished