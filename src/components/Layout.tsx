import React from "react";
import { Link } from "gatsby";

interface ILayoutProps {
  children: any;
  title: string;
}

export default function Layout({ children, title }: ILayoutProps) {
  return (
    <div className="container">
      <nav>
        <ul
          style={{
            all: "unset",
            display: "flex",
            flexDirection: "row",
            gap: "20px",
            listStyle: "none",
            margin: "30px 20px",
          }}
        >
          <li>
            <Link to="/">Go Home</Link>
          </li>
          <li>
            <Link to="/about-us">About Us</Link>
          </li>
          <li>
            <Link to="/blog">Blog</Link>
          </li>
        </ul>
      </nav>
      <main>
        <h1>{title}</h1>
        {children}
      </main>
    </div>
  );
}
