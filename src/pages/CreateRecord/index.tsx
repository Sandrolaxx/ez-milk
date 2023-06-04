import { useNavigation } from "@react-navigation/native";
import { useEffect, useState } from "react";
import { Calendar, DateData } from "react-native-calendars";
import SelectDropdown from "react-native-select-dropdown";
import ChevronDown from "../../assets/icons/chevron-down.png";
import Button from "../../components/Button";
import GoBackBtn from "../../components/GoBackBtn";
import Input from "../../components/Input";
import { baseUrl } from "../../utils/configs";
import { CreateExpenseData, ExpenseChildData } from "../../utils/types";
import { DropDownIcon } from "../ExpenseManagement/styles";
import { CalendarView, Container, RegisterBtnContainer, SubTitle, Title } from "./styles";

export default function CreateRecord(navParam: any) {
    const navigation = useNavigation();
    const isExpense = navParam.route.params.isExpense;
    const expense = navParam.route.params.expense;
    const [productQuantity, setProductQuantity] = useState("");
    const [amount, setAmount] = useState("");
    const [date, setDate] = useState("");
    const [isShowCalendar, setShowCalendar] = useState(false);
    const [expenseChild, setExpenseChild] = useState<Array<ExpenseChildData>>();
    const [selectedExpenseChild, setSelectedExpenseChild] = useState<string>();

    useEffect(() => {
        if (expense) {
            fetch(baseUrl.concat("/registro-filho/?tipoRegistro=".concat(expense.id)), {
                headers: {
                    "Content-type": "application/json"
                }
            })
                .then(res => {
                    res.json().then(res => setExpenseChild(res));
                })
                .catch(err => console.error(err));
        }
    }, [expense]);

    function handleSelectDate(day: DateData) {
        setDate(day.dateString);
        setShowCalendar(false);
    }

    function handleCreate() {
        var payload: CreateExpenseData = {
            entrada: true,
            dataRegistro: date == "" ? new Date().toISOString() : date,
            quantidade: productQuantity,
            preco: amount,
            tipoRegistro: {
                id: 6
            }
        }

        if (isExpense) {
            const selectedChildExpense = expenseChild?.filter(exp => exp.descricao == selectedExpenseChild)[0];

            payload.tipoRegistro = {
                id: expense.id,
            }

            payload.tipoRegistroFilho = {
                id: selectedChildExpense!.id,
            }
        }

        fetch(baseUrl.concat("/registro/1"), {
            headers: {
                "Content-type": "application/json"
            }, method: "POST", body: JSON.stringify(payload)
        })
            .then(res => navigation.goBack())
            .catch(err => console.error(err));
    }

    return (
        <>
            <Container>
                <GoBackBtn handleFunction={() => navigation.goBack()} />
                <Title>
                    {isExpense ? "Despesa Mensal" : "Receita Mensal"}
                </Title>
                <SubTitle>
                    {isExpense ? expense.descricao : "Entrada"}
                </SubTitle>
                <Input type="numeric" label={isExpense ? "Quantidade" : "Quantidade Total (Litros)"}
                    value={productQuantity} handleChangeText={(val: any) => setProductQuantity(val)} />
                <Input type="numeric" label="Valor Total" value={amount} handleChangeText={(val: any) => setAmount(val)} />
                {isExpense &&
                    <SelectDropdown
                        data={expenseChild ? expenseChild.map(val => val.descricao) : ["Selecione uma Opção"]}
                        defaultValue={"Selecione uma Opção"}
                        renderDropdownIcon={() => <DropDownIcon source={ChevronDown} />}
                        buttonStyle={{
                            width: "100%", borderRadius: 6, borderColor: "#b9b9c5",
                            borderWidth: 1, marginTop: 18
                        }}
                        onSelect={(selectedItem, index) => setSelectedExpenseChild(selectedItem)}
                    />
                }
                <Input showSoftInputOnFocus
                    onFocus={() => setShowCalendar(true)}
                    label="03/06/2023" value={date}
                    handleChangeText={(val: any) => setDate(val)} />
                <RegisterBtnContainer>
                    <Button handleFunction={handleCreate}>
                        Registrar
                    </Button>
                </RegisterBtnContainer>
            </Container>
            {isShowCalendar &&
                <CalendarView>
                    <Calendar style={{ borderRadius: 6, width: 340, height: 340 }}
                        onDayPress={handleSelectDate}
                    />
                </CalendarView>
            }
        </>
    )
}