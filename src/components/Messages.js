import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import { fetchMessages } from '../redux/messages/messageReducer';
import Message from './Message';

const Messages = () => {
  const messages = useSelector((state) => state.messageReducer.messages);
  const dispatch = useDispatch();
  useEffect(() => {
    if (messages.length < 5) {
      dispatch(fetchMessages());
    }
  }, [dispatch, messages.length]);
  return (
    <>
      <h1>Messages</h1>
      <ul>
        {
          messages.map((message) => (
            <li key={uuidv4()}>
              <Message name={message.name} text={message.text} />
            </li>
          ))
        }
        <li>End Message</li>
      </ul>
    </>
  );
};

export default Messages;
