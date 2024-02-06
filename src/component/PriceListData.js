import React from "react";
import { Button, ListGroup } from "react-bootstrap";

export default function PriceListData({
  items,
  removePortfolioList,
  setShow,
  index,
  setEditIndex,
}) {
  return (
    <ListGroup horizontal className="justify-content-center">
      <ListGroup.Item>{items.coinName}</ListGroup.Item>
      <ListGroup.Item>{items.price}</ListGroup.Item>
      <ListGroup.Item>{items.qty}</ListGroup.Item>
      <ListGroup.Item>{items.sampleData}</ListGroup.Item>
      <ListGroup.Item>
        <Button
          onClick={() => {
            setEditIndex(index);
            setShow(true);
          }}
        >
          Edit
        </Button>
      </ListGroup.Item>
      <ListGroup.Item>
        <Button variant="danger" onClick={() => removePortfolioList(items.id)}>
          Delete
        </Button>
      </ListGroup.Item>
    </ListGroup>
  );
}
