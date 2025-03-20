const express = require('express');
const cors = require('cors');
const port = process.env.port || 5000;

// middleware
app.use(cors());
app.use(express.json());

// restart-coffee-crud
// rtGeRYJhO48WK6mJ



const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = "mongodb+srv://restart-coffee-crud:<db_password>@cluster0.qvjjrvn.mongodb.net/?appName=Cluster0";

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
    serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true,
    }
});

async function run() {
    try {
        // Connect the client to the server	(optional starting in v4.7)
        await client.connect();
        // Send a ping to confirm a successful connection
        await client.db("admin").command({ ping: 1 });
        console.log("Pinged your deployment. You successfully connected to MongoDB!");
    } finally {
        // Ensures that the client will close when you finish/error
        await client.close();
    }
}
run().catch(console.dir);


app.get('/', (req, res) => {
    res.send('coffee making server is running');
});

app.listen(port, () => {
    console.log('server is running on port ', port);
})