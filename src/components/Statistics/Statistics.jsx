import PropTypes from 'prop-types';
import { StatsStyledList, StatsStyledItem } from './Statistics.styled';

export const Statistics = ({
  good,
  bad,
  neutral,
  total,
  positivePercentage,
}) => {
  return (
    <StatsStyledList>
      <StatsStyledItem>Good: {good}</StatsStyledItem>
      <StatsStyledItem>Neutral: {neutral}</StatsStyledItem>
      <StatsStyledItem>Bad: {bad}</StatsStyledItem>
      <StatsStyledItem>Total: {total}</StatsStyledItem>
      <StatsStyledItem>
        Positive feedback: {positivePercentage ? positivePercentage : 0}%
      </StatsStyledItem>
    </StatsStyledList>
  );
};

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};
