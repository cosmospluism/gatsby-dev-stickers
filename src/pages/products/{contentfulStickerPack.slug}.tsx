import React from "react";
import Layout from "../../components/Layout";
import { graphql, PageProps } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";

export default function ProductDetail({
  data,
}: PageProps<Queries.ProductQuery>) {
  return (
    <Layout title={data.contentfulStickerPack?.name!}>
      <div>
        <GatsbyImage
          image={
            getImage(data.contentfulStickerPack?.preview?.gatsbyImageData!)!
          }
          alt={data.contentfulStickerPack?.name!}
        />
        <h4>$ {data.contentfulStickerPack?.price}</h4>
      </div>
    </Layout>
  );
}

export const query = graphql`
  query Product($slug: String) {
    contentfulStickerPack(slug: { eq: $slug }) {
      id
      name
      preview {
        gatsbyImageData(width: 200, placeholder: BLURRED)
      }
      price
      slug
    }
  }
`;
