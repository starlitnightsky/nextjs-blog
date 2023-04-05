import EditTextEditor from "@/components/textEditor/EditTextEditor";

import TextEditorContextProvider from "@/components/textEditor/hooks/textEditorContext";
import { serverSideBlogSinglePost } from "@/getServerSideCalls/getServerSideCalls-PostPage-Comments";
import React from "react";

const EditPost = ({ fullBlogPostData }: any) => {
  const parsedFullBlogPostData = JSON.parse(fullBlogPostData)[0];
  console.log(parsedFullBlogPostData, "parsedfullBlogPostData");

  return (
    <div>
      <TextEditorContextProvider>
        <EditTextEditor parsedFullBlogPostData={parsedFullBlogPostData} />
      </TextEditorContextProvider>
    </div>
  );
};

export default EditPost;

// This gets called on every request
export async function getServerSideProps(context: any) {
  // console.log("oofffffffff");

  const { fullBlogPostData } = await serverSideBlogSinglePost(context);

  // Pass data to the page via props
  return { props: { fullBlogPostData } };
}
