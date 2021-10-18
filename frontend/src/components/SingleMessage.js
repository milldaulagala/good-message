import React from 'react';

const SingleMessage = ({item}) => (
    <div className="row">
    <div className="col s12 m6">
      <div className="card blue-grey darken-1">
        <div className="card-content white-text">
          <p>Destination Number</p>
          <p>{item.destination_number} </p>
        </div>
        <div className="card-content white-text">
          <p>Message Status</p>
          <p>{item.status} </p>
        </div>
        <div className="card-content white-text">
          <p>Sent Timestamp</p>
          <p>{item.timestamp}</p>
        </div>
        <div className="card-content white-text">
          <p>Message</p>
          <p>{item.message}</p>
        </div>
      </div>
    </div>
  </div>
);

export default SingleMessage;