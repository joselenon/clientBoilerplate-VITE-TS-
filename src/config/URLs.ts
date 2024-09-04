import Environment from './Environment';

const PROTOCOL = Environment.VITE_APP_HTTPS ? 'https://' : 'http://';

// SERVER
// https://serverdomain.com OU http://localhost
const SERVER_URL_WITH_PROTOCOL = `${PROTOCOL}${Environment.VITE_APP_SERVER_URL}`;

// SERVER PORT
const SERVER_PORT = Environment.VITE_APP_SERVER_PORT;

// https://serverdomain.com OU http://localhost:PORT
const SERVER_FULL_URL =
  Environment.VITE_APP_MODE === 'DEVELOPMENT' ? `${SERVER_URL_WITH_PROTOCOL}:${SERVER_PORT}` : SERVER_URL_WITH_PROTOCOL;

// https://serverdomain.com/api OU http://localhost:PORT/api
export const API_BASE = '';
export const API_URL = `${SERVER_FULL_URL}${API_BASE}`;

// CLIENT
// https://clientdomain.com OU http://localhost
const CLIENT_URL_WITH_PROTOCOL = `${PROTOCOL}${Environment.VITE_APP_CLIENT_URL}`;
// CLIENT PORT
const CLIENT_PORT = Environment.VITE_APP_CLIENT_PORT;
// https://client.domain.com OU http://localhost:PORT
export const CLIENT_FULL_URL =
  Environment.VITE_APP_MODE === 'PRODUCTION' ? CLIENT_URL_WITH_PROTOCOL : `${CLIENT_URL_WITH_PROTOCOL}:${CLIENT_PORT}`;

export const WS_PROTOCOL = Environment.VITE_APP_HTTPS ? 'wss://' : 'ws://';
const WS_API_URL_WITH_PROTOCOl = `${WS_PROTOCOL}${Environment.VITE_APP_SERVER_URL}:${
  Environment.VITE_APP_MODE === 'PRODUCTION' ? '' : SERVER_PORT
}${API_BASE}`;

const ENDPOINTS = {
  // Example
  // DEPOSIT: '/deposit',
};

const API_ENDPOINTS = {
  // Example
  // AUTH: {
  //   DISCORD: {
  //     initial: `${ENDPOINTS.AUTH}/discord`,
  //     callback: `${ENDPOINTS.AUTH}/discord/callback`,
  //   },
  // },
};

const URLS = {
  MAIN_URLS: {
    CLIENT_PORT,
    CLIENT_URL_WITH_PROTOCOL,
    SERVER_PORT,
    SERVER_URL_WITH_PROTOCOL,
    API_URL,
    CLIENT_FULL_URL,
    SERVER_FULL_URL,
    WS_API_URL_WITH_PROTOCOl,
  },
  ENDPOINTS: API_ENDPOINTS,
};

export default URLS;
