import styled from "styled-components";

export const Container = styled.section `
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100vw;
  height: 100vh;
  background-color: var(--gray-900);
  color: var(--gray-100);
  padding: 0 0.75rem;
  font-family: sans-serif;
`
export const Content = styled.div `
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: min(100%, 25rem);
  min-height: 17rem;
  height: max-content;
  border-radius: 4px;
  padding: 0.75rem;
  background: rgb(63,99,221);
  background: linear-gradient(135deg, rgba(63,99,221,1) 0%, rgba(141,78,198,1) 100%);

  .FormRoot {
    width: 100%;
    max-width: 15rem;

    .FormField {
      width: 100%;
      
      .FormLabel {
        font-size: 0.875rem;
      }

      .Input {
        width: 100%;
        height: 2rem;
        border: 1px solid var(--gray-700);
        border-radius: 4px;
        margin-top: .25rem;
        background-color: #1a328150;
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
      font-weight: bold;
      color: rgba(141,78,198,1);
    }
  }
`
