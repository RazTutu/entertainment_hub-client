import { useState, useEffect } from 'react';
import axios from 'axios';

import { useEditProfile } from '@/stores';
import { Profile } from '@/types';
import { API_URL } from '@/config/constants';

export const useFetchUserProfile = () => {
  const updateProfile = useEditProfile();

  useEffect(() => {
    const fetchUserProfile = async () => {
      try {
        const response = await axios.get(
          `${API_URL}/auth/login/success`,
          {
            withCredentials: true,
          }
        );

        if (response.data) {
          const profileInfo: Profile = {
            email: response.data.email,
            username: response.data.username,
            id: response.data._id,
            avatar: response.data.avatar,
          };
          updateProfile(profileInfo);
        }

        if (response.data.error) {
        }
      } catch (err) {
        console.log('Cannot get current user');
      }
    };

    fetchUserProfile();
  }, []);

  return null;
};
