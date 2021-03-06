import React from 'react';
import { useQuery, useMutation } from 'react-apollo-hooks';
import { withRouter } from 'react-router-dom';
import { GET_USER, LOG_OUT } from './ProfileQueries';
import ProfilePresenter from './ProfilePresenter';

export default withRouter(
	({
		match: {
			params: { username }
		}
	}) => {
		const { data, loading } = useQuery(GET_USER, {
			fetchPolicy: 'cache-and-network',
			variables: { username }
		});
		const [logOut] = useMutation(LOG_OUT);
		return <ProfilePresenter data={data} logOut={logOut} loading={loading} />;
	}
);
