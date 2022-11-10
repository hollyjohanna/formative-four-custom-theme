import { useAxios } from "use-axios-client";
import { Link } from "react-router-dom";
// Import utilities
import formatPrice from "./utilities/formatPrice";

const baseStoreUrl = process.env.REACT_APP_WOO_BASEURL;

const AllProducts = () => {
  const endpoint = `${baseStoreUrl}products`;
  const {
    data: products,
    error,
    loading,
  } = useAxios({
    url: endpoint,
  });
  if (loading) return "Loading...";
  if (!products) return "No data...";
  if (products.length === 0) return "No results found!";
  if (error) return "Error!";

  console.log(products);
  const showProducts = products.map((product, index) => {
    return (
      <div className="shop-product" key={index}>
        <Link>
          <h4>{product.name}</h4>
          {product.prices.currency_prefix}
          {formatPrice(product.prices.price)}
          <img id="shop-img" src={product.images[0].src} alt={product.name} />
        </Link>
      </div>
    );
  });
  return showProducts;
};

const ShopFront = () => {
  return (
    <div>
      <div id="nav-background"></div>
      ShopFront
      <AllProducts />
    </div>
  );
};

export default ShopFront;
