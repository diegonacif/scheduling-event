import styled from "styled-components";


export const RegisterEvent = styled.div`

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 2rem 5rem;
  
`;
export const EventsContainer = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  max-width: 1120px;
  margin: 0 auto;
  padding: 0 1.5rem;
 
  box-sizing: content-box;
`;

export const EventsTable = styled.table`
  width: 100%;
  border-collapse: separate;
  border-spacing: 0 0.5rem;
  margin-top: 1.5rem;
  margin-bottom: 1rem;

  th {
    background-color: var(--red) ;
    padding: 1.25rem 2rem;
    text-align: left;

    &:first-child {
      border-top-left-radius: 8px;
      padding: 1.5rem;
    }

    &:last-child {
      border-top-right-radius: 8px;
      padding-right: 1.5rem;
    }
  }

  td {
    padding: 1.25rem 2rem;
    background: var(--rose);

    &:first-child {
      border-top-left-radius: 6px;
      border-bottom-left-radius: 6px;

      svg {
        vertical-align: middle;
      }
    }

    &:last-child {
      border-top-right-radius: 6px;
      border-bottom-right-radius: 6px;
    }
  }
`;

export const NewEventButton = styled.button`
  height: 50px;
  border: 0;
  background: linear-gradient(135deg, var(--gray-700) 0%, var(--red) 50%, var(--orange) 100%);
  
  font-weight: bold;
  padding: 0 1.25rem;
  border-radius: 6px;
  cursor: pointer;
  margin-left: auto;
  margin-bottom: 0.8rem;

  &:hover {
    background: var(--green-600);
    transition: background-color 0.2s;
  }
`;
