/* @flow */
export const getRandomJWT = (jwtLength: number): string => {
  let dummyJWT: string = '';
  const characters: string = 'ABCDFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz123456789';
  for (let i: number = 0; i < jwtLength; i++) {
    const ch: string = characters[Math.floor(Math.random() * characters.length)];
    dummyJWT += ch;
  }
  return dummyJWT;
};
