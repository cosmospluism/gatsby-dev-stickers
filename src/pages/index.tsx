import * as React from "react";
import Seo from "./Seo";
import Layout from "../components/Layout";
import { StaticImage } from "gatsby-plugin-image";

export default function IndexPage() {
  return (
    <Layout title="Welcome to DevStickers!">
      <div>
        <StaticImage
          src="https://i.pinimg.com/564x/ed/44/fb/ed44fbf224a062e77796a341e3eb3e15.jpg"
          alt="main"
        />
        <p>For your happy sticker life 🎀</p>
      </div>
    </Layout>
  );
}

export const Head = () => <Seo title="" />;
