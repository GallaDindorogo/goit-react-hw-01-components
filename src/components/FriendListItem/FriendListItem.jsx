import PropTypes from 'prop-types';
import {
  Item,
  Status,
  FriendsName,
} from '../FriendListItem/friendListItem.styled';

export const FriendListItem = ({ avatar, name, isOnline }) => {
  return (
    <Item>
      <Status statusType={isOnline}>{isOnline}</Status>
      <img className="avatar" src={avatar} alt={name} width="70" />
      <FriendsName>{name}</FriendsName>
    </Item>
  );
};

FriendListItem.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};
