import "./App.css";
import { Fragment, useState } from "react";
import Navbar from "./componants/Navbar";
import Postlists from "./componants/Postlists";
import Modal from "./componants/Modal";
import Postform from "./componants/Postform";
import Triplists from "./componants/Triplists";

function App() {
  let [showModal, setShowModal] = useState(false);
  let [posts, setPosts] = useState([
    {
      id: 1,
      title: "Post 1",
      status: "upcoming",
    },
    {
      id: 2,
      title: "Post 2",
      status: "delay",
    },
    {
      id: 3,
      title: "Post 3",
      status: "ongoing",
    },
  ]);
  // console.log(posts);
  let addPost = (post) => {
    setPosts(prevState => [...prevState, post]);
    setShowModal(false);
  };
  return (
    <>
      <Navbar setShowModal={setShowModal} />
      <Postlists posts={posts} />
      {showModal && (
        <Modal setShowModal={setShowModal}>
          <Postform addPost={addPost} />
        </Modal>
      )}
      <Triplists></Triplists>
    </>
  );
}

export default App;
