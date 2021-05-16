import React from "react";
import { Link } from "react-router-dom";
import { Card, Row, Container } from "react-bootstrap";

const Product = ({ product }) => {
  return (
    <div>
      <div class="products-box my-3 p-3">
        <Row>
          <div class="special-grid top-featured" md={6} lg={3}>
            <div class="products-single fix">
              <div class="box-img-hover">
                <div class="type-lb">
                  <p class="new">New</p>
                </div>
                <Link to={`/product/${product._id}`}>
                  <img src={product.image} class="img-fluid" alt="Image" />
                </Link>
                <div class="mask-icon">
                  <Link to={`/product/${product._id}`}>
                    <a class="cart" href="#">
                      Add to Cart
                    </a>
                  </Link>
                </div>
              </div>
              <div class="why-text">
                <Link to={`/product/${product._id}`}>
                  <h4>{product.name}</h4>
                </Link>
                <h5> ${product.price}</h5>
              </div>
            </div>
          </div>
        </Row>
      </div>
      {/* 
      <Card className="my-3 p-3 rounded">
        <Link to={`/product/${product._id}`}>
          <Card.Img src={product.image} variant="top" />
        </Link>

        <Card.Body>
          <Link to={`/product/${product._id}`}>
            <Card.Title as="div">
              <strong>{product.name}</strong>
            </Card.Title>
          </Link>

          <Card.Text as="div">
            <Rating
              value={product.rating}
              text={`${product.numReviews} reviews`}
            />
          </Card.Text>

          <Card.Text as="h3">${product.price}</Card.Text>
        </Card.Body>
      </Card> */}
    </div>
  );
};

export default Product;
