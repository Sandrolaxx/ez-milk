import { useNavigation } from "@react-navigation/native";
import { useState } from "react";
import MinusIcon from "../../assets/icons/minus.png";
import PlusIcon from "../../assets/icons/plus.png";
import Button from "../../components/Button";
import GoBackBtn from "../../components/GoBackBtn";
import { useAppContext } from "../../context/appContext";
import { RebanhoType } from "../../utils/types";
import { BtnImageIcon, Container, HeaderText, HeardQuantityText, InputText, InputsContainer, MinusBtn, PlusBtn, SubTitle, SumInput, Title } from "./styles";

export default function HerdChange() {
    const navigation = useNavigation();
    const { rebanhoData, updateRebanhoData } = useAppContext();
    const [qtdTotal, setQtdTotal] = useState(rebanhoData.quantidadeTotal);
    const [qtdLactante, setQtdLactante] = useState(rebanhoData.lactacao);
    const [qtdSeca, setQtdSeca] = useState(rebanhoData.seca);
    const [qtdNovilha, setQtdNovilha] = useState(rebanhoData.novilha);
    const [qtdBezerra, setQtdBezerra] = useState(rebanhoData.bezerra);

    function updateRebanho() {
        const payload: RebanhoType = {
            quantidadeTotal: qtdBezerra + qtdLactante + qtdNovilha + qtdSeca,
            bezerra: qtdBezerra,
            lactacao: qtdLactante,
            novilha: qtdNovilha,
            seca: qtdSeca
        }

        updateRebanhoData(payload);

        navigation.goBack();
    }

    return (
        <Container>
            <GoBackBtn handleFunction={() => navigation.goBack()} />
            <InputsContainer>
                <Title>Rebanho</Title>
                <SubTitle>Alteração</SubTitle>
                <HeardQuantityText>
                    Quantidade atual rebanho: {qtdTotal}
                </HeardQuantityText>
                <HeaderText>
                    Lactante
                </HeaderText>
                <SumInput>
                    <InputText editable={false} value={qtdLactante.toString()} />
                    <PlusBtn onPress={() => setQtdLactante(qtdLactante + 1)}>
                        <BtnImageIcon source={PlusIcon} />
                    </PlusBtn>
                    <MinusBtn onPress={() => qtdLactante <= 0 ? false : setQtdLactante(qtdLactante - 1)}>
                        <BtnImageIcon source={MinusIcon} />
                    </MinusBtn>
                </SumInput>
                <HeaderText>
                    Seca
                </HeaderText>
                <SumInput>
                    <InputText editable={false} value={qtdSeca.toString()} />
                    <PlusBtn onPress={() => setQtdSeca(qtdSeca + 1)}>
                        <BtnImageIcon source={PlusIcon} />
                    </PlusBtn>
                    <MinusBtn onPress={() => qtdSeca <= 0 ? false : setQtdSeca(qtdSeca - 1)}>
                        <BtnImageIcon source={MinusIcon} />
                    </MinusBtn>
                </SumInput>
                <HeaderText>
                    Novilha
                </HeaderText>
                <SumInput>
                    <InputText editable={false} value={qtdNovilha.toString()} />
                    <PlusBtn onPress={() => setQtdNovilha(qtdNovilha + 1)}>
                        <BtnImageIcon source={PlusIcon} />
                    </PlusBtn>
                    <MinusBtn onPress={() => qtdNovilha <= 0 ? false : setQtdNovilha(qtdNovilha - 1)}>
                        <BtnImageIcon source={MinusIcon} />
                    </MinusBtn>
                </SumInput>
                <HeaderText>
                    Bezerra
                </HeaderText>
                <SumInput>
                    <InputText editable={false} value={qtdBezerra.toString()} />
                    <PlusBtn onPress={() => setQtdBezerra(qtdBezerra + 1)}>
                        <BtnImageIcon source={PlusIcon} />
                    </PlusBtn>
                    <MinusBtn onPress={() => qtdBezerra <= 0 ? false : setQtdBezerra(qtdBezerra - 1)}>
                        <BtnImageIcon source={MinusIcon} />
                    </MinusBtn>
                </SumInput>
            </InputsContainer>
            <Button handleFunction={updateRebanho}>
                Atualizar
            </Button>
        </Container>
    )
}