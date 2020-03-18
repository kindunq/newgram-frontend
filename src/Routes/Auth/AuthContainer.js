import React, { useState } from 'react';
import AuthPresenter from './AuthPresenter';
import useInput from '../../Hooks/useInput';
import { useMutation } from 'react-apollo-hooks';
import {
	LOG_IN,
	CREATE_ACCOUNT,
	CONFIRM_SECRET,
	LOCAL_LOG_IN
} from './AuthQueries';
import { toast } from 'react-toastify';

export default () => {
	const [action, setAction] = useState('logIn');
	const username = useInput('');
	const firstName = useInput('');
	const secret = useInput('');
	const lastName = useInput('');
	const email = useInput('');

	const [requestSecretMutation] = useMutation(LOG_IN, {
		variables: { email: email.value }
	});

	const [confirmSecretMutation] = useMutation(CONFIRM_SECRET, {
		variables: { secret: secret.value, email: email.value }
	});

	const [createAccountMutation] = useMutation(CREATE_ACCOUNT, {
		variables: {
			email: email.value,
			username: username.value,
			firstName: firstName.value,
			lastName: lastName.value
		}
	});
	const [localLogInMutation] = useMutation(LOCAL_LOG_IN);
	const onSubmit = async e => {
		e.preventDefault();
		if (action === 'logIn') {
			if (email !== '') {
				try {
					const {
						data: { requestSecret }
					} = await requestSecretMutation();

					if (requestSecret) {
						toast.success('계정으로 전송된 암호문자를 입력해주세요.');
						setAction('confirm');
					} else {
						toast.error('계정이 존재 하지 않습니다. 회원가입을 먼저 해주세요.');
						setTimeout(() => setAction('signUp'), 3000);
					}
				} catch (error) {
					toast.error('계정이 존재 하지 않습니다. 회원가입을 먼저 해주세요.');
					setTimeout(() => setAction('signUp'), 3000);
				}
			} else {
				toast.error('이메일주소는 필수 입니다.');
			}
		} else if (action === 'signUp') {
			if (
				email.value !== '' &&
				username.value !== '' &&
				firstName.value !== '' &&
				lastName.value !== ''
			) {
				try {
					const {
						data: { createAccount }
					} = await createAccountMutation();
					if (!createAccount) {
						toast.error('계정을 생성할 수 없습니다.');
					} else {
						toast.success('계정이 생성되었습니다. 로그인해주세요!');
						setTimeout(() => setAction('logIn'), 3000);
					}
				} catch (e) {
					toast.error(e.message);
				}
			} else {
				toast.error('모든 항목을 입력해주세요!');
			}
		} else if (action === 'confirm') {
			if (secret.value !== '') {
				try {
					const {
						data: { confirmSecret: token }
					} = await confirmSecretMutation();
					if (token !== '' && token !== undefined) {
						localLogInMutation({
							variables: {
								token
							}
						});
					} else {
						throw Error();
					}
				} catch (error) {
					toast.error('암호문자를 입력해주세요.');
				}
			}
		}
	};

	return (
		<AuthPresenter
			setAction={setAction}
			action={action}
			username={username}
			firstName={firstName}
			lastName={lastName}
			email={email}
			secret={secret}
			onSubmit={onSubmit}
		/>
	);
};
