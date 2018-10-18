/* @flow */
import type { DocumentStateType, ActionCreator, CrudActionType } from '../utils/types';
import { getRandomJWT } from '../components/utils/helpers';

export const SET_DOCUMENT = 'SET_DOCUMENT';
export const UPDATE_DOCUMENT = 'UPDATE_DOCUMENT';

const generalDocuments: Array<string> = [
  'Solicitud de crédito llenada y firmada por el representante legal de la empresa (formato original)',
  'Presentación de la empresa y organigrama acreditado',
  'Autorización para consulta en buró de crédito acreditado (formato original)',
  'Identificación oficial del representante legal',
  'Autorización para consulta de buró de crédito de principal accionista PF (formato original)',
  'Identificación oficial del principal accionista',
  'Copia certificaciones ambientales y/o resultado de auditorías Fitosanitarias por entidades reguladas',
];

export const initGeneralDocuments = (dispatch: any) => (): void => {
  generalDocuments.forEach(d => {
    dispatch(
      setDocument({
        title: d,
        filename: '',
        created: '',
      })
    );
  });
};

export const setDocument = (document: DocumentStateType): ActionCreator => {
  const id = getRandomJWT(10);
  return {
    type: SET_DOCUMENT,
    data: { document, id },
  };
};

export const updateDocument = (dispatch: any) => (id: string, document: DocumentStateType) => {
  dispatch({
    type: UPDATE_DOCUMENT,
    data: { document, id },
  });
};
