import { useState } from "react";
import { RiAtLine, RiHashtag, RiVideoUploadLine } from "react-icons/ri";
import { COLORS } from "../../constants";
import {
  Button,
  ButtonGroup,
  Container,
  Input,
  UploadAImage,
  Wrapper,
} from "./style";

export default function Upload() {
  const [hidden, setHidden] = useState(true);
  const [input, setInput] = useState("");

  console.log(input);
  const handleOnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInput(event.target.value);
  };
  return (
    <Container>
      <Wrapper>
        <UploadAImage>
          <RiVideoUploadLine size={48} color={COLORS.white} />
          <p>Selecione o arquivo de imagem</p>
          <p>ou arraste e solte aqui</p>
        </UploadAImage>
        <Input>
          <label>
            Legenda:
            {hidden ? (
              <input
                value={input}
                onChange={handleOnChange}
                type="text"
                placeholder="Insira a legenda"
              />
            ) : (
              <input
                value={input}
                onChange={handleOnChange}
                type="text"
                placeholder="Marque um amigo"
              />
            )}
          </label>
          <div>
            <RiAtLine onClick={() => setHidden(!hidden)} size={20} />
            <RiHashtag onClick={() => setInput(input + "#")} size={20} />
          </div>
        </Input>
        <ButtonGroup>
          <Button>Cancelar</Button>
          <Button primary>Compartilhar</Button>
        </ButtonGroup>
      </Wrapper>
    </Container>
  );
}
