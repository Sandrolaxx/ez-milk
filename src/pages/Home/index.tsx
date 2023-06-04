import { Text } from "react-native";
import Button from "../../components/Button";
import { Container } from "./styles";
import { useNavigation } from "@react-navigation/native";

export default function Home() {
    const navigation = useNavigation();
    
    return (
        <Container>
            <Text>Home</Text>
            <Button handleFunction={() => navigation.navigate("CreateRecord", { isExpense: false })}>
                Receitas
            </Button>
            <Button handleFunction={() => navigation.navigate("ExpenseManagement")}>
                Despesas
            </Button>
            <Button handleFunction={() => navigation.navigate("HerdChange")}>
                Alteração Rebanho
            </Button>
        </Container>
    )
}