import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "./components/Home"
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from "./components/Header";
import Formm from "./components/Form";
import SingleDetails from "./components/Singledetail";
import CategoryForm from "./components/CategoryForm";


function App() {

  return (
    <>
    
      <BrowserRouter>
      <Header/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/form" element={<Formm/>}/>
          <Route path="/singledetail/:id" element={<SingleDetails/>}/>
          <Route path="/categoryform" element={<CategoryForm/>}/>
        </Routes>

      </BrowserRouter>


    </>
  )
}

export default App
