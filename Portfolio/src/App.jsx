import { BrowserRouter, Routes, Route } from "react-router-dom"
import NotFound from "./Pages/NotFound"
import Home from "./Pages/Home"

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route index element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<Home />} />
          <Route path="/skills" element={<Home />} />
          <Route path="/projects" element={<Home />} />
          <Route path="/contact" element={<Home />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App