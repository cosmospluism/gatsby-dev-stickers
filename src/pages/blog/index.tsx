import React from "react";
import Layout from "../../components/Layout";
import Seo from "../Seo";
import { graphql, Link, PageProps } from "gatsby";

export default function Blog({ data }: PageProps<Queries.MdxDataQuery>) {
  return (
    <Layout title="Blog">
      <section style={{ margin: 70 }}>
        {data.allMdx.nodes.map((file, index) => (
          <article key={index}>
            <Link to={`/blog/${file.frontmatter?.slug}`}>
              <h2>{file.frontmatter?.title}</h2>
              <h4 style={{ marginLeft: 300, fontWeight: 600 }}>
                A post from {file.frontmatter?.author} ({file.frontmatter?.date}
                )
              </h4>
              <hr />
              <p>{file.excerpt}</p>
            </Link>
          </article>
        ))}
      </section>
    </Layout>
  );
}

// Gatsby 프레임워크 룰 -- export const query = graphql``
// gatsby-config.ts 파일에서 plugins>options>path에 적어둔 폴더와 연결되어 있음
// 아래 쿼리에서 찾아온 데이터 --> name의 값이 위 Blog 함수의
// 데이터data 값으로 자동으로 들어감 (갯츠비 프레임워크의 작동 방식이라 그냥 따라야됨)
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

export const Head = () => <Seo pageTitle="Blog" />;
