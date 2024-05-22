import axios from 'axios';

const getCurrentUrl = () => {
  const url = window.location.href;

  if (url.includes('localhost')) return 'http://localhost:5000';
  return 'https://ganf-backend.vercel.app';
};

const instance = axios.create({
  baseURL: `${getCurrentUrl()}/api`,
  headers: {
    'Content-Type': 'application/json',
  },
});

export default instance;
