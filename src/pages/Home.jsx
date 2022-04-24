import Header from "../components/Header";
import { ListadoProductos } from "../components/ListadoProductos";
import "../styles/home.css";

export const Home = () => {
  return (
    <div>
      <Header />
      <ListadoProductos />
    </div>
  );
};
