/*

const ProductInfo=({name,price,availability})=>{
  return(
    <div>
      <h2>{name}</h2>
      <p>Price: ${price}</p>
      <p>Status: {availability ? "In Stock" : "Out of Stock"}</p>
    </div>
  );
}
export default ProductInfo;
*/


export const ProductInfo = (props) => {
  return (
    <div>
      <h2>{props.name}</h2>
      <p>Price: ${props.price}</p>
      <p>Status: {props.availability ? "In Stock" : "Out of Stock"}</p>
      <p>Purchase Date: {new Date().toLocaleDateString()}</p>
    </div>
  );
}