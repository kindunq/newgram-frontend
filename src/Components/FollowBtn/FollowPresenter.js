import React from 'react';
import Button from '../Button';

export default ({ isFollowing, onClick, className }) => (
	<Button
		className={className}
		text={isFollowing ? '팔로우취소' : '팔로우'}
		onClick={onClick}
	/>
);
