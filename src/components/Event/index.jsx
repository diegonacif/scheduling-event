import { Header } from "./components";
import { EventsContainer, EventsTable, NewEventButton } from "./styles";
import { Trash, NotePencil } from "phosphor-react";

export function Event() {
  return (
    <div>
      <Header />
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
                Festa do Pijama <NotePencil size={18} /> <Trash size={18} />
              </td>
              <td>Festa</td>
              <td>12/02/2023</td>
              <td>14:00</td>
            </tr>
            <tr>
              <td>
                Seminário Trabalho <NotePencil size={18} /> <Trash size={18} />{" "}
              </td>
              <td>Corporativo</td>
              <td>13/02/2023</td>
              <td>14:00</td>
            </tr>
            <tr>
              <td>
                Show John Mayer <NotePencil size={18} /> <Trash size={18} />
              </td>
              <td>Entretenimento</td>
              <td>20/02/2023</td>
              <td>14:00</td>
            </tr>
            <tr>
              <td>
                Formatura Daniel <NotePencil size={18} /> <Trash size={18} />
              </td>
              <td>Social</td>
              <td>12/02/2023</td>
              <td>14:00</td>
            </tr>
            <tr>
              <td>
                Casamento D e F <NotePencil size={18} /> <Trash size={18} />
              </td>
              <td>Social</td>
              <td>12/02/2023</td>
              <td>14:00</td>
            </tr>
          </tbody>
        </EventsTable>
        <NewEventButton>Criar Evento</NewEventButton>
      </EventsContainer>
    </div>
  );
}
