/* @flow */
// Middleware url

// Paths, type { key: string, value: string }
export const PATHS: { [string]: string } = {
  LOGIN: '/login',
  HOME: '/home',
  THEME: '/theme',
  RECOVER: '/recover',
};

export const ROLES: { [string]: number } = {
  DIRECTOR: 1, // Director
  MANAGER: 2, // Gerente
  SPECIALIST: 3, // Especialista
};

export const AREAS: { [string]: number } = {
  MKT: 1, // Comercial
  CREDIT: 2, // Crédito
  MC: 3, // Mesa de control
  LEGAL: 4, // Legal
};

export const PHASES: { [string]: number } = {
  CANDIDATE: 1,
  PROSPECT: 2,
  INSTRUMENT: 3,
  CLIENT: 4,
  REJECT: 5,
};

export const STATUS: { [string]: number } = {
  PENDING: 1,
  APPROVED: 2,
  REJECTED: 3,
};

// Analytics
export const TRACKINGID:string = 'UA-127488522-1';