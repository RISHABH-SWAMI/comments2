import React from "react";

const Card = (props) => {
    console.log(props);
    return (
        <div className="card mb-3">
            <div className='card-body'>
                {props.children}
            </div>
            <div className="card-footer">
                <button className="btn btn-outline-success mr-3">Approve</button>
                <button className="btn btn-outline-danger">Reject</button>
            </div>

        </div>
    )
}

export default Card;