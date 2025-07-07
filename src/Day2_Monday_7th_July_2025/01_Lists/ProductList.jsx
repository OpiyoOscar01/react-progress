export const ProductList=()=>{
  const products = [
  { id: 1, name: "Laptop", price: 1200 },
  { id: 2, name: "Smartphone", price: 800 },
  { id: 3, name: "Headphones", price: 150 },
];
const style = { color: "green", listStyleType: "none" };
return (
  <div className="product-list">
    <h1>Products</h1>
    <ul>
      {
        products.map(({id,name,price})=>(
          <li key={id} style={style}>
            <strong>{name}</strong>-Price: ${price} (ID:{id})
          </li>
        ))
      }
    </ul>
  </div>
);

}