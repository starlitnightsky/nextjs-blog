import React, { useEffect, useState } from "react";
import { IBlogPost } from "..";
import { fetchGetAuthorAdminBlogList } from "@/fetchApiCalls/fetchApiCalls";

import PanelPostComponent from "@/components/blogPostComponent/PanelPostComponent";
import { useSession } from "next-auth/react";
import { IUserSession } from "../api/blog-post/handle";
import LoginComponent from "@/components/login/Login";

const UserPanel = () => {
  const { data: sessionData, status } = useSession();
  const session: IUserSession = sessionData as IUserSession;
  // console.log(session, status);

  const [parsedBlogPosts, setParsedBlogPosts] = useState<any[] | any>([]);
  useEffect(() => {
    (async () => await fetchGetAuthorAdminBlogList(setParsedBlogPosts))();
  }, [session?.user?.role]);

  useEffect(() => {
    console.log(parsedBlogPosts);
  }, [parsedBlogPosts]);

  // const parsedBlogPosts = JSON.parse(allBlogPostsInParts);
  console.log(parsedBlogPosts, "parsedBlogPosts");

  if (status === "loading") {
    return "Loading or not authenticated...";
  }

  if (["reader"].includes(session?.user?.role)) {
    return <h2>Attention: you need an author / admin to access panel page!</h2>;
  }

  if (["admin", "author"].includes(session?.user?.role)) {
    return (
      <>
        <div className="blog-list px-md-5 py-5 p-md-5">
          <div className="container single-col-max-width">
            {parsedBlogPosts?.map((blogPost: IBlogPost) => (
              <PanelPostComponent key={blogPost._id} blogPost={blogPost} />
            ))}
            {parsedBlogPosts.length === 0 && <h3>No posts yet /Loading</h3>}
          </div>
        </div>
      </>
    );
  }

  return <LoginComponent />;
};

export default UserPanel;
