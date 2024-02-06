import React, { useEffect, useState } from "react";
import { Button, Container, Spinner, Stack } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";

import TableData from "../../component/TableData";
import { getProjectDataStart } from "../../Redux/Action/productAction";

export default function ProductList() {
  const page = 1;
  const limit = 3;

  const [productsList, setProductsList] = useState([]);

  const { isloadding, items } = useSelector((state) => state.ProductsList);
  const dispatch = useDispatch();

  const PageCount = Math.ceil(items?.length / limit);

  useEffect(() => {
    dispatch(getProjectDataStart());
  }, [dispatch]);

  useEffect(() => {
    if (items) {
      showProductList(page);
    }
  }, [items]);

  function showProductList(currentPage) {
    let start = (currentPage - 1) * limit;
    let end = start + limit;
    let data = items.slice(start, end);
    setProductsList(data);
  }
  return (
    <section>
      <h1 className="text-center">Product List</h1>
      {isloadding ? (
        <Spinner
          animation="border"
          variant="primary"
          className="position-absolute top-50 start-50"
        />
      ) : (
        <Container className="py-5">
          {!isloadding && (
            <TableData
              TableData={productsList}
              TableHeadingsKey={Object.keys(items?.[0] || {})}
            />
          )}
          <Stack
            direction="horizontal"
            gap={3}
            className="justify-content-center"
          >
            {Array.from({ length: PageCount }, (item, index) => (
              <Button key={item} onClick={() => showProductList(index + 1)}>
                {index + 1}
              </Button>
            ))}
          </Stack>
        </Container>
      )}
    </section>
  );
}
