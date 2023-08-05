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
  // if (typeof window === "undefined") {
  //   return {
  //     props: {
  //       product: [],
  //     },
  //   };
  // }

  // const res = await fetch(`https://pc-builder-woad.vercel.app/api/product`);
  const res = await fetch(`https://assign-6server.vercel.app/products`);
  const data = await res.json();

  // Shuffle the product array using Fisher-Yates algorithm
  const shuffleArray = (array) => {
    let currentIndex = array.length;
    let temporaryValue;
    let randomIndex;

    // While there remain elements to shuffle...
    while (currentIndex !== 0) {
      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;

      // And swap it with the current element.
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }

    return array;
  };

  // Shuffle the product array
  const shuffledProduct = shuffleArray(data.data);
  return {
    props: {
      product: shuffledProduct,
    },
    revalidate: 10,
  };
};
