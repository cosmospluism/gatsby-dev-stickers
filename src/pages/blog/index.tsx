import React from "react";
import Layout from "../../components/Layout";
import Seo from "../Seo";
import { graphql, Link, PageProps } from "gatsby";

export default function Blog({ data }: PageProps<Queries.MdxDataQuery>) {
  return (
    <Layout title="Blog">
      <section className="grid">
        {data.allMdx.nodes.map((file, index) => (
          <article key={index}>
            <Link to={`/blog/${file.frontmatter?.slug}`}>
              <h2>{file.frontmatter?.title}</h2>
              <h4>
                A post from {file.frontmatter?.author} ({file.frontmatter?.date}
                )
              </h4>
              <p>{file.excerpt}</p>
            </Link>
          </article>
        ))}
      </section>
    </Layout>
  );
}

export const query = graphql`
  query MdxData {
    allMdx {
      nodes {
        frontmatter {
          title
          category
          date(formatString: "YY.MM.DD")
          author
          slug
        }
        excerpt(pruneLength: 50)
      }
    }
  }
`;

export const Head = () => <Seo title="Blog" />;
