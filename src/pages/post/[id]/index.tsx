import DisplayPost from "@/components/displayPost/DisplayPost";
import { serverSideBlogSinglePost } from "@/getServerSideCalls/getServerSideCalls-PostPage-Comments";
import React from "react";

const PostPage = ({ fullBlogPostData, allCurrentCommentData }: any) => {
  const parsedFullBlogPostData = JSON.parse(fullBlogPostData)[0];
  console.log(parsedFullBlogPostData, "parsedfullBlogPostData");

  const parsedAllCurrentCommentData = JSON.parse(allCurrentCommentData);
  console.log(parsedAllCurrentCommentData, "parsedAllCurrentCommentData");

  return (
    <div>
      <DisplayPost
        parsedFullBlogPostData={parsedFullBlogPostData}
        parsedAllCurrentCommentData={parsedAllCurrentCommentData}
      />
    </div>
  );
};

export default PostPage;

// This gets called on every request
export async function getServerSideProps(context: any) {
  // console.log("oofffffffff");

  const { fullBlogPostData, allCurrentCommentData } =
    await serverSideBlogSinglePost(context);

  // Pass data to the page via props
  return { props: { fullBlogPostData, allCurrentCommentData } };
}