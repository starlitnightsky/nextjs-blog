import React, { FunctionComponent } from "react";
import formatDistanceToNow from "date-fns/formatDistanceToNow";

import { IBlogPost } from "@/pages";
import { routerPush } from "@/util/routerPush";
import ButtonDeleteEdit from "./buttonDeleteEdit/ButtonDeleteEdit";

interface Props {
  blogPost: IBlogPost;
}

const PanelPostComponent: FunctionComponent<Props> = ({ blogPost }) => {
  return (
    <div className="blog-list-bg p-5 item mb-5 break-word">
      <div className="row g-2 g-xl-0">
        <div className="col-md-8 blog-details ">
          <h3 className="title mb-1">{blogPost?.title}</h3>
          <div className="meta mb-1">
            <span className="date">
              Updated:
              {" " +
                formatDistanceToNow(new Date(blogPost?.updatedAt), {
                  addSuffix: true,
                })}
            </span>
          </div>
          <div className="intro ">
            <p>{blogPost.description}</p>
          </div>
        </div>
        <div className="col-md-4 d-flex align-items-center justify-content-center">
          <ButtonDeleteEdit postId={blogPost._id} />
        </div>
      </div>
    </div>
  );
};

export default PanelPostComponent;
