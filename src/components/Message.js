import React from 'react';
import PropTypes from 'prop-types';

const Message = (props) => {
  const { name, text } = props;
  return (
    <div>
      <span>
        <strong>
          {name}
          :
        </strong>
        {' '}
        {text}
      </span>
    </div>
  );
};

Message.propTypes = {
  name: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};

export default Message;
