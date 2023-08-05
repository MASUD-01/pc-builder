import { Card, Col, Row } from "antd";
import Image from "next/image";
import Link from "next/link";
import React from "react";
const FeaturedImage = ({ product }) => {
  return (
    <Row gutter={[15, 15]} xs={24} sm={24} md={12} justify={"center"}>
      {product?.map((singleCard, index) => (
        <Col key={index}>
          <Link href={`/product/${singleCard.id}`}>
            <Card style={{ border: "1px solid gray", height: "500px" }}>
              <Image src={singleCard.image} height={300} alt="" width={250} />
              <h4>{singleCard.productName}</h4>
              <h4 style={{ width: "240px" }}>{singleCard.category}</h4>
              <h4>{singleCard.price}</h4>
              <h4>{singleCard.status}</h4>
              <h4>{singleCard.Rating}</h4>
            </Card>
          </Link>
        </Col>
      ))}
    </Row>
  );
};

export default FeaturedImage;
