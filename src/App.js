import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { getProjectDataStart } from "./Redux/Action/productAction";
import { addProductData } from "./Redux/Action/addProductData";
import { Button, Container, Spinner } from "react-bootstrap";
import TableData from "./component/TableData";

function App() {
  const page = 1;
  const limit = 5;

  const [productsList, setProductsList] = useState([]);

  const { error, isloadding, items } = useSelector(
    (state) => state.ProductsList
  );
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
  const AddProduct = () => {
    dispatch(
      addProductData({
        title: "test product",
        price: 13.5,
        description: "lorem ipsum set",
        image: "https://i.pravatar.cc",
        category: "electronic",
      })
    );
  };

  function showProductList(currentPage) {
    let start = (currentPage - 1) * limit;
    let end = start + limit;
    let data = items.slice(start, end);
    setProductsList(data);
  }

  return (
    <section>
      <h1>Hello</h1>
      {/* <button onClick={AddProduct}>Add Datas</button> */}
      {isloadding ? (
        <Spinner
          animation="border"
          variant="primary"
          className="position-absolute top-50 start-50"
        />
      ) : (
        <Container className="mt-5">
          {!isloadding && (
            <TableData
              TableData={productsList}
              TableHeadingsKey={Object.keys(items?.[0] || {})}
            />
          )}
          {Array.from({ length: PageCount }, (item, index) => (
            <Button
              key={item}
              className="m-2"
              onClick={() => showProductList(index + 1)}
            >
              {index + 1}
            </Button>
          ))}
        </Container>
      )}
    </section>
  );
}

export default App;
