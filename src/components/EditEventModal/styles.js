import * as Dialog from "@radix-ui/react-dialog";
import styled from "styled-components";

export const Overlay = styled(Dialog.Overlay)`
  position: fixed;
  width: 100vw;
  height: 100vh;
  inset: 0;
  background: rgba(0, 0, 0, 0.75);
`;

export const Content = styled(Dialog.Content)`
  display: flex;
  flex-direction: column;
  margin-top: 1rem;
  min-width: 32rem;
  border-radius: 6px;
  padding: 2.5rem 3rem;
  color: var(--gray-100);
  background: linear-gradient(
    135deg,
    var(--gray-700) 0%,
    var(--red) 50%,
    var(--orange) 100%
  );

  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  form {
    margin-top: 2rem;
    display: flex;
    flex-direction: column;
    gap: 1rem;

    input {
      border-radius: 6px;
      border: 0;
      padding: 1rem;
      background-color: var(--gray-100);

      &::placeholder {
        color: var(--gray-900);
        position: absolute;
        left: 1rem;
        top: 50%;
        transform: translateY(-50%);
      }
    }
  }
`;
export const Button = styled.button`
  height: 58px;
  border: 0;
  background: linear-gradient(to right, var(--orange), var(--gray-700));
  color: var(--gray-100);
  font-weight: bold;
  border-radius: 6px;
  margin-top: 1.5rem;
  cursor: pointer;
  min-width: 5rem;

  &:disabled {
    opacity: 0.6;
    cursor: pointer;
  }

  &:not(:disabled):hover {
    background: var(--green-600);
    transition: background-color 0.2s;
  }
`;
export const EditButton = styled.button`
  border: none;
  background-color: transparent;
  text-decoration: none;
  cursor: pointer;
  font-size: var(--text-md);

  &:hover {
    border-bottom: 1px solid var(--green-600);
  }
`;

export const CloseButton = styled(Dialog.Close)`
  position: absolute;
  background: transparent;
  border: 0;
  top: 1.5rem;
  right: 1.5rem;
  line-height: 0;
  cursor: pointer;
  color: var(--gray-700);
`;
