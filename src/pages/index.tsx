import * as React from "react";
import Seo from "./Seo";
import Layout from "../components/Layout";

export default function IndexPage() {
  return (
    <Layout title="Welcome to DevStickers!">
      <div>
        <p>For your happy sticker life 🎀</p>
      </div>
    </Layout>
  );
}

export const Head = () => <Seo pageTitle="" />;
