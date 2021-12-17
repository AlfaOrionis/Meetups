import NewMeetupForm from "../../components/meetups/NewMeetupForm";

const newMeetupPage = () => {
  async function onAddMeetUpHandler(recievedData) {
    const response = await fetch("/api/hello", {
      method: "POST",
      body: JSON.stringify(recievedData),
      headers: {
        "Content-Type": "application/json",
      },
    });

    const data = await response.json();

    console.log(data);
  }
  return <NewMeetupForm onAddMeetup={onAddMeetUpHandler} />;
};
export default newMeetupPage;
