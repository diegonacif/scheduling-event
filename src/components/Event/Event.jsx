import * as Dialog from "@radix-ui/react-dialog";
import { Header } from "../Header/Header";
import {
  EventsContainer,
  EventsTable,
  NewEventButton,
  RegisterEvent,
} from "./styles";


import { NewEventModal } from "../NewEventModal/NewEventModal";


export const Event = () => {



  return (
    <>
      <Header />
      <RegisterEvent>
        <strong>
          Olá Rafaella, você ainda não tem nenhum evento cadastrado.
        </strong>
        <span>Crie seus Eventos e Organize sua agenda</span>
      </RegisterEvent>
      <EventsContainer>
        <EventsTable>
          <thead>
            <tr>
              <th>Evento</th>
              <th>Categoria</th>
              <th>Data</th>
              <th>Horário</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                Festa do Pijama  
              </td>
              <td>Festa</td>
              <td>12/02/2023</td>
              <td>14:00</td>
            </tr>
            <tr>
              <td>
                Seminário Trabalho  
              </td>
              <td>Corporativo</td>
              <td>13/02/2023</td>
              <td>14:00</td>
            </tr>
            <tr>
              <td>
                Show John Mayer  
              </td>
              <td>Entretenimento</td>
              <td>20/02/2023</td>
              <td>14:00</td>
            </tr>
            <tr>
              <td>
                Formatura Daniel  
              </td>
              <td>Social</td>
              <td>12/02/2023</td>
              <td>14:00</td>
            </tr>
            <tr>
              <td>
                Casamento D e F  
              </td>
              <td>Social</td>
              <td>12/02/2023</td>
              <td>14:00</td>
            </tr>
          </tbody>
        </EventsTable>

        <Dialog.Root>
          <Dialog.Trigger asChild>
            <NewEventButton>Criar Evento</NewEventButton>
          </Dialog.Trigger>
          <NewEventModal />
        </Dialog.Root>
      </EventsContainer>
    </>
  );
};
