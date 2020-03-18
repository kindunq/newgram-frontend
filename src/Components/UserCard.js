import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import Avatar from './Avatar';
import FatText from './FatText';
import { Link } from 'react-router-dom';
import FollowBtn from './FollowBtn';

const Card = styled.div`
	${props => props.theme.whiteBox}
	display:flex;
	flex-direction: column;
	align-items: center;
	padding: 20px;
	height: 190px;
`;
const EAvatar = styled(Avatar)`
	margin-bottom: 15px;
`;

const ELink = styled(Link)`
	color: inherit;
	margin-bottom: 10px;
`;

const SFatText = styled(FatText)`
	font-weight: normal;
	color: #999;
	display: block;
	margin: 5px 0;
`;
const UserCard = ({ id, firstName, username, isFollowing, avatar, isSelf }) => (
	<Card>
		<EAvatar url={avatar} size={'md'} />
		<ELink to={`/${username}`}>
			<FatText text={username} />
			<SFatText text={firstName} />
		</ELink>

		{!isSelf && <FollowBtn isFollowing={isFollowing} id={id} />}
	</Card>
);

UserCard.propTypes = {
	id: PropTypes.string.isRequired,
	username: PropTypes.string.isRequired,
	isFollowing: PropTypes.bool.isRequired,
	avatar: PropTypes.string.isRequired,
	isSelf: PropTypes.bool.isRequired
};

export default UserCard;
