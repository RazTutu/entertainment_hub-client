import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

import { DashboardLayout } from '@/layouts/dashboard-layout';

const Home = () => {
  useEffect(() => {
    // check if user exists or navigate on /login
    // console.log(Object.keys(user).length)
    axios
      .get(`http://localhost:4000/auth/login/success`, {
        withCredentials: true,
      })
      .then((response) => {
        console.log(response.data);
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
