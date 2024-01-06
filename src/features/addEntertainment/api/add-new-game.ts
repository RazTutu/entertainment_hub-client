import axios from 'axios';

import { API_URL } from '@/config/constants';

const addNewGame = () => {
  axios({
    method: 'post',
    url: `${API_URL}/games/newGame`,
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
