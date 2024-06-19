import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  isErrorWithMessage,
  isFetchBaseQueryError,
} from 'helpers/errorHandler';
import { useDeleteUserMutation } from 'redux/superAdminApiSlice';

export const useDeleteUser = () => {
  const [error, setError] = useState<string>();
  const navigate = useNavigate();
  const [deleteUser] = useDeleteUserMutation();
  const deleteHandler = async (id: string, isUserPage?: boolean) => {
    try {
      await deleteUser(id);
      if (isUserPage) {
        navigate(-1);
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
  return { deleteHandler, error };
};
