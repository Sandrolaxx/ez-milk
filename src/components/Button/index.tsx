import React from "react";
import { ButtonProps } from "../../utils/types";
import { ButtonText, Container } from "./styles";

export default function Button({ children, handleFunction, btnColor, btnTextColor, bold }: ButtonProps) {
    return (
        <Container btnColor={btnColor} onPress={handleFunction}>
            <ButtonText bold={bold} btnTextColor={btnTextColor}>{children}</ButtonText>
        </Container>
    );
}