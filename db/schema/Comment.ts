import { Schema, model, models } from "mongoose";

const CommentSchema = new Schema(
  {
    commenterId: {
      type: String,
      required: true,
    },
    commentConnent: {
      type: String,
      required: true,
    },
    postId: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const Comment = models.Comment || model("Comment", CommentSchema);
export default Comment;
