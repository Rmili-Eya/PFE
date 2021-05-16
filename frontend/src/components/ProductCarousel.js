import React from "react";
import { Row, Container } from "react-bootstrap";
/**
 * @author
 * @function ProductCarousel
 **/

const ProductCarousel = (props) => {
  return (
    <div className="bg cover-slides text-center">
      <Container>
        <Row>
          <div md={12}>
            <h1 class="m-b-20">
              <strong>
                Welcome To <br /> Freshshop
              </strong>
            </h1>
            <p>
              <a class="btn hvr-hover" href="#">
                Shop Now
              </a>
            </p>
          </div>
        </Row>
      </Container>
    </div>
  );
};

export default ProductCarousel;
