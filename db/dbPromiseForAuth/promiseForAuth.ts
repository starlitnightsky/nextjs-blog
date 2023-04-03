import { MongoClient } from "mongodb";

const MONGODB_URI: string = process.env.MONGODB_URI || "";
const options: object = {
  useUnifiedTopology: true,
  useNewUrlParser: true,
};

let client = new MongoClient(MONGODB_URI, options);
let clientPromise: any;

if (!MONGODB_URI) {
  throw new Error("add Mongo URI to .env");
}

if (process.env.NODE_ENV === "development") {
  let globalWithMongo = global as typeof globalThis & {
    _mongoClientPromise: Promise<MongoClient>;
  };
  if (!globalWithMongo._mongoClientPromise) {
    globalWithMongo._mongoClientPromise = client.connect();
  }
  clientPromise = globalWithMongo._mongoClientPromise;
} else {
  clientPromise = client.connect();
}

export default clientPromise;
