import React from "react";
import { Table } from "react-bootstrap";
import TableBody from "./TableBody";

export default function TableData({ TableHeadingsKey, TableData }) {
  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          {TableHeadingsKey?.map((heading) => (
            <th key={heading}>{heading.toUpperCase()}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {TableData?.map((product) => (
          <TableBody key={product?.id} product={product} />
        ))}
      </tbody>
    </Table>
  );
}
