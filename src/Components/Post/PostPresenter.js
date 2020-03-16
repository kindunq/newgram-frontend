import React from 'react';

import FatText from '../FatText';
import Avatar from '../Avatar';
import { HeartFull, HeartEmpty, Comment } from '../Icons';
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
	settings
} from './PostStyled';

export default ({
	user: { username, avatar },
	location,
	files,
	isLiked,
	likeCount,
	createdAt,
	newComment
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
				<FatText text={username} />
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
				<Button>{isLiked ? <HeartFull /> : <HeartEmpty />}</Button>
				<Button>
					<Comment />
				</Button>
			</Buttons>
			<FatText text={likeCount === 1 ? '1 like' : `${likeCount} likes`} />
			<Timestamp>{createdAt}</Timestamp>
			<Textarea placeholder={'Add a comment'} {...newComment} />
		</Meta>
	</Post>
);
