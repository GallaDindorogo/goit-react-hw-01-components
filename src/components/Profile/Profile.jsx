import PropTypes from 'prop-types';

import {
  ProfileDiv,
  DescriptionDiv,
  Avatar,
  NameUser,
  TagUser,
  LocationUser,
  Stats,
  StatsItem,
  LabelSpan,
  LabelQuantity,
} from './profile.styled';

export const Profile = ({
  username,
  tag,
  location,
  avatar,
  stats: { followers, views, likes },
}) => {
  return (
    <ProfileDiv>
      <DescriptionDiv>
        <Avatar src={avatar} alt="User avatar" />
        <NameUser>{username}</NameUser>
        <TagUser>{tag}</TagUser>
        <LocationUser>{location}</LocationUser>

        <Stats>
          <StatsItem>
            <LabelSpan>Followers</LabelSpan>
            <LabelQuantity>{followers}</LabelQuantity>
          </StatsItem>
          <StatsItem>
            <LabelSpan>Views</LabelSpan>
            <LabelQuantity>{views}</LabelQuantity>
          </StatsItem>
          <StatsItem>
            <LabelSpan>Likes</LabelSpan>
            <LabelQuantity>{likes}</LabelQuantity>
          </StatsItem>
        </Stats>
      </DescriptionDiv>
    </ProfileDiv>
  );
};

Profile.propTypes = {
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  stats: PropTypes.shape({
    followers: PropTypes.number.isRequired,
    views: PropTypes.number.isRequired,
    likes: PropTypes.number.isRequired,
  }).isRequired,
};
