import React from 'react';
import styled from 'styled-components';
import TextareaAutosize from 'react-autosize-textarea';
import Slider from 'react-slick';
import FatText from '../FatText';
import Avatar from '../Avatar';
import { HeartFull, HeartEmpty, Comment } from '../Icons';

const Post = styled.div`
	${props => props.theme.whiteBox};
	width: 100%;
	max-width: 600px;
	margin-bottom: 25px;
`;

const Header = styled.header`
	padding: 15px;
	display: flex;
	align-items: center;
`;

const UserColumn = styled.div`
	margin-left: 10px;
`;

const Location = styled.span`
	display: block;
	margin-top: 5px;
	font-size: 12px;
`;
const Files = styled(Slider)`
	width: 100%;
	.slick-prev {
		left: 25px;
		z-index: 99;
	}
	.slick-next {
		right: 25px;
		z-index: 99;
	}
	.slick-dots {
		bottom: 15px;
	}
	.slick-dots li.slick-active button:before,
	.slick-dots li button:before {
		color: #fff;
	}
`;
const File = styled.div`
	width: 100%;
	height: 600px;
	background: url(${props => props.src}) no-repeat center center;
	background-size: cover;
`;

const Button = styled.span`
	cursor: pointer;
`;

const Meta = styled.div`
	padding: 15px;
`;

const Buttons = styled.div`
	${Button} {
		&:first-child {
			margin-right: 10px;
		}
	}
	margin-bottom: 10px;
`;

const Timestamp = styled.span`
	font-weight: 400;
	text-transform: uppercase;
	opacity: 0.5;
	display: block;
	font-size: 12px;
	margin: 10px 0px;
	padding-bottom: 10px;
	border-bottom: ${props => props.theme.lightGreyColor} 1px solid;
`;

const Textarea = styled(TextareaAutosize)`
	border: none;
	width: 100%;
	resize: none;
	font-size: 14px;
	&:focus {
		outline: none;
	}
`;

const settings = {
	dots: true,
	infinite: true,
	speed: 500,
	slidesToShow: 1,
	slidesToScroll: 1,
	arrows: true
};
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
