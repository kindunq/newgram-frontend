import React from 'react';
import styled from 'styled-components';
import { Helmet } from 'react-helmet';
import Loader from '../../Components/Loader';
import Avatar from '../../Components/Avatar';
import FatText from '../../Components/FatText';
import FollowBtn from '../../Components/FollowBtn';
import SquarePost from '../../Components/SquarePost';
import Button from '../../Components/Button';

const Wrapper = styled.div`
	min-height: 100vh;
`;

const Header = styled.header`
	display: flex;
	align-items: center;
	justify-content: space-around;
	width: 80%;
	margin: 0 auto;
	margin-bottom: 40px;
`;

const HeaderColumn = styled.div``;

const UsernameRow = styled.div`
	display: flex;
	align-items: center;
`;

const Username = styled.span`
	font-size: 26px;
	display: block;
	margin-right: 10px;
`;

const Counts = styled.ul`
	display: flex;
	margin: 15px 0px;
`;

const Count = styled.li`
	font-size: 16px;
	&:not(:last-child) {
		margin-right: 10px;
	}
`;

const FullName = styled(FatText)`
	font-size: 16px;
`;

const Bio = styled.p`
	margin: 10px 0px;
`;

const Posts = styled.div`
	display: grid;
	grid-template-columns: repeat(4, 200px);
	grid-template-rows: 200px;
	grid-auto-rows: 200px;
`;

const FollowButton = styled(FollowBtn)`
	margin-left: 15px;
`;

export default ({ loading, data, logOut }) => {
	console.log(data);
	if (loading === true) {
		return (
			<Wrapper>
				<Loader />
			</Wrapper>
		);
	} else if (!loading && data && data.seeUser) {
		const {
			seeUser: {
				id,
				avatar,
				username,
				fullName,
				isFollowing,
				isSelf,
				bio,
				followingCount,
				followersCount,
				postsCount,
				posts
			}
		} = data;
		return (
			<Wrapper>
				<Helmet>
					<title>{username} | newGram</title>
				</Helmet>
				<Header>
					<HeaderColumn>
						<Avatar size="lg" url={avatar} />
					</HeaderColumn>
					<HeaderColumn>
						<UsernameRow>
							<Username>{username}</Username>
							{isSelf ? (
								<Button onClick={logOut} text="로그아웃" />
							) : (
								<FollowButton isFollowing={isFollowing} id={id} />
							)}
						</UsernameRow>
						<Counts>
							<Count>
								게시물 <FatText text={String(postsCount)} /> 개
							</Count>
							<Count>
								팔로워 <FatText text={String(followersCount)} />
							</Count>
							<Count>
								팔로잉 <FatText text={String(followingCount)} />
							</Count>
						</Counts>
						<FullName text={fullName} />
						<Bio>{bio}</Bio>
					</HeaderColumn>
				</Header>
				<Posts>
					{posts &&
						posts.map(post => (
							<SquarePost
								key={post.id}
								likeCount={post.likeCount}
								commentCount={post.commentCount}
								file={post.files[0]}
								username={`${username}`}
							/>
						))}
				</Posts>
			</Wrapper>
		);
	}
	return null;
};
