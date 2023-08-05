const { MongoClient, ServerApiVersion } = require("mongodb");
const uri =
  "mongodb+srv://task-app:7c04t95x2au3BWmg@cluster0.ddxed.mongodb.net/?retryWrites=true&w=majority";

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

async function run(req, res) {
  console.log(req.params, "parmas");
  console.log(req.query, "query");
  try {
    // Connect the client to the server	(optional starting in v4.7)
    await client.connect();
    // Send a ping to confirm a successful connection

    const newsCollection = client.db("nextjs").collection("product");
    console.log("database connected");
    if (req.method === "GET") {
      const news = await newsCollection.find({}).toArray();
      res.send({ message: "success", status: 200, data: news });
    }
  } finally {
    // Ensures that the client will close when you finish/error
    // await client.close();
  }
}
export default run;

// const handler = (req, res) => {
//   res?.send({ message: "server created" });
// };
// export default handler;
