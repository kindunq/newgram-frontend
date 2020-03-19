import { gql } from 'apollo-boost';

export const GET_USER = gql`
	query seeUser($username: String!) {
		seeUser(username: $username) {
			avatar
			username
			fullName
			isFollowing
			isSelf
			bio
			followingCount
			followersCount
			posts {
				id
				files {
					url
				}
				likeCount
				commentCount
			}
			postsCount
		}
	}
`;
