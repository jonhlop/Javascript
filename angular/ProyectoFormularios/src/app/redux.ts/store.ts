//esqueleto basico
//y ahora en appnodele.ts
//defino la estructura de los datos

import {
  MODIFICA_PERSONAL_DATA,
  MODIFICA_PROFESIONAL_DATA,
  MODIFICA_AFICIONES_DATA,
  MODIFICA_PORCENTAJE_DATA,
} from './action';

import { tassign } from 'tassign';

export interface IAppState {
  personalData: {
    nombre: string;
    apellidos: string;
    edad: number;
    direccion: string;
  };

  profesionalData: {
    formacion: string;
    trabajo: string;
    especialidad: string;
  };

  aficionesData: string[];

  porcentajeCompleto: number;
}

export const INITIAL_STATE: IAppState = {
  personalData: {
    nombre: '',
    apellidos: '',
    edad: -1,
    direccion: '',
  },

  profesionalData: {
    formacion: '',
    trabajo: '',
    especialidad: '',
  },

  aficionesData: [],
  porcentajeCompleto: 1 ,
};

export function rootReducer(state, action) {
  //recibo las diferentes peticiones para poder gestionarlas
  switch (action.type) {
    case MODIFICA_PERSONAL_DATA:
      return tassign(state, { personalData: action.data });
    case MODIFICA_PROFESIONAL_DATA:
      return tassign(state, { profesionalData: action.data });
    case MODIFICA_AFICIONES_DATA:
      return tassign(state, { aficionesData: action.data });
    case MODIFICA_PORCENTAJE_DATA:
        return tassign(state, { porcentajeCompleto: action.data });

  }

  console.log(action);

  return state;
}
