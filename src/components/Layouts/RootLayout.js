import { Col, Dropdown, Layout, Menu, Row, Space } from "antd";
const { Header, Content, Footer } = Layout;
import styles from "@/styles/Home.module.css";
import Link from "next/link";
const itemsMenu = [
  {
    id: 1,
    item: "CPU/Processor",
    link: "/category",
  },
  {
    id: 2,
    item: "Motherboard",
    link: "/category",
  },
  {
    id: 3,
    item: "RAM",
  },
  {
    id: 4,
    item: "Power Supply unit",
  },
  {
    id: 5,
    item: "Storage Device",
  },
  {
    id: 6,
    item: "Monitor",
  },
  {
    id: 7,
    item: "Others",
  },
];
const CategoryMenu = itemsMenu.map((item) => {
  return {
    label: <Link href={`${item.link}/${item.id}`}>{item.item}</Link>,
    key: item.id,
  };
});

const RootLayout = ({ children }) => {
  return (
    <Layout>
      <Header style={{ height: "auto" }}>
        <Row justify={"space-between"} gutter={[10, 10]}>
          <Col xs={8} sm={8} md={8} lg={8} xl={8}>
            <div className="brand-logo">
              <h1>
                <Link
                  href="/"
                  style={{
                    color: "white",
                    backgroundColor: "#404040",
                    padding: "5px 10px",
                    borderRadius: "3px",
                  }}
                >
                  PC Gaget
                </Link>
              </h1>
            </div>
          </Col>
          <Col xs={8} sm={8} md={8} lg={8} xl={8}>
            {" "}
            <Dropdown menu={{ items: CategoryMenu }}>
              <a onClick={(e) => e.preventDefault()}>Categories</a>
            </Dropdown>
          </Col>
          <Col xs={8} sm={8} md={8} lg={8} xl={8}>
            {" "}
            <Link
              href="/contact"
              style={{
                color: "white",
                backgroundColor: "#404040",
              }}
            >
              <items>PC Builder</items>
            </Link>
          </Col>
        </Row>
      </Header>

      <Content
        style={{
          padding: "0 24px",
          minHeight: "100vh",
          marginTop: "20px",
        }}
      >
        {children}
      </Content>

      <Footer
        style={{
          textAlign: "center",
        }}
      >
        <div className={styles.line}></div>
        <h2
          style={{
            fontSize: "28px",
          }}
        >
          PC Gadget
        </h2>
      </Footer>
    </Layout>
  );
};
export default RootLayout;
