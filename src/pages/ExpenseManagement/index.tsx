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
import { useAppContext } from "../../context/appContext";
import { HistoryData } from "../../utils/types";
import { formatMoneyWithSign, getIntMonth, getMonths } from "../../utils/utils";
import { CardBtnBlock, Container, ContainerBtn, DropDownIcon, ExpenseCardBtn, ExpenseImage, ExpenseStatus, ExpenseText, MovimentBlock, MovimentDiscription, MovimentValue, Movimentations, SelectViewContainer, SelectedView, SelectedViewText, Separator, Subtitle } from "./styles";

export default function ExpenseManagement() {
    const navigation = useNavigation();
    const months = getMonths();
    const [isExpensesView, setExpensesView] = useState(true);
    const [historyData, setHistoryData] = useState<HistoryData>();
    const [selectedMonth, setSelectedMonth] = useState(6);
    const { historyData: history, expensesData } = useAppContext();
    const isFocudes = useIsFocused();

    useEffect(() => {
        if (history && history.length > 0) {
            const filteredMonthExpenses = history.filter(item => new Date(item.dataRegistro).getMonth() + 1 == selectedMonth);

            if (filteredMonthExpenses.length > 0) {
                setHistoryData({
                    registros: filteredMonthExpenses,
                    saldoFinal: filteredMonthExpenses.map(item => item.preco).reduce((total, item) => total + item)
                });

                return;
            }
        }
        setHistoryData({ registros: [], saldoFinal: 0.0 });
    }, [selectedMonth, isFocudes]);

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
    function getImageComponent(expenseName: string) {
        switch (expenseName) {
            case "Concentrado":
                return CornImg;
            case "Volumoso":
                return GrassImg;
            case "Mineral":
                return MineralImg;
            case "Medicamentos":
                return HealthImg;
            case "Mão de Obra":
                return LaboresImg;
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
                            {expensesData.map(expense => (
                                <ExpenseCardBtn key={expense.id} onPress={() => navigation.navigate("CreateRecord", { isExpense: true, expense: expense })}>
                                    {getStatusComponent(expense.statusRegistro)}
                                    <ExpenseImage source={getImageComponent(expense.descricao)} />
                                    <ExpenseText>
                                        {expense.descricao}
                                    </ExpenseText>
                                </ExpenseCardBtn>
                            ))}
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