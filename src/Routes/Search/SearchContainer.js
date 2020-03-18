import React from 'react';
import { withRouter } from 'react-router-dom';
import SearchPresenter from './SearchPresenter';

export default withRouter(({ location: { search } }) => {
	const searchTerm = search.split('=')[1];

	return <SearchPresenter searchTerm={searchTerm} />;
});
