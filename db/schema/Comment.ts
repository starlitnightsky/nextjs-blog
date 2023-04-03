import { Schema, model, models } from "mongoose";

const CommentSchema = new Schema(
  {
    commenterId: {
      type: Schema.Types.ObjectId,
      required: true,
    },
    commentConnent: {
      type: String,
      required: true,
    },
    postId: {
      type: Schema.Types.ObjectId,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const Comment = models.Comment || model("Comment", CommentSchema);
export default Comment;
