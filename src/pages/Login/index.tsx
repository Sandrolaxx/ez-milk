import { useNavigation } from "@react-navigation/native";
import Logo from "../../assets/milkIcon.png";
import Button from "../../components/Button";
import { Container, ContainerLogin, LogoImg, SubTitle, Title } from "./styles";
import Input from "../../components/Input";
import { useState } from "react";

export default function Login() {
    const navigation = useNavigation();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    async function verifyConnection() {
        const baseUrl = "http://192.168.3.75:8080/tipo-registro?pessoaId=1";

        const teste = await fetch(baseUrl);

        console.log(teste);
    }

    return (
        <Container>
            <LogoImg source={Logo} />
            <ContainerLogin>
                <Title>Entrar</Title>
                <SubTitle>Realize o login na sua conta</SubTitle>
                <Input label="E-mail" value={email} handleChangeText={(val: any) => setEmail(val)} />
                <Input label="Senha" password value={password} handleChangeText={(val: any) => setPassword(val)} />
                <Button handleFunction={() => navigation.navigate("Home")}>
                    Entrar
                </Button>
            </ContainerLogin>
        </Container>
    )
}