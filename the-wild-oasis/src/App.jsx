import styled from "styled-components";
import GlobalStyles from "./styles/GlobalStyles";
import Button from "./ui/Button";
import Input from "./ui/Input";

const H1 = styled.h1`
  color: red;
  background-color: yellow;
  font-size: 30px;
  font-weight: 600;
`;

const StyledApp = styled.div`
  background-color: orange;
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ButtonContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export default function App() {
  return (
    <>
      <GlobalStyles />
      <StyledApp>
        <H1>The Wild Oasis</H1>
        <Input type="text" placeholder="Enter number of guests" />
        <ButtonContainer>
          <Button>Check in</Button>
          <Button>Checkout</Button>
        </ButtonContainer>
      </StyledApp>
    </>
  );
}
