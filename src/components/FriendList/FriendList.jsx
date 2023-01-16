import PropTypes from 'prop-types';
import { FriendListItem } from '../FriendListItem/FriendListItem';
import { FriendListUl } from '../FriendList/friendList.styled';

export const FriendList = ({ friends }) => {
  const elements = friends.map(({ id, name, avatar, isOnline }) => (
    <FriendListItem key={id} name={name} avatar={avatar} isOnline={isOnline} />
  ));
  return <FriendListUl>{elements}</FriendListUl>;
};

FriendList.defaultProps = {
  friends: [],
};

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      avatar: PropTypes.string.isRequired,
      isOnline: PropTypes.bool.isRequired,
    })
  ),
};
