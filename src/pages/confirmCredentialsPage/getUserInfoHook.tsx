import {
  isErrorWithMessage,
  isFetchBaseQueryError,
} from 'helpers/errorHandler';
import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { useGetUserMutation } from 'redux/authApiSlice';

const UseGetUserInfoHook = () => {
  const [searchParams] = useSearchParams();
  const [getUser, { isError }] = useGetUserMutation();
  const [error, setError] = useState<string>();
  const [user, setUser] = useState<{
    email: string;
    full_name: string;
    user_id: string;
  }>({ email: '', full_name: '', user_id: '' });

  const token = searchParams.get('token');

  const getInfo = async () => {
    try {
      if (token) {
        const data = await getUser({ token }).unwrap();
        const { email, full_name, id } = data;
        if (data && email && full_name && id) {
          setUser({ email, full_name, user_id: id });
        }
      }
    } catch (err) {
      if (isFetchBaseQueryError(err)) {
        const errMsg = 'error' in err ? err.error : JSON.stringify(err.data);
        setError(errMsg);
      } else if (isErrorWithMessage(err)) {
        setError(err.message);
      }
    }
  };
  useEffect(() => {
    getInfo();
  }, []);

  return { isError, error, user };
};

export default UseGetUserInfoHook;
