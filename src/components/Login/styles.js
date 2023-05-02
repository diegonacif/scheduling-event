import styled from "styled-components";

export const Container = styled.section `
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100vw;
  height: 100vh;
  background-color: var(--gray-200);
  color: var(--gray-800);
  padding: 0 0.75rem;
  font-family: var(--font-primary);
`
export const Content = styled.div `
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: min(100%, 25rem);
  min-height: max-content;
  height: max-content;
  border-radius: 4px;
  padding: 2rem 0.75rem;
  background: var(--gray-800);
  background: linear-gradient(135deg, var(--gray-700) 0%, var(--green-600) 50%, var(--green-400) 100%);

  /* -webkit-box-shadow: 2px 2px 10px 0px #000000;  */
  box-shadow:  11px 11px 22px var(--gray-400),
              -11px -11px 22px #ffffff;

  button {
    background-color: transparent;
    border: 0;
    color: var(--gray-100);
    cursor: pointer;
    font-family: var(--font-primary);
  }

  .register-button {
    margin-top: 0.75rem;
    font-size: var(--text-sm);
  }

  .close-button {
    position: absolute;
    top: 1rem;
    right: 1rem;
  }

  .FormRoot {
    width: 100%;
    max-width: 15rem;

    .FormField {
      width: 100%;
      
      .FormLabel {
        font-size: 0.875rem;
        font-size: var(--text-md);
        color: var(--gray-100);
      }

      .Input {
        width: 100%;
        height: 2rem;
        border: 1px solid var(--gray-700);
        border-radius: 4px;
        margin-top: .25rem;
        background-color: #2C2C2C50;
        color: var(--gray-100);
        padding: 0 0.25rem;
      }

      & + .FormField {
        margin-top: 1.25rem;
      }
    }

    .Button {
      margin-top: 1.25rem;
      width: 100%;
      height: 2rem;
      background-color: var(--gray-100);
      border: 0;
      border-radius: 4px;
      font-weight: 600;
      font-size: var(--text-md);
      color: var(--green-600);
      cursor: pointer;
    }
  }
`
