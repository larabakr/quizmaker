import React from "react";
import { Link } from "react-router-dom";

import svg from "./404.svg";

class NotFound extends React.Component {
  render() {
    return (
      <div className="not-found">
        <img src={svg} height="300px" width="400px" draggable={false} alt="" />
        <h2>Page not found</h2>
        <Link to='/'>Go back to QuizMaker</Link>
      </div>
    );
  }
}

export default NotFound;
