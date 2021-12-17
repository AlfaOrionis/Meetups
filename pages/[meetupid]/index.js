import MeetupDetail from "../../components/meetups/MeetupDetail";
import { MongoClient } from "mongodb";

import { ObjectId } from "mongodb";

const MeetupDetails = (props) => {
  return (
    <MeetupDetail
      title={props.meetupData.title}
      description={props.meetupData.description}
      address={props.meetupData.address}
      img={props.meetupData.image}
    />
  );
};

export async function getStaticPaths() {
  const client = await MongoClient.connect(
    "mongodb+srv://KyCygni9:Kawasakier6n@cluster0.ol4vi.mongodb.net/meetups?retryWrites=true&w=majority"
  );

  const db = client.db();

  const meetupsColletion = db.collection("meetups");

  const meetups = await meetupsColletion.find({}, { _id: 1 }).toArray();

  return {
    fallback: true,
    paths: meetups.map((meetup) => ({
      params: {
        meetupid: meetup._id.toString(),
      },
    })),
  };
}

export async function getStaticProps(context) {
  const meetupid = context.params.meetupid;
  console.log(meetupid);
  const client = await MongoClient.connect(
    "mongodb+srv://KyCygni9:Kawasakier6n@cluster0.ol4vi.mongodb.net/meetups?retryWrites=true&w=majority"
  );

  const db = client.db();

  const meetupsColletion = db.collection("meetups");

  const selectedMeetUp = await meetupsColletion.findOne({
    _id: ObjectId(meetupid),
  });

  return {
    props: {
      meetupData: { ...selectedMeetUp, _id: "" },
    },
  };
}

export default MeetupDetails;
