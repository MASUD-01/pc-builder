import RootLayout from "@/components/Layouts/RootLayout";
import React from "react";
import { Card, Col, Row } from "antd";
import Image from "next/image";
import Link from "next/link";
const Category = ({ singleProducts }) => {
  return (
    <Row gutter={[15, 15]} xs={24} sm={24} md={12} justify={"center"}>
      {singleProducts?.catagory?.map((singleProduct, index) => {
        return (
          <Col key={index}>
            <Link href={`/categoryDetails/${singleProducts.id}`}>
              <Card style={{ border: "1px solid gray", width: "400px" }}>
                <Image
                  src={singleProduct.image}
                  height={300}
                  alt=""
                  width={250}
                />
                <h4>{singleProduct.productName}</h4>
                <h4 style={{ width: "240px" }}>{singleProduct.category}</h4>
                <h4>{singleProduct.price}</h4>
                <h4>{singleProduct.status}</h4>
                <h4>{singleProduct.Rating}</h4>
              </Card>
            </Link>
          </Col>
        );
      })}
    </Row>
  );
};
export default Category;
Category.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};
export const getStaticPaths = async () => {
  const res = await fetch("https://assign-6server.vercel.app/category");
  const data = await res.json();
  const paths = data?.data?.map((product) => ({
    params: { category: product.id.toString() },
  }));
  return { paths, fallback: false };
};
export const getStaticProps = async ({ params }) => {
  const res = await fetch(
    `https://assign-6server.vercel.app/category/${params.category.toString()}`
  );
  const data = await res.json();
  console.log(data);
  return {
    props: {
      singleProducts: data,
    },
    revalidate: 10,
  };
};
