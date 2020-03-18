import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import FatText from '../../Components/FatText';
import Loader from '../../Components/Loader';
import UserCard from '../../Components/UserCard';

const Wrapper = styled.div`
	height: 50vh;
	text-align: center;
	.emptyBox {
		line-height: 50vh;
	}
`;
const Section = styled.div`
	margin-bottom: 50px;
	display: grid;
	grid-gap: 25px;
	grid-template-columns: repeat(4, 1fr);
	grid-template-rows: 160px;
	grid-auto-rows: 160px;
`;

const SearchPresenter = ({ searchTerm, loading, data }) => {
	if (searchTerm === undefined) {
		return (
			<Wrapper>
				<FatText text="Search for something" />
			</Wrapper>
		);
	} else if (loading === true) {
		return (
			<Wrapper>
				<Loader />
			</Wrapper>
		);
	} else if (data && data.searchUser && data.searchPost) {
		return (
			<Wrapper>
				<Section>
					{data.searchUser.length === 0 ? (
						<FatText text="검색된 사용자가 없습니다." />
					) : (
						data.searchUser.map(user => (
							<UserCard
								username={user.username}
								isFollowing={user.isFollowing}
								avatar={user.avatar}
								isSelf={user.isSelf}
								firstName={user.firstName}
								key={user.id}
							/>
						))
					)}
				</Section>
				<Section>
					{data.searchPost.length === 0 ? (
						<FatText text="게시물을 찾을 수 없습니다." />
					) : (
						data.searchPost.map(post => null)
					)}
				</Section>
			</Wrapper>
		);
	}
};

SearchPresenter.propTypes = {
	searchTerm: PropTypes.string,
	loading: PropTypes.bool
};

export default SearchPresenter;
