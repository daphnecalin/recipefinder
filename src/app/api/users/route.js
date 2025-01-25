import { MongoClient, ServerApiVersion } from "mongodb";


export async function GET(request) {
    try {

        const client = new MongoClient(process.env.MONGO_URI, {
            serverApi: {
                version: ServerApiVersion.v1,
                strict: true,
                deprecationErrors: true,
            }
        });

        await client.connect();
        await client.db("admin").command({ ping: 1 });
        // Make queries here
        // const q = await client.db("recipefinder").collection("comments").find()
        // console.log(q)
        console.log("Pinged your deployment. You successfully connected to MongoDB!");

        await client.close();

        return new Response("This worked.")

    } catch (error) {

        console.log("error", error)
        return new Response("this didnt work")

    }


}