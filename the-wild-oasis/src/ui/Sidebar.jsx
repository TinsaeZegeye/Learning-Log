import styled from "styled-components";

import Logo from "./Logo";
import MainNav from "./MainNav";

const StyledAside = styled.aside`
  background-color: var(--color-grey-100);
  border-right: 2px solid var(--color-grey-400);
  padding: 4.4rem 3.4rem 6.2rem;
  grid-row: 1 / -1;

  display: flex;
  flex-direction: column;
  gap: 3.2rem;
`;

export default function Sidebar() {
  return (
    <StyledAside>
      <Logo />
      <MainNav />
    </StyledAside>
  );
}
