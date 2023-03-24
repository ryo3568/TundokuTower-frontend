import { useParams, Link } from "react-router-dom"
import {useState, useEffect} from "react"

const ReadSingle = () => {

    const params = useParams()

    const [title, setTitle] = useState("")
    const [author, setAuthor] = useState("")
    const [isbn, setISBN] = useState("")
    const [publisher, setPublisher] = useState("")
    const [image, setImage] = useState("")


    useEffect(() => {
        document.title = title

        const getSingleItem = async() => {
            const response = await fetch(`http://localhost:5000/item/single/${params.id}`)
            const jsonResponse = await response.json()
            setTitle(jsonResponse.singleItem.title)
            setAuthor(jsonResponse.singleItem.author)
            setISBN(jsonResponse.singleItem.isbn)
            setPublisher(jsonResponse.singleItem.publisher)
            setImage(jsonResponse.singleItem.image)
        }
        getSingleItem()
    }, [params.id, title])
    
    return (
        <div>
            <div>
                {image && <img src={image} alt="item" />}
            </div>
            <div>
                <h1>{title}</h1>
                <h2>{author}</h2>
                <h3>{isbn}</h3>
                <h4>{publisher}</h4>
            </div>
            <div>
                <Link to={`/item/update/${params.id}`}>アイテム編集</Link>
                <Link to={`/item/delete/${params.id}`}>アイテム削除</Link>
            </div>
        </div>
    )
}

export default ReadSingle