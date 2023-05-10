import styled from "styled-components";


export const RegisterEvent = styled.div`
  max-width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  /* margin: 2rem 5rem; */
`;

export const NewEventWrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: start;
  width: 100%;
  min-width: 48rem;
  height: 0;
  /* padding: 0 1.5rem; */

  .event-wrapper-inner {
    position: relative;
    right: 0.4375rem;
    bottom: 0.4375rem;
    width: fit-content;
    height: fit-content;
  }
`;
export const EventsContainer = styled.main`
  position: relative;
  display: flex;
  flex-direction: column;
  /* align-items: center; */
  justify-content: center;
  width: 100vw;
  margin: 0 auto;
  padding: 1.5rem 1.5rem;
  overflow-x: auto;

  /* box-sizing: content-box; */
`;

export const EventsTable = styled.table`
  width: 100%;
  min-width: 48rem;
  border-collapse: separate;
  border-spacing: 0 0.5rem;
  /* margin-top: 1.5rem; */
  /* margin-bottom: 4rem; */

  th {
    background-color: var(--red) ;
    color: var(--gray-100);
    padding: 1.25rem 2rem;
    text-align: center;

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
    text-align: center;

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
  /* position: absolute;
  right: 0;
  bottom: 0;
  transform: translateY(25%); */
  display: flex;
  align-items: center;
  justify-content: center;
  width: 2.75rem;
  height: 2.75rem;
  border: 0;
  color: var(--gray-100);
  background-color: var(--red);
  font-weight: 600;
  font-size: var(--text-lg);
  border-radius: 50%;
  filter: drop-shadow(2px 2px 3px #00000080);
  cursor: pointer;
  transition: background-color 0.1s, color 0.1s;
  /* margin-left: auto; */
  /* margin-top: 2rem; */

  &:hover {
    background-color: var(--orange);
    /* color: var(--red); */
    transition: background-color 0.3s, color 0.3s;
  }
`;
