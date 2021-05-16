import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Row, Col, Container } from "react-bootstrap";
import Product from "../components/Product";
import Message from "../components/Message";
import Loader from "../components/Loader";
import Paginate from "../components/Paginate";
import ProductCarousel from "../components/ProductCarousel";
import Meta from "../components/Meta";
import { listProducts } from "../actions/productActions";
import Footer from "../components/Footer";

const HomeScreen = ({ match }) => {
  const keyword = match.params.keyword;

  const pageNumber = match.params.pageNumber || 1;

  const dispatch = useDispatch();

  const productList = useSelector((state) => state.productList);
  const { loading, error, products, page, pages } = productList;

  useEffect(() => {
    dispatch(listProducts(keyword, pageNumber));
  }, [dispatch, keyword, pageNumber]);

  return (
    <>
      <Meta />

      <ProductCarousel />
      <div class="categories-shop">
        <Container>
          <Row>
            <div class="col-lg-4 col-md-4 col-sm-12 col-xs-12">
              <div class="shop-cat-box">
                <img
                  class="img-fluid"
                  src="images/categories_img_01.jpg"
                  alt=""
                />
                <a class="btn hvr-hover" href="#">
                  Lorem ipsum dolor
                </a>
              </div>
            </div>
            <div class="col-lg-4 col-md-4 col-sm-12 col-xs-12">
              <div class="shop-cat-box">
                <img
                  class="img-fluid"
                  src="images/categories_img_02.jpg"
                  alt=""
                />
                <a class="btn hvr-hover" href="#">
                  Lorem ipsum dolor
                </a>
              </div>
            </div>
            <div class="col-lg-4 col-md-4 col-sm-12 col-xs-12">
              <div class="shop-cat-box">
                <img
                  class="img-fluid"
                  src="images/categories_img_03.jpg"
                  alt=""
                />
                <a class="btn hvr-hover" href="#">
                  Lorem ipsum dolor
                </a>
              </div>
            </div>
          </Row>
        </Container>
      </div>
      {loading ? (
        <Loader />
      ) : error ? (
        <Message variant="danger">{error}</Message>
      ) : (
        <>
          <Container>
            <Row>
              {products.map((product) => (
                <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
                  <Product product={product} />
                </Col>
              ))}
            </Row>
          </Container>

          <Paginate
            pages={pages}
            page={page}
            keyword={keyword ? keyword : ""}
          />
        </>
      )}
    </>
  );
};

export default HomeScreen;
