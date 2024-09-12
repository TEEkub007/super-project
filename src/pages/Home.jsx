/* eslint-disable no-unused-vars */
import React from "react";
import Layout from "../components/Layout";
import Products from "./Products";
import Slideshow from "../components/slideshow";


const Home = () => {
  return (
    <Layout>
      <div className="p-4 md:p-6 lg:p-8">
        <h1 className="text-3xl md:text-4xl lg:text-6xl font-bold text-center text-purple-500 mb-4">
          สินค้าต่างๆ
        </h1>
        <Slideshow />
        <Products />
      </div>
    </Layout>
  );
};

export default Home;
