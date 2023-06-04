import { Text } from "react-native";
import Button from "../../components/Button";
import { Container } from "./styles";
import { useNavigation } from "@react-navigation/native";

export default function HerdChange() {
    const navigation = useNavigation();

    return (
        <Container>
            <Text>Rebanho</Text>
            <Button handleFunction={() => navigation.goBack()}>
                Atualizar
            </Button>
        </Container>
    )
}