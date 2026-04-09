import styled from "styled-components";
import GlobalStyles from "./styles/GlobalStyles";
import Button from "./ui/Button";
import Input from "./ui/Input";
import Heading from "./ui/Heading";

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
        <Heading as="h1">The Wild Oasis</Heading>

        <Heading as="h2">Form</Heading>
        <Input type="text" placeholder="Enter number of guests" />

        <Heading as="h3">Check in and out</Heading>
        <ButtonContainer>
          <Button
            size="medium"
            variation="primary"
            onclick={() => alert("Check In Clicked")}
          >
            Check in
          </Button>
          <Button
            size="small"
            variation="secondary"
            onclick={() => alert("Check Out Clicked")}
          >
            Checkout
          </Button>
        </ButtonContainer>
      </StyledApp>
    </>
  );
}
