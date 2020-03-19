import React from 'react';
import { Link } from 'react-router-dom';
import FatText from '../FatText';
import Avatar from '../Avatar';
import { HeartFull, HeartEmpty, Comment as CommentIcon } from '../Icons';
import {
	Post,
	Header,
	UserColumn,
	Location,
	Files,
	File,
	Button,
	Meta,
	Buttons,
	Timestamp,
	Textarea,
	settings,
	Comments,
	Comment,
	CaptionBox,
	Caption
} from './PostStyled';

export default ({
	user: { username, avatar },
	location,
	files,
	isLiked,
	likeCount,
	createdAt,
	newComment,
	toggleLike,
	onKeyPress,
	comments,
	selfComments,
	caption
}) => (
	<Post>
		<link
			rel="stylesheet"
			type="text/css"
			charSet="UTF-8"
			href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
		/>
		<link
			rel="stylesheet"
			type="text/css"
			href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
		/>
		<Header>
			<Avatar size="sm" url={avatar} />
			<UserColumn>
				<Link to={`/${username}`}>
					<FatText text={username} />
				</Link>
				<Location>{location}</Location>
			</UserColumn>
		</Header>
		<Files {...settings}>
			{files &&
				files.map((file, index) => (
					<File id={file.id} src={file.url} key={index} />
				))}
		</Files>
		<Meta>
			<Buttons>
				<Button onClick={toggleLike}>
					{isLiked ? <HeartFull /> : <HeartEmpty />}
				</Button>
				<Button>
					<CommentIcon />
				</Button>
			</Buttons>
			<FatText text={likeCount === 1 ? '1 like' : `${likeCount} likes`} />
			<CaptionBox>
				<FatText text={username} />
				<Caption>{caption}</Caption>
			</CaptionBox>
			{comments && (
				<Comments>
					{comments.map(comment => (
						<Comment key={comment.id}>
							<Link to={`/${username}`}>
								<FatText text={comment.user.username} />
							</Link>
							{comment.text}
						</Comment>
					))}
					{selfComments.map(comment => (
						<Comment key={comment.id}>
							<Link to={`/${username}`}>
								<FatText text={comment.user.username} />
							</Link>
							{comment.text}
						</Comment>
					))}
				</Comments>
			)}
			<Timestamp>{createdAt}</Timestamp>
			<Textarea
				placeholder={'Add a comment...'}
				value={newComment.value}
				onChange={newComment.onChange}
				onKeyPress={onKeyPress}
			/>
		</Meta>
	</Post>
);
