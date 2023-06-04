import React from "react";
import ChevronLeft from "../../assets/icons/chevron-left.png";
import { BaseBtnProps } from "../../utils/types";
import { ButtonText, Container, GoBackImage } from "./styles";

export default function GoBackBtn({ handleFunction }: BaseBtnProps) {
    return (
        <Container onPress={handleFunction}>
            <GoBackImage source={ChevronLeft} />
            <ButtonText>Voltar</ButtonText>
        </Container>
    );
}