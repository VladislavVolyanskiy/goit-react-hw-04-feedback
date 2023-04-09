import PropTypes from 'prop-types';

import { FeedbackOptsWrap, FeedbackBtn } from './FeedbackOptions.styled';

export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <FeedbackOptsWrap>
      {options.map(option => (
        <FeedbackBtn
          type="button"
          key={option}
          onClick={() => onLeaveFeedback(option)}
        >
          {option}
        </FeedbackBtn>
      ))}
    </FeedbackOptsWrap>
  );
};

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string.isRequired),
  onLeaveFeedback: PropTypes.func.isRequired,
};
