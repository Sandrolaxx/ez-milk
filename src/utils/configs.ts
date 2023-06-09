import {ExpenseInfo} from './types';

export const baseUrl = 'http://192.168.3.75:8080/ez-milk/api/v1';

export const defaultExpenses: Array<ExpenseInfo> = [
  {
    id: 1,
    descricao: 'Concentrado',
    statusRegistro: 'SEM_REGISTRO',
  },
  {
    id: 4,
    descricao: 'Volumoso',
    statusRegistro: 'SEM_REGISTRO',
  },
  {
    id: 2,
    descricao: 'Mineral',
    statusRegistro: 'REGISTRO_OK',
  },
  {
    id: 5,
    descricao: 'Medicamentos',
    statusRegistro: 'SEM_REGISTRO',
  },
  {
    id: 3,
    descricao: 'Mão de Obra',
    statusRegistro: 'REGISTRO_ATRASADO',
  },
];

export const defaultRebanho = {
  quantidadeTotal: 200,
  bezerra: 5,
  lactacao: 185,
  novilha: 3,
  seca: 7,
};
