import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useMutation } from 'react-apollo-hooks';
import { FOLLOW, UNFOLLOW } from './FollowQueries';
import FollowPresenter from './FollowPresenter';

const FollowbtnContainer = ({ isFollowing, id }) => {
	const [isFollowingS, setIsFollowing] = useState(isFollowing);
	const [followMutation] = useMutation(FOLLOW, { variables: { id } });
	const [unfollowMutation] = useMutation(UNFOLLOW, { variables: { id } });
	const onClick = async () => {
		if (isFollowingS === true) {
			setIsFollowing(false);
			await unfollowMutation();
		} else {
			setIsFollowing(true);
			await followMutation();
		}
	};
	return <FollowPresenter onClick={onClick} isFollowing={isFollowingS} />;
};

FollowbtnContainer.propTypes = {
	isFollowing: PropTypes.bool.isRequired,
	id: PropTypes.string.isRequired
};

export default FollowbtnContainer;
