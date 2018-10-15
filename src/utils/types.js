/* @flow */
// Enums, if globals turned out to be strings
// export type StatusStateType = STATUS.PENDING | STATUS.APPROVED | STATUS.REJECTED;
// export type PhaseStateType = PHASES.CANDIDATE | PHASES.PROSPECT | PHASES.INSTRUMENT | PHASES.CLIENT | PHASES.REJECT;
// export type AreaStateType = AREAS.MKT | AREAS.CREDIT | AREAS.MC | AREAS.LEGAL;
// General Redux Type
export type ActionCreator = {
  type: string,
  data: any,
};
// Entities
export type PromotorStateType = {
  id: number,
  firstname: string,
  lastname: string,
  office: string,
};
export type UserStateType = {
  user?: {
    id: number,
    promotor: PromotorStateType,
    role: number,
    area: number
  }
};
export type ClientStateType = {
  client?: {
    name: string,
    buisnessName: string,
    currentPhase: number,
  }
};
export type RequestStateType = {
  applications?: {
    [number]: { // key might be the folio also
      folio: string,
      contactName: string,
      date: string,
      visitDate: string,
      area: number,
      status: number,
      // verify
      product: string,
      region: string,
      office: string,
      canal: string,
      user: Array<number>,
      client: Array<number>
    }
  }
};
