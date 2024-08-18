import React from "react";
import Layout from "../components/Layout";
import Seo from "./Seo";

export default function AboutUs() {
  return (
    <Layout title="About us">
      <p>We are the happiest sticker store in the world 🌎 ⭐️</p>
    </Layout>
  );
}

export const Head = () => <Seo pageTitle="About us" />;
