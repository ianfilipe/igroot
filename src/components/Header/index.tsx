import {
  RiHashtag,
  RiHomeLine,
  RiImageLine,
  RiUser3Line,
} from "react-icons/ri";
import { Link } from "react-router-dom";
import Button from "../Button";
import { StyledHeader } from "./styles";

export default function Header() {
  return (
    <StyledHeader>
      <div>
        <Link to="/">
          <h1>
            <RiImageLine size={20} />
            igroot
          </h1>
        </Link>
        <ul>
          <li>
            <Link to="/">
              <Button>
                <RiHomeLine size={20} />
                Página Inicial
              </Button>
            </Link>
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
            <Link to="/upload">
              <Button rainbow fullWidth>
                Upload
              </Button>
            </Link>
          </li>
        </ul>
      </div>
      <ul>
        <li>
          <Link to="/signup">
            <Button fullWidth>Crie uma conta</Button>
          </Link>
        </li>
      </ul>
    </StyledHeader>
  );
}
