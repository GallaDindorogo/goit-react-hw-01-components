import PropTypes, { arrayOf } from 'prop-types';
import { StatSection, Title, StatList, Item } from './statistics.styled';

export const Statistics = ({ title = 'Upload stats', stats }) => {
  const elements = stats.map(({ id, label, percentage }) => (
    <Item key={id} className="item">
      <span className="label">{label}</span>
      <span className="percentage">{percentage}%</span>
    </Item>
  ));
  return (
    <StatSection>
      {title && <Title>{title}</Title>}
      <StatList>{elements}</StatList>
    </StatSection>
  );
};

Statistics.defaultProps = {
  stats: [],
};

Statistics.propTypes = {
  title: PropTypes.string,
  stats: arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ),
};
