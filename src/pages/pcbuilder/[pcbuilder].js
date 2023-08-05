import RootLayout from "@/components/Layouts/RootLayout";
import React from "react";
import { Button, Card, Col, Row } from "antd";
import Image from "next/image";
import { useSelector, useDispatch } from "react-redux";
import { add } from "../../redux/features/addpc";
import Link from "next/link";
const Pcbuilder = ({ singleProducts }) => {
  const dispatch = useDispatch();
  return (
    <Row gutter={[15, 15]} xs={24} sm={24} md={12} justify={"center"}>
      {singleProducts?.catagory?.map((singleProduct, index) => {
        return (
          <Col key={index}>
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
              <Link href="/pageBuilder/PageBuilder">
                <Button
                  type="primary"
                  onClick={() => dispatch(add(singleProducts))}
                >
                  Add To Builder
                </Button>
              </Link>
            </Card>
          </Col>
        );
      })}
    </Row>
  );
};
export default Pcbuilder;
Pcbuilder.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};
export const getStaticPaths = async () => {
  const res = await fetch("https://assign-6server.vercel.app/category");
  const data = await res.json();
  const paths = data?.data?.map((product) => ({
    params: { pcbuilder: product.id.toString() },
  }));
  return { paths, fallback: false };
};
export const getStaticProps = async ({ params }) => {
  const res = await fetch(
    `https://assign-6server.vercel.app/category/${params.pcbuilder.toString()}`
  );
  const data = await res.json();
  return {
    props: {
      singleProducts: data,
    },
    revalidate: 10,
  };
};
