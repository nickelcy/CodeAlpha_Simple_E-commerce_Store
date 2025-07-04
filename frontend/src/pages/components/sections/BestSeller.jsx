import { FiLoader } from "react-icons/fi";
import { useEffect, useState } from "react";
import ProductCardsMap from "../ProductCardsMap";
import ProductPopUp from "../ProductPopUp";

const BestSeller = ({ productsProp, addToCart }) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [clicked, setClick] = useState(false);
  const [chosenProduct , setChosenProduct] = useState([]);

  useEffect(() => {
    if (Array.isArray(productsProp) && productsProp.length > 0) {
      setProducts(productsProp);
      setLoading(false);
    }
  }, [productsProp]);

  if (loading) {
    return (
      <div className="container-fluid d-flex flex-column justify-content-center align-items-center">
        <h2 className="mt-5 mb-0 mb-md-2 text-center">BEST SELLERS</h2>
        <h5 className="text-dark text-center mt-5 mb-0">Loading</h5>
        <p className="text-muted">
          This may take a moment as the free database hosting service needs time
          to wake up after being idle. Try reloading.
        </p>
        <FiLoader size={50} className="mb-5 mt-0 loader" />
      </div>
    );
  }

  return (
    <>
      <ProductPopUp
        clicked={clicked}
        setClick={setClick}
        chosenProduct={chosenProduct}
        setChosenProduct={setChosenProduct}
        addToCart={addToCart}
      />
      <div className="container mt-5">
        <h2 className="mb-0 mb-md-2 text-center">BEST SELLERS</h2>
        <ProductCardsMap
          productsArr={products}
          setClick={setClick}
          setChosenProduct={setChosenProduct}
          addToCart={addToCart}
        />
      </div>
    </>
  );
};

export default BestSeller;
