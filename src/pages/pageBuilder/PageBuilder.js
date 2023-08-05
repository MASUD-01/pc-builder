import RootLayout from "@/components/Layouts/RootLayout";
import { Button, Card, Col, Image, Row } from "antd";
import Link from "next/link";
import React from "react";
import { useSelector, useDispatch } from "react-redux";
const PageBuilder = () => {
  const pcbuilder = useSelector((state) => state.addpc.value);

  const pcBuilder = [
    {
      img: "/01.jpg",
      name: "CPU",
      link: "/pcbuilder/1",
    },
    {
      img: "/01.jpg",
      name: "Motherboard",
      link: "/pcbuilder/2",
    },
    {
      img: "/01.jpg",
      name: "RAM",
      link: "/pcbuilder/3",
    },
    {
      img: "/01.jpg",
      name: "Power supply unit",
      link: "/pcbuilder/4",
    },
    {
      img: "/01.jpg",
      name: "Storage device",
      link: "/pcbuilder/5",
    },
    {
      img: "/01.jpg",
      name: "Monitor",
      link: "/pcbuilder/6",
    },
  ];

  return (
    <>
      {pcBuilder.map((pc, index) => (
        <Link href={pc.link} key={index}>
          <Card style={{ border: "1px solid gray", width: "100%" }}>
            <Row align={"middle"}>
              <Col span={6}>
                <Image src={pc.img} height={50} alt="" width={50} />
              </Col>
              <Col span={12}>{pc.name}</Col>
              <Col span={6}>
                <Button>Choose</Button>
              </Col>
            </Row>
          </Card>
        </Link>
      ))}
    </>
  );
};

export default PageBuilder;
PageBuilder.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};
