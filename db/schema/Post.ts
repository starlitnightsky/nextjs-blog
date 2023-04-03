import { Schema, model, models } from "mongoose";

const PostSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    bodyHTML: {
      type: String,
      required: true,
    },
    bodyDelta: {
      type: String,
      required: true,
    },
    authorId: {
      type: Schema.Types.ObjectId,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const Post = models.Post || model("Post", PostSchema);
export default Post;
