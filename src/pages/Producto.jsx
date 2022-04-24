import { useParams, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { GetData } from "../services/GetData";
import { url } from "../utils/url";
import Loading from "../components/Loading";
import "../styles/singleProdut.css";

export const Producto = () => {
  const { productoId } = useParams();
  const idToNumber = Number(productoId);
  const [productos, setProductos] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    GetData(url)
      .then((data) => setProductos(data))
      .catch((error) => console.log(error));
    setLoading(false);
  }, []);

  const unicoProducto = productos.find((producto) => producto.id == idToNumber);

  if (loading) return <Loading />;

  return (
    <>
      {unicoProducto && (
        <div className="productoId">
          <div className="contenedor">
            <img src={unicoProducto.imagen} alt="" />
            <div className="desc-txt">
              <p className="fabricador">{unicoProducto.fabricador}</p>
              <p className="nombre-grafica">{unicoProducto.nombreGrafica}</p>
            </div>
            <Link to="/" className="volver">
              Volver
            </Link>
          </div>
        </div>
      )}
    </>
  );
};
