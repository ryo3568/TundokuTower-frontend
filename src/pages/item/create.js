import { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom"
import useAuth from "../../utils/useAuth"

const CreateItem = (props) => {
    const navigate = useNavigate() 

    const [title, setTitle] = useState("")
    const [author, setAuthor] = useState("")
    const [isbn, setISBN] = useState("")
    const [publisher, setPublisher] = useState("")
    const [image, setImage] = useState("")
    const [book, setBook] = useState()

    const handleSearch = async(e) => {
        e.preventDefault()
        try{
            const response = await fetch(`https://www.googleapis.com/books/v1/volumes?q=isbn:${isbn}`)
            const jsonData = await response.json()
            setBook(jsonData)
        }catch(err){
            alert("アイテム検索失敗")
        }
    }

    const handleSubmit = async(e) => {
        e.preventDefault()
        try{
            const response = await fetch("http://localhost:5000/item/create", {
                method: "POST", 
                headers: {
                    "Accept": "application/json",
                    "Content-Type": "application/json",
                    "authorization": `Bearer ${localStorage.getItem("token")}`
                }, 
                body: JSON.stringify({ 
                    title: book.items[0].volumeInfo.title,
                    author: book.items[0].volumeInfo.authors[0],
                    image: book.items[0].volumeInfo.imageLinks.thumbnail,
                    pages: Number(book.items[0].volumeInfo.pageCount),
                    status: false,
                })
            })
            navigate("/")
        }catch(err){
            alert("アイテム作成失敗")
        }
    }

    useEffect(() => {
        document.title = "作成ページ"
    })

    const loginUser = useAuth()

    if(loginUser){
        return (
            <div>
                <h1>本の追加</h1>
                <form onSubmit={handleSearch}>
                    {/* <input value={title} onChange={(e)=>setTitle(e.target.value)} type="text" name="title" placeholder="タイトル"  />
                    <input value={author} onChange={(e)=>setAuthor(e.target.value)} type="text" name="author" placeholder="著者名"  /> */}
                    <input value={isbn} onChange={(e)=>setISBN(e.target.value)} type="text" name="isbn" placeholder="ISBN" />
                    {/* <input value={publisher} onChange={(e)=>setPublisher(e.target.value)} type="text" name="publisher" placeholder="出版社" required /> */}
                    {/* <input value={image} onChange={(e)=>setImage(e.target.value)} type="text" name="image" placeholder="画像" required /> */}
                    <button>検索</button>
                </form>
                {book && book.items.map(item => 
                    <div key={item.id}>
                        <h1>{item.volumeInfo.title}</h1>
                        <h2>{item.volumeInfo.authors}</h2>
                        {item.volumeInfo.imageLinks && <img src={item.volumeInfo.imageLinks.thumbnail} alt="書影"/>}
                        <button onClick={handleSubmit}>追加</button>
                    </div>
                )}
            </div>
        )
    }
}

export default CreateItem