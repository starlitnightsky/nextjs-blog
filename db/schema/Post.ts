import { Schema, model, models } from "mongoose";

const PostSchema = new Schema(
  {
    titleHTML: {
      type: String,
      required: true,
    },
    bodyHTML: {
      type: String,
      required: true,
    },
    titleDelta: {
      type: String,
      required: true,
    },
    bodyDelta: {
      type: String,
      required: true,
    },
    authorId: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const Post = models.Post || model("Post", PostSchema);
export default Post;
