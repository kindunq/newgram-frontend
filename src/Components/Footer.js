import React from 'react';
import styled from 'styled-components';

const Footer = styled.footer`
	display: flex;
	justify-content: space-between;
	align-items: center;
	text-transform: uppercase;
	font-weight: 600;
	font-size: 12px;
`;

const List = styled.ul`
	display: flex;
`;

const ListItem = styled.li`
	&:not(:last-child) {
		margin-right: 16px;
	}
`;

const Link = styled.a`
	color: ${props => props.theme.darkBlueColor};
`;

const Copyright = styled.span`
	color: ${props => props.theme.darkGrayColor};
`;

export default () => (
	<Footer>
		<List>
			<ListItem>
				<Link href="#none">about us</Link>
			</ListItem>
			<ListItem>
				<Link href="#none">support</Link>
			</ListItem>
			<ListItem>
				<Link href="#none">press</Link>
			</ListItem>
			<ListItem>
				<Link href="#none">api</Link>
			</ListItem>
			<ListItem>
				<Link href="#none">jobs</Link>
			</ListItem>
			<ListItem>
				<Link href="#none">privacy</Link>
			</ListItem>
			<ListItem>
				<Link href="#none">terms</Link>
			</ListItem>
			<ListItem>
				<Link href="#none">directory</Link>
			</ListItem>
			<ListItem>
				<Link href="#none">profiles</Link>
			</ListItem>
			<ListItem>
				<Link href="#none">hashtags</Link>
			</ListItem>
			<ListItem>
				<Link href="#none">language</Link>
			</ListItem>
		</List>
		<Copyright>InstaClone {new Date().getFullYear()} &copy;</Copyright>
	</Footer>
);
