import { Route, Routes, BrowserRouter } from "react-router-dom"
import {useState} from "react"
import Register from "./pages/user/register"
import Login from "./pages/user/login"
import ReadAll from "./pages/item/readAll"
import ReadSingle from "./pages/item/readSingle"
import ReadFinished from "./pages/item/readFinished"
import ReadUnread from "./pages/item/readUnread"
import Create from "./pages/item/create"
import Update from "./pages/item/update"
import Delete from "./pages/item/delete"
import Header from "./components/header"
import Footer from "./components/footer"
import Main from "./pages/item/main"
import "./App.css"

const App = () => {
  const [login, setLogin] = useState(false)
  console.log(login)
  return (
    <BrowserRouter>
    <div>
      <Header login={login} />
      <Routes>
        <Route path="/user/register" element={<Register />} />
        <Route path="/user/login" element={<Login setLogin={setLogin}/>} />
        <Route path="/item/all" element={<ReadAll />} />
        <Route path="/item/finished" element={<ReadFinished />} />
        <Route path="/item/unread" element={<ReadUnread />} />
        <Route path="/" element={<Main />} />
        <Route path="/item/single/:id" element={<ReadSingle />} />
        <Route path="/item/create" element={<Create />} />
        <Route path="/item/update/:id" element={<Update />} />
        <Route path="/item/delete/:id" element={<Delete />} />
        <Route path="*" element={<h1>Page Not Found</h1>} />
      </Routes>
      <Footer />
    </div>
    </BrowserRouter>
  )
}

export default App