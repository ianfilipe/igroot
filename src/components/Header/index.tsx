import {
  RiHashtag,
  RiHomeLine,
  RiImageLine,
  RiUser3Line,
} from "react-icons/ri";
import Button from "../Button";
import { StyledHeader } from "./styles";

export default function Header() {
  return (
    <StyledHeader>
      <div>
        <h1>
          <RiImageLine size={20} />
          igroot
        </h1>
        <ul>
          <li>
            <Button>
              <RiHomeLine size={20} />
              Página Inicial
            </Button>
          </li>
          <li>
            <Button disabled>
              <RiHashtag size={20} />
              Explorar
            </Button>
          </li>
          <li>
            <Button disabled>
              <RiUser3Line size={20} />
              Perfil
            </Button>
          </li>
          <li>
            <Button rainbow fullWidth>
              Upload
            </Button>
          </li>
        </ul>
      </div>
      <ul>
        <li>
          <Button fullWidth>Crie uma conta</Button>
        </li>
      </ul>
    </StyledHeader>
  );
}
