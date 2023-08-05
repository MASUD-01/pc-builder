import RootLayout from "../../components/Layouts/RootLayout";
import { Card } from "antd";
import Image from "next/image";
import React from "react";

const product = ({ singleProduct }) => {
  return (
    <Card style={{ border: "1px solid gray", width: "400px" }}>
      <Image src={singleProduct.image} height={300} alt="" width={250} />
      <h4>{singleProduct.productName}</h4>
      <h4 style={{ width: "240px" }}>{singleProduct.category}</h4>
      <h4>{singleProduct.price}</h4>
      <h4>{singleProduct.status}</h4>
      <h4>{singleProduct.Rating}</h4>
    </Card>
  );
};

export default product;
product.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};

export const getStaticPaths = async () => {
  const res = await fetch("https://assign-6server.vercel.app/products");
  const data = await res.json();
  const paths = data?.data?.map((product) => ({
    params: { product: product.id.toString() },
  }));
  return { paths, fallback: false };
};
export const getStaticProps = async ({ params }) => {
  const res = await fetch(
    `https://assign-6server.vercel.app/products/${params.product}`
  );
  const data = await res.json();
  return {
    props: {
      singleProduct: data,
    },
    revalidate: 10,
  };
};
