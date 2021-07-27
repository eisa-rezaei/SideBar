import React from "react";
import AddComment from "../components/AddComment/AddComment";
import Comments from "../components/Comments/Comments";

const Massage = () => {
  return (
    <div className="content">
      <AddComment />
      <Comments />
    </div>
  );
};

export default Massage;
