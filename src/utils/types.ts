export interface BaseBtnProps {
    handleFunction: Function,
}

export interface ButtonProps extends BaseBtnProps {
    children: string;
    btnColor?: string;
    btnTextColor?: string;
    bold?: boolean;
}

export interface InputProps {
    handleChangeText: Function,
    label: string;
    value: any;
    password?: boolean;
    onFocus?: Function,
    showSoftInputOnFocus?: boolean;
}

export interface ISvgProps {
    size?: number;
    width?: number;
    fill?: string;
}