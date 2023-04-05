import BlogPostComponent from "@/components/blogPostComponent/BlogPostComponent";
import PaginationComponent from "@/components/pagination/PaginationComponent";
import { serverSideBlogCount } from "@/getServerSideCalls/getServerSideCalls-Index-Pagination";
import { useState, useEffect } from "react";
import type { GetServerSideProps } from "next";
import { Oval } from "react-loader-spinner";
import { IBlogCountPostInParts, IBlogPost } from "..";

export default function PartHome({
  allBlogCount,
  allBlogPostsInParts,
}: IBlogCountPostInParts) {
  const [loading, setLoading] = useState<boolean>(true);
  console.log(allBlogCount, "getServerSideProps");
  const parsedBlogPosts = JSON.parse(allBlogPostsInParts);
  console.log(parsedBlogPosts, "parsedBlogPosts");



  return (
    <>
      <div className="blog-list px-md-5 py-5 p-md-5">
        <div className="container single-col-max-width">
          {parsedBlogPosts.map((blogPost: IBlogPost) => (
            <BlogPostComponent key={blogPost._id} blogPost={blogPost} />
          ))}
          {parsedBlogPosts.length === 0 && <h3>No posts yet /Loading</h3>}
        </div>
      </div>

      <PaginationComponent allBlogCount={allBlogCount} />
    </>
  );
}

// This gets called on every request
export const getServerSideProps: GetServerSideProps = async (context: any) => {
  // Fetch data from external API
  // const res = await fetch(domain + "/api/blog-post/get-all");
  // const data = await res.json();
  console.log("oofffffffff");

  const { allBlogCount, allBlogPostsInParts } = await serverSideBlogCount(
    context
  );

  // Pass data to the page via props
  return { props: { allBlogCount, allBlogPostsInParts } };
};
