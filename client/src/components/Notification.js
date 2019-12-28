import React from "react";

const Notification = ({
  isNotificationVisible,
  notificationMessage,
  isError
}) => {
  const notificationStyle = {
    color: "green",
    backgroundColor: "lightgrey",
    padding: 10,
    margin: "20px 2px",
    border: "solid 2px green"
  };
  if (isNotificationVisible === false) {
    return null;
  }

  if (isError === true) {
    const errorNotificationStyle = {
      ...notificationStyle,
      border: "solid 2px red",
      color: "red"
    };

    return <div style={errorNotificationStyle}>{notificationMessage} </div>;
  }

  return <div style={notificationStyle}>{notificationMessage} </div>;
};

export default Notification;
