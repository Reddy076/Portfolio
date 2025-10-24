import { BrowserRouter , Routes, Route } from "react-router-dom"
import NotFound from "./Pages/NotFound"
import Home from "./Pages/Home"



function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <BrowserRouter> 
    <Routes>
      <Route index element={<Home />} />
      <Route path="*" element={<NotFound />}  />
    </Routes> 
    </BrowserRouter>
      
    </>
  )
}

export default App
