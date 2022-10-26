import { useDispatch, useSelector } from 'react-redux';
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import getMessages from '../redux/messages/messagesAction';

const Messages = () => {
  const msg = useSelector((state) => state.messages);

  let randomMsg = '';
  if (msg.length > 0) {
    randomMsg = msg[Math.floor(Math.random() * msg.length)].attributes;
  }

  const dispatch = useDispatch();

  useEffect(() => {
    if (msg.length === 0) {
      dispatch(getMessages());
    }
  });

  return (
    <div>
      <Link to="/">Clear Message</Link>

      <h2>{randomMsg.body}</h2>
    </div>
  );
};

export default Messages;
