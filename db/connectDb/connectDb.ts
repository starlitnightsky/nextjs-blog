import mongoose from "mongoose";

const URI: string = process.env.MONGODB_URI as string;

if (!URI) {
  throw new Error("need mongodb uri");
}
/**
 * connect to mongodb
 */
const connectDb = (): void => {
  mongoose
    .connect(URI)
    .then(() => console.log(` connected to db`))

    .catch((error) => {
      console.log(error);
    });
};

export default connectDb;
