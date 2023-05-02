import styled from "styled-components";

export const HeaderContainer = styled.header`
  background: var(--gray-700);
  padding: 2.5rem 0 7.5rem;
`;

export const HeaderContent = styled.div`
  width: 100%;
  max-width: 1120px;
  margin: 0 auto;
  padding: 0 1.5rem;

  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;

  strong {
    font-size: large;
  }
`;
