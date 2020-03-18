import React from 'react';
import style from 'styled-components';
import Button from '../Button';

export default ({ isFollowing, onClick }) => (
	<Button text={isFollowing ? '팔로우취소' : '팔로우'} onClick={onClick} />
);
