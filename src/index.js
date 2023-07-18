import React from "react";
import ReactDOM from "react-dom";
import CommentDetail from "./components/CommentDetail.js";
import Card from "./components/Card.js";

const App = () => {
  return (
    <div className="container mt-3">
      <Card>
        <CommentDetail
          name="Alex"
          time="Today at 5:00 PM"
          post="Great Blog Post!"
        />
      </Card>
      <Card>
        <CommentDetail
          name="Joe"
          time="Yesterday at 9:00 AM"
          post="Nice Post!"
        />
      </Card>
      <Card>
        <CommentDetail
          name="Mary"
          time="2 days ago at 8:00 PM"
          post="Great Post!"
        />
      </Card>
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector("#root"));
