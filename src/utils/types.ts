export interface ButtonProps {
    handleFunction: Function,
    children: string;
}

export interface InputProps {
    handleChangeText: Function,
    label: string;
    value: any;
    password?: boolean;
}