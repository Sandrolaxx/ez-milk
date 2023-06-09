import { Dispatch, SetStateAction } from "react";

export interface IAppContext {
    historyData: Array<Expense>;
    updateHistoryData: Dispatch<SetStateAction<Array<Expense>>>;
    expensesData: Array<ExpenseInfo>;
    updateData: Dispatch<SetStateAction<Array<ExpenseInfo>>>;
    rebanhoData: RebanhoType;
    updateRebanhoData: Dispatch<SetStateAction<RebanhoType>>;
}

export interface BaseBtnProps {
  handleFunction: Function;
}

export interface ButtonProps extends BaseBtnProps {
  children: string;
  btnColor?: string;
  btnTextColor?: string;
  bold?: boolean;
}

export interface InputProps {
  handleChangeText: Function;
  label: string;
  value: any;
  password?: boolean;
  onFocus?: Function;
  showSoftInputOnFocus?: boolean;
  type?: string;
}

export interface ISvgProps {
  size?: number;
  width?: number;
  fill?: string;
}

export type AppContextType = {
    historyData: Array<Expense>;
    updateHistoryData: Dispatch<SetStateAction<Array<Expense>>>;
    expensesData: Array<ExpenseInfo>;
    updateData: (info: Array<ExpenseInfo>) => void;
    rebanhoData: RebanhoType;
    updateRebanhoData: Dispatch<SetStateAction<RebanhoType>>;
}

export type ExpenseInfo = {
  descricao: string;
  id: number;
  statusRegistro: string;
};

export type ExpenseChildData = {
  id: number;
  descricao: string;
};

export type HistoryData = {
  registros: Array<Expense>;
  saldoFinal: number;
};

export type Expense = {
  entrada: boolean;
  dataRegistro: string;
  quantidade: string;
  preco: number;
  tipoRegistro?: {
    id: number;
    descricao: string;
    entrada: boolean;
  };
  tipoRegistroFilho?: {
    id: number;
    descricao: string;
  };
  porcentagem?: number;
};

export type RebanhoType = {
  quantidadeTotal: number;
  lactacao: number;
  seca: number;
  novilha: number;
  bezerra: number;
};
