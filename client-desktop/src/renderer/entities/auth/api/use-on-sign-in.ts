import type { z } from 'zod';
import ky from 'ky';
import { useNavigate } from 'react-router-dom';
import { Bounce, toast } from 'react-toastify';
import type { signInSchema } from '../model';

import { END_POINT_USERS } from '~shared/constants';

type FormData = z.infer<typeof signInSchema>;

export const useOnSignIn = () => {
  const navigate = useNavigate();

  const onSignIn = async (data: FormData) => {
    try {
      const response = await ky.post(`${END_POINT_USERS}login`, {
        json: {
          username: data.userid,
          password: data.password,
        },
      });
      if (response.ok) {
        return navigate('/friends');
      }
    } catch (error) {
      console.error(error);
      toast.error('Something went wrong', {
        position: 'bottom-center',
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: 'dark',
        transition: Bounce,
      });
    }
  };

  return { onSignIn };
};
