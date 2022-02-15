import NavBar from "../../core/navbar/navbar";
import Header from "./header/header";
import styles from "./home.module.css";
import ProductView from "./product-view/productView";

const Home = () => {
  return (
    <div>
      <NavBar />
      <Header />
      <ProductView />
    </div>
  );
};

export default Home;
