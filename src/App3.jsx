import { useState } from "react"
import { Input } from "./components/forms/input"
import { Checkbox } from "./components/forms/checkbox"
import { ProductRow } from "./components/products/ProductRow"
import { ProductCat } from "./components/products/ProductCat"

const PRODUCTS = [
  { category: "Fruits", price: '1$', stocked: true, name: 'Banana' },
  { category: "Fruits", price: '1$', stocked: true, name: 'Apple' },
  { category: "Fruits", price: '2$', stocked: false, name: 'Orange' },
  { category: "Vegetables", price: '2$', stocked: true, name: 'Carrot' },
  { category: "Vegetables", price: '4$', stocked: false, name: 'Broccoli' },
  { category: "Vegetables", price: '1$', stocked: true, name: 'Spinach' },
]

function App3() {

  const [showStockedOnly, setShowStockedOnly] = useState(false);
  const [search, setSearch] = useState('');

  // Filtrer les produits en fonction des critères
  const visibleProducts = PRODUCTS.filter((product) => {
    if (showStockedOnly && !product.stocked) {
      return false
    }
    if (search && !product.name.toLowerCase().includes(search.toLowerCase())) {
      return false
    }
    return true
  })

  return <div className="container my-3">
    <SearchBar search={search} onSearchChange={setSearch} showStockedOnly={showStockedOnly} onStockedOnlyChanged={setShowStockedOnly} />
    <ProductTable productsList={visibleProducts} />
  </div>
}

function SearchBar({showStockedOnly, search, onSearchChange, onStockedOnlyChanged}) {
  return <div>
    <div className="mb-3">
      <Input value={search} onChange={onSearchChange} placeholder="Search..." />
      <Checkbox checked={showStockedOnly}
      id="stocked"
      onChange={onStockedOnlyChanged}
      label="Afficher les produits en stock" />
    </div>
  </div>
}

function ProductTable({productsList}) {
  const rows = []
  let lastCategory = null


  for (let product of productsList) {
    if (product.category !== lastCategory) {
      rows.push(<ProductCat name={product.category} key={product.category} />)
    }
    lastCategory = product.category
    rows.push(<ProductRow product={product} key={product.name} />)
  }
  return <table>
    <thead>
      <tr>
        <th>Nom</th>
        <th>Prix</th>
      </tr>
    </thead>
    <tbody>
      {rows}
    </tbody>
  </table>
}
export default App3
