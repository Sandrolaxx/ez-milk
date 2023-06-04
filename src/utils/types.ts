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

export type ExpenseData = {
  descricao: string;
  id: number;
  statusRegistro: string;
};

export type ExpenseChildData = {
  id: number;
  descricao: string;
};

export type CreateExpenseData = {
  entrada: boolean;
  dataRegistro: string;
  quantidade: string;
  preco: string;
  tipoRegistro?: {
    id: number;
  };
  tipoRegistroFilho?: {
    id: number;
  };
};
