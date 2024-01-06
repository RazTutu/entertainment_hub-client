import { useClearProfile } from '@/stores';
import axios from 'axios';

import { API_URL } from '@/config/constants';

export const useLogout = () => {
  const clearProfile = useClearProfile();
  const logout = async () => {
    try {
      const response = await axios({
        method: 'get',
        url: `${API_URL}/auth/logout`,
        withCredentials: true,
      });

      console.log(response.data);
      clearProfile();

      if (response.data.error) {
      }
    } catch (err) {
      console.log('Cannot log out');
    }
  };

  return logout;
};
