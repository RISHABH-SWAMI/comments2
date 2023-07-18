import React from "react";

const CommentDetail = (props) => {
  return (
    <ul className="list-unstyled">
      <li className="media mb-3">
        <img className="mr-3" alt="avatar" />
        <div className="media-body">
          <h5>
            {props.name}
            <small className="text-muted" style={{ marginLeft: "20px" }}>
              {props.time}
            </small>
          </h5>
          {props.post}
        </div>
      </li>
    </ul>
  );
};

export default CommentDetail;
