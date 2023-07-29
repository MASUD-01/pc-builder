import { Card, Col, Row } from "antd";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const featuresCard = [
  {
    id: 1,
    image: "/1.jpeg",
    productName: "HP",
    category: "MSI PRO MP223 21.45 Full HD Business Monitor",
    price: "6767",
    status: "instock",
    Rating: "4 raitng",
  },
  {
    id: 2,
    image: "/2.jpeg",
    productName: "ASRock ",
    category: "MSI PRO MP241X 23.8 75Hz FHD Monitor",
    price: "6767",
    status: "instock",
    Rating: "4 raitng",
  },
  {
    id: 3,
    image: "/3.jpeg",
    productName: "Samsung Galaxy",
    category:
      "Samsung Galaxy Book2 360 Core i5 12th Gen 13.3 FHD AMOLED Touch Laptop",
    price: "6767",
    status: "instock",
    Rating: "4 raitng",
  },
  {
    id: 4,
    image: "/4.jpeg",
    productName: "Lenovo",
    category:
      "Lenovo IdeaPad 1 15AMN7 AMD Ryzen 5 15.6 FHD Laptop with DDR5 RAM",
    price: "6767",
    status: "instock",
    Rating: "4 raitng",
  },
  {
    id: 5,
    image: "/1.jpeg",
    productName: "Lenovo",
    category: "Lenovo IdeaPad 3 14ABA7 Ryzen 5 5625U 14 FHD Laptop",
    price: "6767",
    status: "instock",
    Rating: "4 raitng",
  },
  {
    id: 6,
    image: "/2.jpeg",
    productName: "Xiaomi",
    category:
      "Xiaomi Mi A2 L43M7-EAUKR 43-Inch 4K UltraHD Android Smart LED TV with Netflix Global",
    price: "6767",
    status: "instock",
    Rating: "5 raitng",
  },
];
const FeaturedImage = ({ product }) => {
  return (
    <Row gutter={[5, 5]} xs={24} sm={24} md={12} justify={"center"}>
      {product?.map((singleCard) => (
        <>
          <Col>
            <Link href={`/product/${singleCard.id}`}>
              <Card style={{ border: "1px solid gray" }}>
                <Image src={singleCard.image} height={300} alt="" width={250} />
                <h4>{singleCard.productName}</h4>
                <h4 style={{ width: "240px" }}>{singleCard.category}</h4>
                <h4>{singleCard.price}</h4>
                <h4>{singleCard.status}</h4>
                <h4>{singleCard.Rating}</h4>
              </Card>
            </Link>
          </Col>
        </>
      ))}
    </Row>
  );
};

export default FeaturedImage;
