import Home from "./components/home";
import About from "./components/about";
import Courses from "./components/courses";
import Layout from "./components/layout";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css"
import "bootstrap/dist/js/bootstrap.bundle"
const App = ()=>{
  return(
   
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="courses" element={<Courses />} />
        
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
export default App 