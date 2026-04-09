import styled from "styled-components";

const StyledHeader = styled.header`
  background-color: var(--color-grey-100);
  padding: 2.4rem;
  border-bottom: 2px solid var(--color-grey-400);
`;

export default function Header() {
  return <StyledHeader>HEADER</StyledHeader>;
}
