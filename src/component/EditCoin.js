import { ErrorMessage } from "@hookform/error-message";
import React, { useEffect } from "react";
import { Modal, Form, Card, Button } from "react-bootstrap";
import { useForm } from "react-hook-form";

export default function EditCoin({
  updateCoin,
  show,
  handleClose,
  editIndex,
  PortfolioList,
}) {
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm();

  useEffect(() => {
    reset({
      price: PortfolioList[editIndex]?.price,
      qty: PortfolioList[editIndex]?.qty,
    });
  }, [PortfolioList]);

  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Edit Coin</Modal.Title>
      </Modal.Header>
      <Form>
        <Modal.Body>
          <Form.Group className="mb-3">
            <Form.Label>Buy-In Price (USD) :-</Form.Label>
            <Form.Control
              type="text"
              {...register("price", { required: "This is required." })}
            />
            <ErrorMessage
              errors={errors}
              name="price"
              render={({ message }) => (
                <Card.Text className="text-danger">{message}</Card.Text>
              )}
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>QTY :-</Form.Label>
            <Form.Control
              type="text"
              {...register("qty", { required: "This is required." })}
            />
            <ErrorMessage
              errors={errors}
              name="qty"
              render={({ message }) => (
                <Card.Text className="text-danger">{message}</Card.Text>
              )}
            />
          </Form.Group>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleSubmit(updateCoin)}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Form>
    </Modal>
  );
}
