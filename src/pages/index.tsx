import PaginationComponent from "@/components/pagination/PaginationComponent";

import { serverSideBlogCount } from "@/getServerSideCalls/getServerSideCalls";
import { useState, useEffect } from "react";

import { Oval } from "react-loader-spinner";

import BlogPostComponent from "@/components/blogPostComponent/BlogPostComponent";
export default function Home({ allBlogCount, allBlogPostsInParts }: any) {
  const [loading, setLoading] = useState<boolean>(true);
  console.log(allBlogCount, "getServerSideProps");
  const parsedBlogPosts = JSON.parse(allBlogPostsInParts);
  console.log(parsedBlogPosts, "parsedBlogPosts");

  return (
    <div className="container-fluid mt-5">
      <h6 className="mb-3 text-center mb-3">Welcome!</h6>
      <div
        className="row g-5 text-center  border border-secondary rounded"
        //@ts-ignore
        style={{ "--bs-border-opacity": 0.25 }}
      >
        {!loading ? (
          <p>oof</p>
        ) : (
          <div className="d-flex flex-wrap align-items-center justify-content-center mb-2">
            <Oval
              height={80}
              width={80}
              color="#4fa94d"
              wrapperStyle={{}}
              wrapperClass=""
              visible={true}
              ariaLabel="oval-loading"
              secondaryColor="#4fa94d"
              strokeWidth={2}
              strokeWidthSecondary={2}
            />
          </div>
        )}
      </div>

      <div>
        {parsedBlogPosts.map((blogPost: any) => (
          <BlogPostComponent blogPost={blogPost} />
        ))}
      </div>

      <PaginationComponent allBlogCount={allBlogCount} />
    </div>
  );
}

// This gets called on every request
export async function getServerSideProps(context: any) {
  // Fetch data from external API
  // const res = await fetch(domain + "/api/blog-post/get-all");
  // const data = await res.json();
  console.log("oofffffffff");

  const { allBlogCount, allBlogPostsInParts } = await serverSideBlogCount(
    context
  );

  // Pass data to the page via props
  return { props: { allBlogCount, allBlogPostsInParts } };
}
