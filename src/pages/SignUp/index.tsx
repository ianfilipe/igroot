import Button from "../../components/Button";
import Input from "../../components/Input";
import { Container } from "../../styles/global";
import { Wrapper } from "./styles";

export default function SignUp() {
  return (
    <>
      <Container>
        <Wrapper>
          <div></div>
          <div>
            <h1>Cadastre-se para ver fotos dos seus amigos.</h1>
            <Input type="text" label="Nome:" placeholder="Digite seu nome" />
            <Input
              type="text"
              label="E-mail:"
              placeholder="Digite seu e-mail"
            />
            <Input type="date" label="Data de Nascimento:" />
            <Input
              type="password"
              label="Senha:"
              placeholder="Digite sua senha"
            />
            <Button primary>Criar conta</Button>
          </div>
        </Wrapper>
      </Container>
    </>
  );
}
