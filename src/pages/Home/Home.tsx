import { useEffect } from 'react';
import axios from 'axios';

import { DashboardLayout } from '@/layouts/dashboard-layout';
import { useEditProfile } from '@/stores';
import { Profile } from '@/types/auth';
import {
  GetEntertainmentOptions,
  useEntertainmentPopular,
} from '@/features/displayEntertainment';

const gamesParam: GetEntertainmentOptions = {
  entertainmentType: 'games',
};

const Home = () => {
  const updateProfile = useEditProfile();
  const { gamesData, isLoading } =
    useEntertainmentPopular(gamesParam);

  console.log('gamesList is', gamesData?.games);

  useEffect(() => {
    axios
      .get(`http://localhost:4000/auth/login/success`, {
        withCredentials: true,
      })
      .then((response) => {
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
      })
      .catch((err) => {
        console.log('can not get current user');
      });
  }, []);

  const callServer = () => {
    axios({
      method: 'post',
      url: 'http://localhost:4000/games/newGame',
      withCredentials: true,
      data: {
        name: 'Halo Infinite',
        platform: 'PC',
      },
    })
      .then((response) => {
        console.log(response.data);
        if (response.data.error) {
        }
      })
      .catch((err) => {
        console.log('can not get current user');
      });
  };

  const logout = () => {
    axios({
      method: 'get',
      url: 'http://localhost:4000/auth/logout',
      withCredentials: true,
    })
      .then((response) => {
        console.log(response.data);
        if (response.data.error) {
        }
      })
      .catch((err) => {
        console.log('can not log out');
      });
  };

  return (
    <DashboardLayout>
      <div className="homePage">
        This is the home page
      </div>
    </DashboardLayout>
  );
};

export default Home;
