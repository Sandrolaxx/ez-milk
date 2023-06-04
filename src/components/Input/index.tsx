import React, { useState } from "react";
import { InputProps } from "../../utils/types";
import { Container, InputText } from "./styles";

export default function Input({ value, password, label, handleChangeText }: InputProps) {
    const [isFocused, setFocused] = useState(false);

    return (
        <Container>
            <InputText
                secureTextEntry={password}
                onFocus={() => setFocused(!isFocused)}
                onEndEditing={() => setFocused(!isFocused)}
                focused={isFocused}
                placeholder={label}
                value={value}
                onChangeText={(val: any) => handleChangeText(val)} />
        </Container>
    );
}