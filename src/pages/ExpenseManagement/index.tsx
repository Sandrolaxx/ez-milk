import { Text } from "react-native";
import Button from "../../components/Button";
import { Container } from "./styles";
import { useNavigation } from "@react-navigation/native";

export default function ExpenseManagement() {
    const navigation = useNavigation();

    return (
        <Container>
            <Text>ExpenseManagement</Text>
            <Button handleFunction={() => navigation.navigate("CreateRecord", { isExpense: true })}>
                Concentrado
            </Button>
        </Container>
    )
}