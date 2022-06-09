import React from 'react';
import styled from 'styled-components';

const BlogsStyles = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
  .blog-title {
    margin: 80px;
    text-align: center;
    font-size: 32px;
  }
`;
const Blogs = () => (
  <BlogsStyles>
    <h2 className="blog-title">Coming Soon</h2>
    <p />
  </BlogsStyles>
);

export default Blogs;
