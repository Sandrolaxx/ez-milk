import React from "react";
import { ButtonProps } from "../../utils/types";
import { ButtonText, Container } from "./styles";

export default function Button({ children, handleFunction }: ButtonProps) {
    return (
        <Container onPress={handleFunction}>
            <ButtonText>{children}</ButtonText>
        </Container>
    );
}