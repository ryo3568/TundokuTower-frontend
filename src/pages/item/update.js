import { useParams } from "react-router-dom"
import {useState, useEffect} from "react"
import useAuth from "../../utils/useAuth"

const UpdateItem = () => {

    const params = useParams()

    const [title, setTitle] = useState("")
    const [author, setAuthor] = useState("")
    const [isbn, setISBN] = useState("")
    const [publisher, setPublisher] = useState("")
    const [image, setImage] = useState("")
    const [email, setEmail] = useState("")

    useEffect(() => {

        document.title = "編集ページ"
        const getSingleItem = async() => {
            const response = await fetch(`https://tundoku-tower.onrender.com/item/${params.id}`)
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
            const response = await fetch(`https://tundoku-tower.onrender.com/item/update/${params.id}`, {
                method: "PUT", 
                headers: {
                    "Accept": "application/json",
                    "Content-Type": "application/json",
                    "authorization": `Bearer ${localStorage.getItem("token")}`
                }, 
                body: JSON.stringify({
                    title: title,
                    author: author,
                    isbn: isbn,
                    publisher: publisher,
                    image: image
                })
            })
            const jsonData = await response.json()
            alert(jsonData.message)
        }catch(err){
            alert("アイテム編集失敗")
        }
    }

    const loginUser = useAuth()
    if(loginUser === email){
        return (
            <div>
                <h1>アイテム編集</h1>
                <form onSubmit={handleSubmit}>
                    <input value={title} onChange={(e)=>setTitle(e.target.value)} type="text" name="title" placeholder="アイテム名" required />
                    <input value={author} onChange={(e)=>setAuthor(e.target.value)} type="text" name="author" placeholder="著者名" required />
                    <input value={isbn} onChange={(e)=>setISBN(e.target.value)} type="text" name="isbn" placeholder="ISBN" required />
                    <input value={publisher} onChange={(e)=>setPublisher(e.target.value)} type="text" name="publisher" placeholder="出版社" required />
                    <input value={image} onChange={(e)=>setImage(e.target.value)} type="text" name="image" placeholder="画像" required />
                    <button>編集</button>
                </form>
            </div>
        )
    }else{
        return <h1>権限がありません</h1>
    }
    
}

export default UpdateItem