import { Text } from "react-native";
import Button from "../../components/Button";
import { Container } from "./styles";
import { useNavigation } from "@react-navigation/native";

export default function CreateRecord(navParam: any) {
    const navigation = useNavigation();
    const isExpense = navParam.route.params.isExpense;

    return (
        <Container>
            <Text>Lançamento {isExpense ? "Despesa" : "Receita"}</Text>
            <Button handleFunction={() => navigation.goBack()}>
                Criar
            </Button>
        </Container>
    )
}