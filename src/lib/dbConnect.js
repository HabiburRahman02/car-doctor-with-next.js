import { MongoClient, ServerApiVersion } from 'mongodb'

export const dbConnect = (collectionName) => {
    const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster3.ggy8e.mongodb.net/?appName=Cluster3`
    // Create a MongoClient with a MongoClientOptions object to set the Stable API version
    const client = new MongoClient(uri, {
        serverApi: {
            version: ServerApiVersion.v1,
            strict: true,
            deprecationErrors: true,
        }
    });
    return client.db('carDoctorDB').collection(collectionName)
}