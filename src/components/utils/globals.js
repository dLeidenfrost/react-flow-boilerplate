/* @flow */
// Middleware url

// Paths, type { key: string, value: string }
export const PATHS: { [string]: string } = {
  LOGIN: '/login',
  HOME: '/home',
  THEME: '/theme',
  RECOVER: '/recover',
  REQUESTS: '/requests',
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

export const DETAL_VIEW_TABS: { [string]: { value: string, disabled: boolean } } = {
  CONTACT_DATA: { value: 'Datos de contacto', disabled: false },
  BUISNESS_INFO: { value: 'Información del negocio', disabled: false },
  TRANSACTIONAL_PROFILE: { value: 'Perfil transaccional', disabled: false },
  DOCUMENTATION: { value: 'Documentación', disabled: false },
  VISITS: { value: 'Visitas', disabled: false },
  REFERENCES: { value: 'Referencias', disabled: false },
  CREDIT: { value: 'Comité de crédito', disabled: false },
};

export const TAB_KEYS: { [string]: string } = {
  CONTACT_DATA: 'CONTACT_DATA',
  BUISNESS_INFO: 'BUISNESS_INFO',
  TRANSACTIONAL_PROFILE: 'TRANSACTIONAL_PROFILE',
  DOCUMENTATION: 'DOCUMENTATION',
  VISITS: 'VISITS',
  REFERENCES: 'REFERENCES',
  CREDIT: 'CREDIT',
};

export const PANEL_KEYS: {[string]: string} = {
  GENERAL: 'GENERAL',
  FINANCIAL_INFO: 'FINANCIAL_INFO',
  TRACKING: 'TRACKING',
  BOUNDED: 'BOUNDED',
  OTHERS: 'OTHERS',
  INSTRUMENTATION: 'INSTRUMENTATION',
};

export const PANELS: Array<{title: string, panel: string}> = [
  { title: 'Documentos generales', panel: PANEL_KEYS.GENERAL },
  { title: 'Información financiera', panel: PANEL_KEYS.FINANCIAL_INFO },
  { title: 'Seguimiento', panel: PANEL_KEYS.TRACKING },
  { title: 'Obligado solidario', panel: PANEL_KEYS.BOUNDED },
  { title: 'Otros documentos', panel: PANEL_KEYS.OTHERS },
  { title: 'Instrumentación', panel: PANEL_KEYS.INSTRUMENTATION },
];
// Analytics
export const TRACKINGID:string = 'UA-127488522-1';
