export function ProductRow({ product }) {
  const style = product.stocked ? {} : { color: 'red' }
  return <tr className="align-middle">
    <td style={style}>{product.name}</td>
    <td>{product.price}</td>
  </tr>
}

// product attend un objet produit
