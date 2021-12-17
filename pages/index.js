import MeetupList from "../components/meetups/MeetupList";

import { MongoClient } from "mongodb";

const HomePage = (props) => {
  return <MeetupList meetups={props.meetups} />;
};

export async function getStaticProps(context) {
  const client = await MongoClient.connect(
    "mongodb+srv://KyCygni9:Kawasakier6n@cluster0.ol4vi.mongodb.net/meetups?retryWrites=true&w=majority"
  );

  const meetups = await client.db().collection("meetups").find().toArray();
  client.close();

  const TheMeetUps = meetups.map((meetup) => ({
    title: meetup.title,
    address: meetup.address,
    image: meetup.image,
    id: meetup._id.toString(),
  }));

  return {
    props: {
      meetups: TheMeetUps,
    },
    revalidate: 1,
  };
}

export default HomePage;
