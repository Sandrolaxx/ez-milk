import { useNavigation } from "@react-navigation/native";
import { useState } from "react";
import { Calendar, DateData } from "react-native-calendars";
import Button from "../../components/Button";
import GoBackBtn from "../../components/GoBackBtn";
import Input from "../../components/Input";
import { CalendarView, Container, RegisterBtnContainer, SubTitle, Title } from "./styles";

export default function CreateRecord(navParam: any) {
    const navigation = useNavigation();
    const isExpense = navParam.route.params.isExpense;
    const [productQuantity, setProductQuantity] = useState("");
    const [amount, setAmount] = useState("");
    const [date, setDate] = useState("");
    const [isShowCalendar, setShowCalendar] = useState(false);

    function handleSelectDate(day: DateData) {
        setDate(day.dateString);
        setShowCalendar(false);
    }

    return (
        <>
            <Container>
                <GoBackBtn handleFunction={() => navigation.goBack()} />
                <Title>
                    {isExpense ? "Nova Despesa" : "Registro Receita"}
                </Title>
                <SubTitle>
                    {isExpense ? "Concentrado" : "Entrada"}
                </SubTitle>
                <Input label="Quantidade Total Litros" value={productQuantity} handleChangeText={(val: any) => setProductQuantity(val)} />
                <Input label="Valor Total" value={amount} handleChangeText={(val: any) => setAmount(val)} />
                <Input showSoftInputOnFocus
                    onFocus={() => setShowCalendar(true)}
                    label="03/06/2023" value={date}
                    handleChangeText={(val: any) => setDate(val)} />
                <RegisterBtnContainer>
                    <Button handleFunction={() => navigation.goBack()}>
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