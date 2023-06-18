export const API_URL = import.meta.env
  .VITE_PUBLIC_API_URL as string;

export const API_MOCKING =
  import.meta.env.VITE_PUBLIC_API_MOCKING === 'true';

export const IS_DEVELOPMENT =
  import.meta.env.VITE_NODE_ENV === 'development';
export const IS_TEST =
  import.meta.env.VITE_NODE_ENV === 'test';
export const IS_PRODUCTION =
  import.meta.env.VITE_NODE_ENV === 'production';

export const IS_BROWSER = typeof window !== 'undefined';
export const IS_SERVER = typeof window === 'undefined';

export const APP_TITLE = 'Entertainment Hub';
