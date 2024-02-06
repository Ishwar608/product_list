import { ErrorMessage } from "@hookform/error-message";
import React, { useState } from "react";
import { Button, Card, Container, Form } from "react-bootstrap";
import { useForm } from "react-hook-form";
import PriceListData from "../../component/PriceListData";
import EditCoin from "../../component/EditCoin";

export default function PriceList() {
  const [PortfolioList, setPortfolioList] = useState([]);
  const [show, setShow] = useState(false);
  const [editIndex, setEditIndex] = useState();
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm();

  const onSubmit = (data) => {
    setPortfolioList([
      ...PortfolioList,
      { ...data, id: new Date().getMilliseconds() },
    ]);
    reset();
  };
  const removePortfolioList = (id) => {
    let portfolioList = PortfolioList.filter(
      (portfolio) => portfolio.id !== id
    );
    setPortfolioList(portfolioList);
  };

  const updateCoin = (updatedProps) => {
    setPortfolioList((current) => {
      return current.map((coin, i) => {
        if (editIndex === i) {
          return { ...coin, ...updatedProps };
        } else {
          return coin;
        }
      });
    });
    reset();
  };

  const totalValue = () => {
    return PortfolioList?.reduce((acc, coin) => {
      return acc + coin.qty * coin.price;
    }, 0);
  };

  return (
    <section>
      <Container className="py-5">
        <Form className="w-50 mx-auto border-1 rounded p-3">
          <Form.Group className="mb-3">
            <Form.Label>Coin Name :-</Form.Label>
            <Form.Control
              type="text"
              {...register("coinName", { required: "This is required." })}
            />
            <ErrorMessage
              errors={errors}
              name="coinName"
              render={({ message }) => (
                <Card.Text className="text-danger">{message}</Card.Text>
              )}
            />
          </Form.Group>
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
          <Form.Group className="mb-3">
            <Form.Label>Sample Data :-</Form.Label>
            <Form.Control
              type="text"
              {...register("sampleData", { required: "This is required." })}
            />
            <ErrorMessage
              errors={errors}
              name="sampleData"
              render={({ message }) => (
                <Card.Text className="text-danger">{message}</Card.Text>
              )}
            />
          </Form.Group>
          <Button type="submit" onClick={handleSubmit(onSubmit)}>
            Save
          </Button>
        </Form>
        <h1 className="mt-5 text-center">Portfolio List</h1>
        <h3>Total-Value : - {totalValue()}</h3>
        {PortfolioList.length > 0 &&
          PortfolioList?.map((portfolio, index) => (
            <PriceListData
              key={index}
              items={portfolio}
              index={index}
              removePortfolioList={removePortfolioList}
              setShow={setShow}
              setEditIndex={setEditIndex}
            />
          ))}
      </Container>
      <EditCoin
        show={show}
        handleClose={() => setShow(false)}
        updateCoin={updateCoin}
        editIndex={editIndex}
        PortfolioList={PortfolioList}
      />
    </section>
  );
}
