import { useNavigation } from "@react-navigation/native";
import Button from "../../components/Button";
import { Container, Separator, SeparatorLarge, SubTitle } from "./styles";

export default function Home() {
    const navigation = useNavigation();

    return (
        <Container>
            <SubTitle>Selecione o tipo de lançamento</SubTitle>
            <SeparatorLarge />
            <Button
                bold
                btnColor="#DFDFE2"
                btnTextColor={"#00A441"}
                handleFunction={() => navigation.navigate("CreateRecord", { isExpense: false })}>
                Receitas
            </Button>
            <Separator />
            <Button
                bold
                btnColor="#DFDFE2"
                btnTextColor={"#B80505"}
                handleFunction={() => navigation.navigate("ExpenseManagement")}>
                Despesas
            </Button>
            <SeparatorLarge />
            <SubTitle>Alterações</SubTitle>
            <Separator />
            <Button
                bold
                btnColor="#DFDFE2"
                btnTextColor={"#292B35"}
                handleFunction={() => navigation.navigate("HerdChange")}>
                Alteração Rebanho
            </Button>
        </Container>
    )
}