import React, { useState } from 'react';
import AuthPresenter from './AuthPresenter';
import useInput from '../../Hooks/useInput';

export default () => {
	const [action, setAction] = useState('logIn');
	const username = useInput('');
	const signUsername = useInput('');
	const password = useInput('');
	const signPassword = useInput('');
	const firstName = useInput('');
	const lastName = useInput('');
	const email = useInput('');

	return (
		<AuthPresenter
			setAction={setAction}
			action={action}
			username={username}
			signUsername={signUsername}
			password={password}
			signPassword={signPassword}
			firstName={firstName}
			lastName={lastName}
			email={email}
		/>
	);
};
