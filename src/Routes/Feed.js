import React from 'react';
import Helmet from 'react-helmet';
import styled from 'styled-components';
import { useQuery } from 'react-apollo-hooks';
import { gql } from 'apollo-boost';
import Loader from '../Components/Loader';
import Post from '../Components/Post';

const FEED_QUERY = gql`
	{
		seeFeed {
			id
			location
			caption
			user {
				id
				avatar
				username
			}
			files {
				id
				url
			}
			likeCount
			isLiked
			comments {
				id
				text
				user {
					id
					username
				}
			}
			createdAt
		}
	}
`;

const Wrapper = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	min-height: 50vh;
`;

export default () => {
	const { data, loading } = useQuery(FEED_QUERY);
	return (
		<Wrapper>
			<Helmet>
				<title>Feed | newGram</title>
			</Helmet>
			{loading && <Loader />}
			{!loading &&
				data &&
				data.seeFeed &&
				data.seeFeed.map((post, index) => (
					<Post
						key={index}
						id={post.id}
						location={post.location}
						caption={post.caption}
						user={post.user}
						files={post.files}
						likeCount={post.likeCount}
						isLiked={post.isLiked}
						comments={post.comments}
						createdAt={post.createdAt}
					/>
				))}
		</Wrapper>
	);
};
