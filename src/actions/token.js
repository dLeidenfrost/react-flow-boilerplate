/* @flow */
export const getJWT = (): string => {
  const jwt: string = window.sessionStorage.getItem('jwt');
  return jwt || '';
};
export const setJWT = (jwt: string): void => window.sessionStorage.setItem('jwt', jwt);
export const clearJWT = (): void => window.sessionStorage.removeItem('jwt');
