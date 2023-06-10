const envWork = 'DEV';

export const ENV = {
  BASE_URL:
    envWork === 'DEV' ? 'http://localhost:3000' : window.location.origin,
};
