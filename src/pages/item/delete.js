import { useParams } from "react-router-dom"
import {useState, useEffect} from "react"
import useAuth from "../../utils/useAuth"

const DeleteItem = () => {

    const params = useParams()

    const [title, setTitle] = useState("")
    const [author, setAuthor] = useState("")
    const [isbn, setISBN] = useState("")
    const [publisher, setPublisher] = useState("")
    const [image, setImage] = useState("")
    const [email, setEmail] = useState("")

    useEffect(() => {
        document.title = "削除ページ"
        const getSingleItem = async() => {
            const response = await fetch(`http://localhost:5000/item/single/${params.id}`)
            const jsonResponse = await response.json()
            setTitle(jsonResponse.singleItem.title)
            setAuthor(jsonResponse.singleItem.author)
            setISBN(jsonResponse.singleItem.isbn)
            setPublisher(jsonResponse.singleItem.publisher)
            setImage(jsonResponse.singleItem.image)
            setEmail(jsonResponse.singleItem.email)
        }
        getSingleItem()
    }, [params.id])

    const handleSubmit = async(e) => {
        e.preventDefault()
        try{
            const response = await fetch(`http://localhost:5000/item/delete/${params.id}`, {
                method: "DELETE", 
                headers: {
                    "Accept": "application/json",
                    "Content-Type": "application/json",
                    "authorization": `Bearer ${localStorage.getItem("token")}`
                }
            })
            const jsonData = await response.json()
            alert(jsonData.message)
        }catch(err){
            alert("アイテム削除失敗")
        }
    }

    const loginUser = useAuth()

    if(loginUser === email){
        return (
            <div>
                <h1>アイテム削除</h1>
                <form onSubmit={handleSubmit}>
                    <h2>{title}</h2>
                    {image && <img src={image} alt="item"/>}
                    <h3>{author}</h3>
                    <h4>{isbn}</h4>
                    <h5>{publisher}</h5>
                    <button>削除</button>
                </form>
            </div>
        )
    }else{
        return <h1>権限がありません</h1>
    }
    
}

export default DeleteItem