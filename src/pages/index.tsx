import * as React from "react";
import Seo from "./Seo";
import Layout from "../components/Layout";
import { GatsbyImage, getImage, StaticImage } from "gatsby-plugin-image";
import { graphql, Link, PageProps } from "gatsby";

export default function IndexPage({
  data,
}: PageProps<Queries.StickerDataQuery>) {
  return (
    <Layout title="">
      <div>
        <StaticImage
          src="https://i.pinimg.com/564x/ed/44/fb/ed44fbf224a062e77796a341e3eb3e15.jpg"
          alt="main"
        />
        <hr />
        <h2>Sticker List 🎀 ⚡️</h2>
        <section className="grid">
          {data.allContentfulStickerPack.nodes.map((sticker) => (
            <article>
              <Link to={`/products/${sticker.slug}`}>
                <GatsbyImage
                  image={getImage(sticker.preview?.gatsbyImageData!)!}
                  alt={sticker.name!}
                />
                <h4>{sticker.name}</h4>
                <h5>$ {sticker.price}</h5>
              </Link>
            </article>
          ))}
        </section>
      </div>
    </Layout>
  );
}

export const query = graphql`
  query StickerData {
    allContentfulStickerPack {
      nodes {
        name
        price
        preview {
          gatsbyImageData(placeholder: BLURRED, width: 200)
        }
        slug
      }
    }
  }
`;

export const Head = () => <Seo title="" />;
