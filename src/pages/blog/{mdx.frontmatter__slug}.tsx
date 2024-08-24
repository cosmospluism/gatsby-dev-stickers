import React from "react";
import Layout from "../../components/Layout";
import { graphql } from "gatsby";
import Seo from "../Seo";
import { GatsbyImage, getImage } from "gatsby-plugin-image";

interface IBlogPostProps {
  data: Queries.PostDetailQuery;
  children: any;
}

// children : mdx파일 본문을 html형태로 만든 것
export default function BlogPost({ data, children }: IBlogPostProps) {
  const img = getImage(
    data.mdx?.frontmatter?.headerImage?.childImageSharp?.gatsbyImageData!
  );
  return (
    <Layout title="">
      <div>
        <div>{children}</div>
        <GatsbyImage image={img as any} alt="mainImg" />
      </div>
    </Layout>
  );
}

export const query = graphql`
  query PostDetail($frontmatter__slug: String) {
    mdx(frontmatter: { slug: { eq: $frontmatter__slug } }) {
      body
      frontmatter {
        author
        date
        title
        slug
        headerImage {
          childImageSharp {
            gatsbyImageData(placeholder: BLURRED)
          }
        }
      }
    }
  }
`;

export const Head = ({ data }: IBlogPostProps) => (
  <Seo title={data.mdx?.frontmatter?.title!} />
);
