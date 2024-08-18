import React from "react";
import Layout from "../components/Layout";
import Seo from "./Seo";
import { graphql, PageProps } from "gatsby";

export default function Blog({ data }: PageProps<Queries.BlogTitlesQuery>) {
  return (
    <Layout title="Blog">
      <p>News from our shop! 🔖</p>
      <ul>
        {data.allFile.nodes.map((file, index) => (
          <li key={index}>{file.name}</li>
        ))}
      </ul>
    </Layout>
  );
}

export const query = graphql`
  query BlogTitles {
    allFile {
      nodes {
        name
      }
    }
  }
`;

export const Head = () => <Seo pageTitle="Blog" />;
