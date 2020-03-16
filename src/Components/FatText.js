import React from 'react';
import PropType from 'prop-types';
import styled from 'styled-components';

const Text = styled.span`
	font-weight: 600;
`;
const FatText = ({ text }) => <Text>{text}</Text>;

FatText.proptype = {
	text: PropType.string.isRequired
};
export default FatText;
