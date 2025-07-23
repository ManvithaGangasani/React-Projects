import React, { useEffect, useState } from "react";

function App() {
  let [products, setProducts] = useState([]);

  useEffect(() => {
    window.fetch("https://dummyjson.com/products")
      .then((response) => response.json())
      .then((json) => setProducts(json.products));
  }, []);

  return (
    <div>
      <h2>Products Data</h2>
      <table border="1">
        <thead>
          <tr>
            <th rowSpan={2}>ID</th>
            <th rowSpan={2}>Title</th>
            <th rowSpan={2}>Price</th>
            <th rowSpan={2}>Weight</th>
            <th colSpan={3}>Dimensions</th>
          </tr>
          <tr>
            <th>width</th>
            <th>Height</th>
            <th>Depth</th>
          </tr>
        </thead>
        <tbody>
          {
            products.map((product) => (
              <tr>
                <td>{product.id}</td>
                <td>{product.title}</td>
                <td>{product.price}</td>
                <td>{product.weight}</td>
                <td>{product.dimensions.width}</td>
                <td>{product.dimensions.height}</td>
                <td>{product.dimensions.depth}</td>

              </tr>
            ))
          }
        </tbody>
      </table>
    </div>
  );
}

export default App;
