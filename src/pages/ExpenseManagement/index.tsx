import { useIsFocused, useNavigation } from "@react-navigation/native";
import { useEffect, useState } from "react";
import SelectDropdown from "react-native-select-dropdown";
import SuccessCircle from "../../assets/icons/check-circle.png";
import ChevronDown from "../../assets/icons/chevron-down.png";
import CloseDown from "../../assets/icons/close-circle.png";
import CornImg from "../../assets/icons/corn.png";
import GrassImg from "../../assets/icons/grass.png";
import HealthImg from "../../assets/icons/heartbeat.png";
import LaboresImg from "../../assets/icons/laborers.png";
import MineralImg from "../../assets/icons/salt.png";
import GoBackBtn from "../../components/GoBackBtn";
import { baseUrl } from "../../utils/configs";
import { ExpenseData, HistoryData } from "../../utils/types";
import { formatMoneyWithSign, getIntMonth, getMonths } from "../../utils/utils";
import { CardBtnBlock, Container, ContainerBtn, DropDownIcon, ExpenseCardBtn, ExpenseImage, ExpenseStatus, ExpenseText, MovimentBlock, MovimentDiscription, MovimentValue, Movimentations, SelectViewContainer, SelectedView, SelectedViewText, Separator, Subtitle } from "./styles";

export default function ExpenseManagement() {
    const navigation = useNavigation();
    const months = getMonths();
    const [isExpensesView, setExpensesView] = useState(true);
    const [selectedMonth, setSelectedMonth] = useState(6);
    const [expensesData, setExpensesData] = useState<Array<ExpenseData>>();
    const [historyData, setHistoryData] = useState<HistoryData>();
    const isFocused = useIsFocused();

    useEffect(() => {
        if (isExpensesView) {
            fetch(baseUrl.concat("/tipo-registro/?pessoaId=1"), {
                headers: {
                    "Content-type": "application/json"
                }
            })
                .then(res => {
                    res.json().then(res => {
                        setExpensesData(res)
                    });
                })
                .catch(err => console.error(err));

        } else {
            handleGetHistory();
        }
    }, [isFocused, isExpensesView, selectedMonth]);

    function handleGetHistory() {
        fetch(baseUrl.concat("/registro/1/historico?mes=".concat(selectedMonth.toString())), {
            headers: {
                "Content-type": "application/json"
            }
        })
            .then(res => {
                res.json().then(res => {
                    setHistoryData(res);
                });
            })
            .catch(err => console.error(err));
    }

    function getStatusComponent(strStatus: string) {
        switch (strStatus) {
            case "SEM_REGISTRO":
                return false;
            case "REGISTRO_OK":
                return <ExpenseStatus source={SuccessCircle} />
            case "REGISTRO_ATRASADO":
                return <ExpenseStatus source={CloseDown} />
            default:
                break;
        }
    }

    return (
        <>
            <ContainerBtn>
                <GoBackBtn handleFunction={() => navigation.goBack()} />
            </ContainerBtn>
            <SelectViewContainer>
                <SelectedView onPress={() => setExpensesView(!isExpensesView)} selected={isExpensesView}>
                    <SelectedViewText selected={isExpensesView}>
                        Despesas
                    </SelectedViewText>
                </SelectedView>
                <SelectedView onPress={() => setExpensesView(!isExpensesView)} selected={!isExpensesView}>
                    <SelectedViewText selected={!isExpensesView}>
                        Histórico
                    </SelectedViewText>
                </SelectedView>
            </SelectViewContainer>
            <Separator />
            {!expensesData ?
                <Subtitle>Carregando...</Subtitle>
                :
                isExpensesView ?
                    <Container>
                        <Subtitle>Selecione o tipo de lançamento</Subtitle>
                        <CardBtnBlock>
                            <ExpenseCardBtn onPress={() => navigation.navigate("CreateRecord", { isExpense: true, expense: expensesData[4] })}>
                                {getStatusComponent(expensesData[4].statusRegistro)}
                                <ExpenseImage source={CornImg} />
                                <ExpenseText>
                                    {expensesData[4].descricao}
                                </ExpenseText>
                            </ExpenseCardBtn>
                            <ExpenseCardBtn onPress={() => navigation.navigate("CreateRecord", { isExpense: true, expense: expensesData[0] })}>
                                {getStatusComponent(expensesData[0].statusRegistro)}
                                <ExpenseImage source={GrassImg} />
                                <ExpenseText>
                                    {expensesData[0].descricao}
                                </ExpenseText>
                            </ExpenseCardBtn>
                        </CardBtnBlock>
                        <CardBtnBlock>
                            <ExpenseCardBtn onPress={() => navigation.navigate("CreateRecord", { isExpense: true, expense: expensesData[3] })}>
                                {getStatusComponent(expensesData[3].statusRegistro)}
                                <ExpenseImage source={MineralImg} />
                                <ExpenseText>
                                    {expensesData[3].descricao}
                                </ExpenseText>
                            </ExpenseCardBtn>
                            <ExpenseCardBtn onPress={() => navigation.navigate("CreateRecord", { isExpense: true, expense: expensesData[1] })}>
                                {getStatusComponent(expensesData[1].statusRegistro)}
                                <ExpenseImage source={HealthImg} />
                                <ExpenseText>
                                    {expensesData[1].descricao}
                                </ExpenseText>
                            </ExpenseCardBtn>
                        </CardBtnBlock>
                        <CardBtnBlock>
                            <ExpenseCardBtn onPress={() => navigation.navigate("CreateRecord", { isExpense: true, expense: expensesData[2] })}>
                                {getStatusComponent(expensesData[2].statusRegistro)}
                                <ExpenseImage source={LaboresImg} />
                                <ExpenseText>
                                    {expensesData[2].descricao}
                                </ExpenseText>
                            </ExpenseCardBtn>
                        </CardBtnBlock>
                    </Container>
                    :
                    !historyData ?
                        <Subtitle>Carregando...</Subtitle>
                        :
                        <Container>
                            <SelectDropdown
                                data={months}
                                defaultValueByIndex={months.length - 1}
                                renderDropdownIcon={() => <DropDownIcon source={ChevronDown} />}
                                buttonStyle={{ width: "100%", borderRadius: 6, borderColor: "#b9b9c5", borderWidth: 1, marginTop: 18 }}
                                onSelect={(selectedItem, index) => setSelectedMonth(getIntMonth(selectedItem))}
                            />
                            {historyData && historyData.registros.length > 0 ?
                                <>
                                    <Movimentations>
                                        {historyData.registros.map((history, index) => (
                                            <MovimentBlock key={index}>
                                                <MovimentDiscription>
                                                    {history.tipoRegistro?.descricao}
                                                    {history.tipoRegistroFilho?.descricao && "(".concat(history.tipoRegistroFilho?.descricao).concat(")")}
                                                    {history.porcentagem && " - ".concat(history.porcentagem.toString().concat("%"))}
                                                </MovimentDiscription>
                                                <MovimentValue cashIn={history.entrada}>
                                                    {formatMoneyWithSign(history.preco)}
                                                </MovimentValue>
                                            </MovimentBlock>
                                        ))}
                                    </Movimentations>
                                    <MovimentBlock lastMov>
                                        <MovimentDiscription>
                                            Saldo Final:
                                        </MovimentDiscription>
                                        <MovimentValue cashIn>
                                            {formatMoneyWithSign(historyData.saldoFinal)}
                                        </MovimentValue>
                                    </MovimentBlock>
                                </>
                                :
                                <Subtitle>Nenhum registro encontrado</Subtitle>
                            }
                        </Container>
            }
        </>
    )
}