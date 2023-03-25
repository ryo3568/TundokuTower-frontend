import { useParams, Link, useNavigate } from "react-router-dom"
import {useState, useEffect} from "react"

const ReadSingle = (props) => {

    const params = useParams()
    const navigate = useNavigate()

    const [title, setTitle] = useState("")
    const [author, setAuthor] = useState("")
    const [image, setImage] = useState("")
    const [page, setPage] = useState()
    const [status, setStatus] = useState()


    useEffect(() => {
        document.title = title

        const getSingleItem = async() => {
            const response = await fetch(`http://localhost:5000/item/single/${params.id}`)
            const jsonResponse = await response.json()
            setTitle(jsonResponse.singleItem.title)
            setAuthor(jsonResponse.singleItem.author)
            setImage(jsonResponse.singleItem.image)
            setStatus(jsonResponse.singleItem.status)
            setPage(jsonResponse.singleItem.pages)
        }
        getSingleItem()
    }, [params.id, title])

    const changeStatus = async(e) => {
        e.preventDefault()
        try{
            const response = await fetch(`http://localhost:5000/item/update/${params.id}`, {
                method: "PUT", 
                headers: {
                    "Accept": "application/json",
                    "Content-Type": "application/json",
                    "authorization": `Bearer ${localStorage.getItem("token")}`
                }, 
                body: JSON.stringify({
                    title: title,
                    author: author,
                    image: image,
                    status: !status
                })
            })
            if(status){
                props.setBooks({
                    pages: props.books.pages + page,
                    numbers: props.books.numbers + 1
                })
            }
            else{
                props.setBooks({
                    pages: props.books.pages - page,
                    numbers: props.books.numbers - 1
                })
            }
            navigate("/")
        }catch(err){
            alert("変更失敗")
        }
    }

    const show_button = () => {
        if(status){
            return <button onClick={changeStatus}>積読にもどす</button>
        }else{
            return <button onClick={changeStatus}>読了</button>
        }
    }
    
    return (
        <div>
            <div>
                {image && <img src={image} alt="item" />}
            </div>
            <div>
                <h1>タイトル：{title}</h1>
                <h2>著者名：{author}</h2>
            </div>
            <div>
                {show_button()}
                <br/>
                <Link to={`/item/delete/${params.id}`}>削除</Link>
            </div>
        </div>
    )
}

export default ReadSingle