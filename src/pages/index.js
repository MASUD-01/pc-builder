import Head from "next/head";
import RootLayout from "@/components/Layouts/RootLayout";
import { useGetNewsesQuery } from "@/redux/api/api";
import FeaturedImage from "@/components/UI/FeaturedImage";
const HomePage = ({ product }) => {
  const { data, isLoading, isError } = useGetNewsesQuery();
  return (
    <>
      <Head>
        <title>PC-BUILDER</title>
        <meta
          name="description"
          content="This is news portal of programming hero made by next-js"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <FeaturedImage product={product} />
    </>
  );
};
export default HomePage;

HomePage.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};
export const getStaticProps = async () => {
  const res = await fetch("http://localhost:5000/product");
  const data = await res.json();
  return {
    props: {
      product: data,
    },
    revalidate: 10,
  };
};
