import styled from "styled-components";

export const Container = styled.section `
  display: flex;
  flex-direction: column;
  row-gap: 0.5rem;
  align-items: center;
  justify-content: center;
  width: 100vw;
  height: 100vh;
  background-color: var(--gray-200);
  color: var(--gray-800);
  padding: 0 0.75rem;
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
  background: linear-gradient(
    135deg, var(--gray-700) 0%, 
    var(--red) 65%, 
    var(--orange) 100%
  );

  /* -webkit-box-shadow: 2px 2px 10px 0px #000000;  */
  box-shadow:  11px 11px 22px var(--gray-400),
              -11px -11px 22px #ffffff;

  button {
    background-color: transparent;
    border: 0;
    color: var(--gray-100);
    cursor: pointer;
  }

  .not-registered-button {
    margin-top: 1rem;
    font-size: var(--text-sm);
    font-weight: 500;
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
        margin-left: 0.125rem;
      }

      .FormInput {
        position: relative;
        margin-top: .25rem;

        .Input {
          width: 100%;
          height: 2rem;
          font-size: var(--text-sm);
          border: 0;
          border-radius: 4px;
          background-color: #2C2C2C60;
          color: var(--gray-100);
          padding: 0 0.25rem;

          &.password-input {
            padding-right: 2.75rem;
          }

          &:focus-visible {
            outline: 2px solid var(--orange);
          }
        }

        .error-message {
          position: absolute;
          right: 0.25rem;
          bottom: -1.125rem;
          font-size: var(--text-xs);
          font-weight: 500;
          color: var(--gray-300);
        }

        svg {
          position: absolute;
          top: 50%;
          right: 0.5rem;
          transform: translateY(-50%);
          color: var(--gray-400);
          cursor: pointer;
        }
      }


      & + .FormField {
        margin-top: 1.25rem;
      }
    }

    .Button {
      margin-top: 1.75rem;
      width: 100%;
      height: 2rem;
      background-color: var(--gray-100);
      border: 0;
      border-radius: 4px;
      font-weight: 600;
      font-size: var(--text-md);
      color: var(--red);
      cursor: pointer;
      transition: filter 0.3s;

      &:disabled {
        /* background-color: #F2F2F250; */
        cursor: not-allowed;
        transition: filter 0.3s;
        filter: opacity(0.4)
      }
    }
  }
`
