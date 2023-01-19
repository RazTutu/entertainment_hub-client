import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

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

  return (
    <div className="homePage">
      this is the home page
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/auth">Auth page</Link>
        </li>
      </ul>
      <h1 onClick={callServer}>click here to call</h1>
    </div>
  );
};

export default Home;
