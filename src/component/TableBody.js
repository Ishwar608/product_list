import React from "react";
import { Image } from "react-bootstrap";

export default function TableBody({ product }) {
  return (
    <tr>
      <td>{product.id}</td>
      <td>{product.title}</td>
      <td>{product.price}</td>
      <td>{product.description}</td>
      <td>{product.category}</td>
      <td>
        <Image src={product.image} width="100px" />
      </td>
      <td>
        <p>Count:-{product.rating.count}</p>
        <p>Rate:-{product.rating.rate}</p>
      </td>
    </tr>
  );
}
