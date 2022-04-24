import { useState } from "react";
import Header from "../components/Header";
import { fileUpload } from "../services/fileUpload";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { url } from "../utils/url";
import "../styles/formulario.css";

export const RegistrarProducto = () => {
  const [data, setData] = useState({
    fabricador: "",
    nombreGrafica: "",
    imagen: "",
  });
  const [disable, setDisable] = useState(true);
  const navigate = useNavigate();

  const handleChange = ({ target: { name, value } }) => {
    setData({ ...data, [name]: value });
  };

  const handleChangeFile = ({ target: { files } }) => {
    const file = files[0];
    fileUpload(file)
      .then((file) => {
        setData({ ...data, imagen: file });
        setDisable(false);
      })
      .catch((error) => console.log(error));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post(url, data)
      .then((success) => navigate("/"))
      .catch((error) => console.log(error));
  };

  return (
    <>
      <Header />
      <div className="formulario-contenedor">
        <form action="" onSubmit={handleSubmit}>
          <h1>RegistrarProducto</h1>
          <input
            type="text"
            placeholder="fabicador"
            name="fabricador"
            onChange={handleChange}
          />
          <input
            type="text"
            placeholder="nombre de la grafica"
            name="nombreGrafica"
            onChange={handleChange}
          />
          <input type="file" onChange={handleChangeFile} name="imagen" />
          <button disabled={disable}>Registrar Producto</button>
        </form>
      </div>
    </>
  );
};
