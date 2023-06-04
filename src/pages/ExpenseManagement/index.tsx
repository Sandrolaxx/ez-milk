import { useNavigation } from "@react-navigation/native";
import { useState } from "react";
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
import { getMonths } from "../../utils/utils";
import { CardBtnBlock, Container, ContainerBtn, DropDownIcon, ExpenseCardBtn, ExpenseImage, ExpenseStatus, ExpenseText, MovimentBlock, MovimentDiscription, MovimentValue, Movimentations, SelectViewContainer, SelectedView, SelectedViewText, Separator, Subtitle } from "./styles";

export default function ExpenseManagement() {
    const navigation = useNavigation();
    const months = getMonths();
    const [isExpensesView, setExpensesView] = useState(true);

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
            {isExpensesView ?
                <Container>
                    <Subtitle>Selecione o tipo de lançamento</Subtitle>
                    <CardBtnBlock>
                        <ExpenseCardBtn onPress={() => navigation.navigate("CreateRecord", { isExpense: true })}>
                            <ExpenseStatus source={SuccessCircle} />
                            <ExpenseImage source={CornImg} />
                            <ExpenseText>
                                Concentrado
                            </ExpenseText>
                        </ExpenseCardBtn>
                        <ExpenseCardBtn onPress={() => navigation.navigate("CreateRecord", { isExpense: true })}>
                            <ExpenseImage source={GrassImg} />
                            <ExpenseText>
                                Volumoso
                            </ExpenseText>
                        </ExpenseCardBtn>
                    </CardBtnBlock>
                    <CardBtnBlock>
                        <ExpenseCardBtn onPress={() => navigation.navigate("CreateRecord", { isExpense: true })}>
                            <ExpenseImage source={MineralImg} />
                            <ExpenseText>
                                Mineral
                            </ExpenseText>
                        </ExpenseCardBtn>
                        <ExpenseCardBtn onPress={() => navigation.navigate("CreateRecord", { isExpense: true })}>
                            <ExpenseImage source={HealthImg} />
                            <ExpenseText>
                                Medicamentos
                            </ExpenseText>
                        </ExpenseCardBtn>
                    </CardBtnBlock>
                    <CardBtnBlock>
                        <ExpenseCardBtn onPress={() => navigation.navigate("CreateRecord", { isExpense: true })}>
                        <ExpenseStatus source={CloseDown} />
                            <ExpenseImage source={LaboresImg} />
                            <ExpenseText>
                                Mão de Obra
                            </ExpenseText>
                        </ExpenseCardBtn>
                    </CardBtnBlock>
                </Container>
                :
                <Container>
                    <SelectDropdown
                        data={months}
                        defaultValueByIndex={months.length - 1}
                        renderDropdownIcon={() => <DropDownIcon source={ChevronDown} />}
                        buttonStyle={{ width: "100%", borderRadius: 6, borderColor: "#b9b9c5", borderWidth: 1, marginTop: 18 }}
                        onSelect={(selectedItem, index) => {
                            console.log(selectedItem, index)
                        }}
                    />
                    <Movimentations>
                        <MovimentBlock>
                            <MovimentDiscription>
                                Receitas
                            </MovimentDiscription>
                            <MovimentValue cashIn>
                                R$ 49.784,28
                            </MovimentValue>
                        </MovimentBlock>
                        <MovimentBlock>
                            <MovimentDiscription>
                                Mão de Obra(Veterinário) - 35%
                            </MovimentDiscription>
                            <MovimentValue>
                                R$ 13.398,28
                            </MovimentValue>
                        </MovimentBlock>
                        <MovimentBlock>
                            <MovimentDiscription>
                                Concentrado(Milho) - 44.5%
                            </MovimentDiscription>
                            <MovimentValue>
                                R$ 19.042,32
                            </MovimentValue>
                        </MovimentBlock>
                    </Movimentations>
                    <MovimentBlock lastMov>
                        <MovimentDiscription>
                            Saldo Final:
                        </MovimentDiscription>
                        <MovimentValue cashIn>
                            R$ 17.343,68
                        </MovimentValue>
                    </MovimentBlock>
                </Container>
            }
        </>
    )
}