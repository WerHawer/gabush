import React from "react";
import ConsumerInfoEl from "./ConsumerInfoEl";
import { Link } from "react-router-dom";

const ConsumerInfo = ({ order }) => {
  const { room, name, date, guests, tel, comment } = order;

  return (
    <div className="consumer-header">
      <ConsumerInfoEl>Зал {room}</ConsumerInfoEl>
      <ConsumerInfoEl>{date}</ConsumerInfoEl>
      <ConsumerInfoEl>{name}</ConsumerInfoEl>
      <ConsumerInfoEl>{tel}</ConsumerInfoEl>
      <ConsumerInfoEl>{guests} чел.</ConsumerInfoEl>
      <ConsumerInfoEl>{comment}</ConsumerInfoEl>
      <Link
        to={{
          pathname: "/orderEdit",
          state: order,
        }}
      >
        Edit
      </Link>
    </div>
  );
};

export default ConsumerInfo;
