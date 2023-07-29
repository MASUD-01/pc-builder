import RootLayout from "@/components/Layouts/RootLayout";
import React from "react";

const category = () => {
  return <div>category</div>;
};
export default category;
category.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};
