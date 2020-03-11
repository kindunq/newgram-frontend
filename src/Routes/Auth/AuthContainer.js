import React, { useState } from 'react';
import AuthPresenter from './AuthPresenter';
import useInput from '../../Hooks/useInput';
import { useMutation } from 'react-apollo-hooks';
import { LOG_IN, CREATE_ACCOUNT } from './AuthQueries';
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

	const [createAccountMutation] = useMutation(CREATE_ACCOUNT, {
		variables: {
			email: email.value,
			username: username.value,
			firstName: firstName.value,
			lastName: lastName.value
		}
	});

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
						data: { creatAccount }
					} = await createAccountMutation();

					if (!creatAccount) {
						toast.error('계정생성에 실패했습니다. 다시 시도하세요.');
					} else {
						toast.success('계정이 생성되었습니다. 로그인 해주세요.');
						setTimeout(() => setAction('logIn'), 3000);
					}
				} catch (error) {
					toast.error('계정생성에 실패했습니다. 다시 시도하세요.');
				}
			} else {
				toast.error('모든 항목을 기입하세요!');
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
