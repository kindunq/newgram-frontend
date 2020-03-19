import styled from 'styled-components';
import TextareaAutosize from 'react-autosize-textarea';
import Slider from 'react-slick';

export const Post = styled.div`
	${props => props.theme.whiteBox};
	width: 100%;
	max-width: 600px;
	margin-bottom: 25px;
	user-select: none;
	a {
		color: inherit;
	}
`;

export const Header = styled.header`
	padding: 15px;
	display: flex;
	align-items: center;
`;

export const UserColumn = styled.div`
	margin-left: 10px;
`;

export const Location = styled.span`
	display: block;
	margin-top: 5px;
	font-size: 12px;
`;
export const Files = styled(Slider)`
	width: 100%;
	.slick-slide {
		outline: none !important;
	}
	.slick-slide:focus {
		outline: none !important;
	}
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
export const File = styled.div`
	width: 100%;
	height: 600px;
	background: url(${props => props.src}) no-repeat center center;
	background-size: cover;
`;

export const Button = styled.span`
	cursor: pointer;
`;

export const Meta = styled.div`
	padding: 15px;
`;

export const Buttons = styled.div`
	${Button} {
		&:first-child {
			margin-right: 10px;
		}
	}
	margin-bottom: 10px;
`;

export const Timestamp = styled.span`
	font-weight: 400;
	text-transform: uppercase;
	opacity: 0.5;
	display: block;
	font-size: 12px;
	margin: 10px 0px;
	padding-bottom: 10px;
	border-bottom: ${props => props.theme.lightGreyColor} 1px solid;
`;

export const Textarea = styled(TextareaAutosize)`
	border: none;
	width: 100%;
	resize: none;
	font-size: 14px;
	&:focus {
		outline: none;
	}
`;

export const settings = {
	dots: true,
	infinite: true,
	speed: 500,
	slidesToShow: 1,
	slidesToScroll: 1,
	arrows: true
};

export const Comments = styled.ul`
	margin-top: 10px;
`;

export const Comment = styled.li`
	margin-bottom: 7px;
	span {
		margin-right: 5px;
	}
`;

export const CaptionBox = styled.div`
	margin: 20px 0 15px;
`;

export const Caption = styled.span`
	margin-left: 5px;
`;
