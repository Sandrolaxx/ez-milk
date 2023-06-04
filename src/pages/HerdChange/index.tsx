import { useNavigation } from "@react-navigation/native";
import { useEffect, useState } from "react";
import MinusIcon from "../../assets/icons/minus.png";
import PlusIcon from "../../assets/icons/plus.png";
import Button from "../../components/Button";
import GoBackBtn from "../../components/GoBackBtn";
import { baseUrl } from "../../utils/configs";
import { RebanhoType } from "../../utils/types";
import { BtnImageIcon, Container, HeaderText, HeardQuantityText, InputText, InputsContainer, MinusBtn, PlusBtn, SubTitle, SumInput, Title } from "./styles";

export default function HerdChange() {
    const navigation = useNavigation();
    const [qtdTotal, setQtdTotal] = useState(0);
    const [qtdLactante, setQtdLactante] = useState(0);
    const [qtdSeca, setQtdSeca] = useState(0);
    const [qtdNovilha, setQtdNovilha] = useState(0);
    const [qtdBezerra, setQtdBezerra] = useState(0);

    useEffect(() => {
        getRebanhoData();
    }, []);

    function getRebanhoData() {
        fetch(baseUrl.concat("/rebanho/1"), {
            headers: {
                "Content-type": "application/json"
            }
        })
            .then(res => {
                res.json().then((res: RebanhoType) => {
                    setQtdTotal(res.quantidadeTotal);
                    setQtdLactante(res.lactacao);
                    setQtdSeca(res.seca);
                    setQtdBezerra(res.bezerra);
                    setQtdNovilha(res.novilha);
                });
            })
            .catch(err => console.error(err));
    }

    function updateRebanhoData() {
        const payload = {
            bezerra: qtdBezerra,
            lactacao: qtdLactante,
            novilha: qtdNovilha,
            seca: qtdSeca
        }

        fetch(baseUrl.concat("/rebanho/1/atualizar/1"), {
            method: "PUT",
            headers: {
                "Content-type": "application/json"
            },
            body: JSON.stringify(payload)
        })
            .then(res => {
                res.json().then((res: RebanhoType) => {
                    setQtdTotal(res.quantidadeTotal);
                    setQtdLactante(res.lactacao);
                    setQtdSeca(res.seca);
                    setQtdBezerra(res.bezerra);
                    setQtdNovilha(res.novilha);
                });
            })
            .catch(err => console.error(err));
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
            <Button handleFunction={updateRebanhoData}>
                Atualizar
            </Button>
        </Container>
    )
}