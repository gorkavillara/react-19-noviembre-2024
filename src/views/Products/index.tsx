import { Link, useSearchParams } from "react-router-dom"
import Eye from "../Users/icons/eye"
import { products } from "../../assets/constants"

const Products = () => {
  const [searchParams] = useSearchParams()
//   const params = new URLSearchParams(window.location.search)
  console.log(searchParams.get("productId"))

  const productId = searchParams.get("productId")
  const product = products.find((prod) => prod.id === productId)

  if (!product)
    return (
      <div>
        <h3>Products list</h3>
        <ul>
          {products.map((product) => {
            // const url = new URL("http://localhost:5173/products")
            // url.searchParams.set("productId", product.id.toString())
            const params = new URLSearchParams([["productId", product.id]])
            return (
              <li key={product.id}>
                {product.name} ({product.price} €){" "}
                <Link to={`/products?${params}`}>
                  <Eye />
                </Link>
              </li>
            )
          })}
        </ul>
      </div>
    )

  return <p>Nombre del producto: {product.name}</p>
}

export default Products
