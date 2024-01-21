export const shortenPlatforms = (platforms: string[]) => {
  return platforms.map((platform: string, index) => {
    let shortenedPlatform = '';
    switch (platform) {
      case 'playstation5':
        shortenedPlatform = 'PS5';
        break;
      case 'playstation4':
        shortenedPlatform = 'PS4';
        break;
      case 'playstation3':
        shortenedPlatform = 'PS3';
        break;
      case 'xbox-series-x':
        shortenedPlatform = 'Xbox Series X';
        break;
      case 'xbox-series-s':
        shortenedPlatform = 'Xbox Series S';
        break;
      case 'nintendo-switch':
        shortenedPlatform = 'Switch';
        break;
      case 'xbox-one':
        shortenedPlatform = 'Xbox One';
        break;
      case 'xbox360':
        shortenedPlatform = 'Xbox 360';
        break;
      case 'pc':
        shortenedPlatform = 'PC';
        break;
      case 'android':
        shortenedPlatform = 'Android';
        break;
      case 'macos':
        shortenedPlatform = 'MacOS';
        break;
      case 'linux':
        shortenedPlatform = 'Linux';
        break;
      case 'ps-vita':
        shortenedPlatform = 'Ps Vita';
        break;
      case 'ios':
        shortenedPlatform = 'iOS';
        break;
    }
    if (index < platforms.length - 1) {
      shortenedPlatform = `${shortenedPlatform}, `;
    }
    return shortenedPlatform;
  });
};
