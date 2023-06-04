import { Text } from "react-native";
import Button from "../../components/Button";
import { Container } from "./styles";
import { useNavigation } from "@react-navigation/native";
import GoBackBtn from "../../components/GoBackBtn";

export default function ExpenseManagement() {
    const navigation = useNavigation();

    return (
        <Container>
            <GoBackBtn handleFunction={() => navigation.goBack()} />
            <Text>ExpenseManagement</Text>
            <Button handleFunction={() => navigation.navigate("CreateRecord", { isExpense: true })}>
                Concentrado
            </Button>
        </Container>
    )
}