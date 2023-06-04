import React, { useState } from "react";
import { InputProps } from "../../utils/types";
import { Container, InputText } from "./styles";

export default function Input({ value, password, label, handleChangeText, onFocus }: InputProps) {
    const [isFocused, setFocused] = useState(false);

    function handleFocusOff() {
        setFocused(false);
        
        onFocus!();
    }

    return (
        <Container>
            <InputText
                secureTextEntry={password}
                showSoftInputOnFocus={false}
                onFocus={() => onFocus ? handleFocusOff() : setFocused(true)}
                onEndEditing={() => setFocused(false)}
                focused={isFocused}
                placeholder={label}
                value={value}
                onChangeText={(val: any) => handleChangeText(val)} />
        </Container>
    );
}