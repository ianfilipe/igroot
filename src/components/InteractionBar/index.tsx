import { RiHeartLine } from "react-icons/ri";
import Button from "../Button";
import { StyledInteractionBar } from "./styles";

export default function InteractionBar() {
  return (
    <StyledInteractionBar>
      <div>
        <Button>
          <RiHeartLine size={24} />
          666
        </Button>
      </div>
      <div>
        <Button>
          <RiHeartLine size={24} />
          666
        </Button>
      </div>
      <div>
        <Button>
          <RiHeartLine size={24} />
          666
        </Button>
      </div>
    </StyledInteractionBar>
  );
}
