import BlogPostComponent from "@/components/blogPostComponent/BlogPostComponent";
import SearchComponent from "@/components/searchComponent/searchComponent";
import React, { useState } from "react";
import { IBlogPost } from "..";

const SearchPage = () => {
  const [parsedBlogPosts, setParsedBlogPosts] = useState([]);

  return (
    <div>
      <SearchComponent setParsedBlogPosts={setParsedBlogPosts} />
      <>
        <div className="blog-list px-md-5 py-5 p-md-5">
          <div className="container single-col-max-width">
            {parsedBlogPosts.map((blogPost: IBlogPost) => (
              <BlogPostComponent key={blogPost._id} blogPost={blogPost} />
            ))}
          </div>
        </div>
      </>
    </div>
  );
};

export default SearchPage;
