import { useNavigation } from "@react-navigation/native";
import { useState } from "react";
import Logo from "../../assets/milkIcon.png";
import Button from "../../components/Button";
import Input from "../../components/Input";
import { Container, ContainerLogin, LogoImg, Separator, SubTitle, Title } from "./styles";

export default function Login() {
    const navigation = useNavigation();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    return (
        <Container>
            <LogoImg source={Logo} />
            <ContainerLogin>
                <Title>Entrar</Title>
                <SubTitle>Realize o login na sua conta</SubTitle>
                <Input label="E-mail" value={email} handleChangeText={(val: any) => setEmail(val)} />
                <Input label="Senha" password value={password} handleChangeText={(val: any) => setPassword(val)} />
                <Separator />
                <Button handleFunction={() => navigation.navigate("Home")}>
                    Entrar
                </Button>
            </ContainerLogin>
        </Container>
    )
}