import { useState, useEffect } from "react";
import { GetData } from "../services/GetData";
import { url } from "../utils/url";
import Loading from "./Loading";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export const ListadoProductos = () => {
  const [productos, setProductos] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  const showData = () => {
    setTimeout(() => {
      GetData(url)
        .then((data) => setProductos(data))
        .catch((error) => setError(error.message));
      setLoading(false);
    }, 100);
  };

  useEffect(() => {
    showData();
  }, []);

  const sendToProductoPage = (id) => navigate(`/${id}`);

  const deleteProduct = (id) => {
    axios
      .delete(url + id)
      .then((success) => showData())
      .catch((error) => console.log(error));
  };

  if (loading) return <Loading />;

  return (
    <div className="listado">
      {error && (
        <div className="error">
          <h1>{error}</h1>
        </div>
      )}
      <h1>Listado de Productos</h1>
      <div className="productos">
        {productos &&
          productos.map((producto) => (
            <div className="producto" key={producto.id}>
              <div className="img">
                <img src={producto.imagen} alt="" />
              </div>
              <p className="fabricador">{producto.fabricador}</p>
              <p className="nombre-grafica">{producto.nombreGrafica}</p>
              <div className="buttons">
                <button onClick={() => deleteProduct(producto.id)}>
                  Eliminar
                </button>
                <button onClick={() => sendToProductoPage(producto.id)}>
                  Ver
                </button>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};
