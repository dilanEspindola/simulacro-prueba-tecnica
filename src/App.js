import { Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home";
import { RegistrarProducto } from "./pages/RegistrarProducto";

import "./App.css";
import { Producto } from "./pages/Producto";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/registrar-producto" element={<RegistrarProducto />} />
        <Route path="/:productoId" element={<Producto />} />
      </Routes>
    </div>
  );
}

export default App;
