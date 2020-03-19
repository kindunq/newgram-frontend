import React from 'react';
import { useQuery } from 'react-apollo-hooks';
import { withRouter } from 'react-router-dom';
import { GET_USER } from './ProfileQueries';
import ProfilePresenter from './ProfilePresenter';

export default withRouter(
	({
		match: {
			params: { username }
		}
	}) => {
		const { data, loading } = useQuery(GET_USER, {
			variables: { username }
		});
		return <ProfilePresenter data={data} loading={loading} />;
	}
);
