import styled from "styled-components";

export const EventsContainer = styled.main`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 1120px;
  margin: 1rem 0 auto;
  padding: 0 1.5rem;
  background-color: var(--gray-500);
`;

export const EventsTable = styled.table`
  width: 100%;
  border-collapse: separate;
  border-spacing: 0 0.5rem;
  margin-top: 1.5rem;
  margin-bottom: 1rem;

  th {
    background-color: var(--gray-700);
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
    background: var(--gray-400);

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
  background-color: var(--gray-100);
  color: rgba(141, 78, 198, 1);
  font-weight: bold;
  padding: 0 1.25rem;
  border-radius: 6px;
  cursor: pointer;
  margin-left: auto;

  &:hover {
    background: var(--gray-200);
    transition: background-color 0.2s;
  }
`;
