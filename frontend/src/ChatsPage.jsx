import { PrettyChatWindow } from "react-chat-engine-pretty";

const ChatsPage = (props) => {
  return (
    <div style={{ height: "100vh", width: "100vw" }}>
      <PrettyChatWindow
        projectID={"Enter projectID"}
        username={props.user.username} // adam
        secret={props.user.username} // pass1234
        style={{ height: "100%" }}
      />
    </div>
  );
};

export default ChatsPage;
