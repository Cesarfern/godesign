import {BrowserRouter, Route, Routes} from "react-router-dom"
import Inicio from "./Inicio"
import Quienes from "./Quienes"
import Seminarios_talleres from "./Seminarios_talleres"
import Comprar from "./Comprar"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Inicio/>} />
        <Route path="/quienes-somos" element={<Quienes/>} />
        <Route path="/seminarios-talleres" element={<Seminarios_talleres/>} />
        <Route path="/comprar" element={<Comprar/>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App