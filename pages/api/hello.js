import { MongoClient } from "mongodb";

async function handler(req, res) {
  if (req.method === "POST") {
    const data = req.body;

    const client = await MongoClient.connect(
      "mongodb+srv://KyCygni9:Kawasakier6n@cluster0.ol4vi.mongodb.net/meetups?retryWrites=true&w=majority"
    );

    const db = client.db();

    const meetupsColletion = db.collection("meetups");

    const result = meetupsColletion.insertOne(data);

    console.log(result);

    res.status(201).json({ message: "Meetup inserted" });
  }
}

export default handler;
