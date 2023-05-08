import * as Dialog from "@radix-ui/react-dialog";
import { Header } from "../Header/Header";
import {
  EventsContainer,
  EventsTable,
  NewEventButton,
  RegisterEvent,
} from "./styles";

import { db } from "../../services/firebase";
import { NewEventModal } from "../NewEventModal/NewEventModal";
import { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { EditEventModal } from "../EditEventModal/EditEventModal";

export const Event = () => {
  const [events, setEvents] = useState([]);
  const [open, setOpen] = useState(false);
  const eventCollectionRef = collection(db, "events");

  const getEvents = async () => {
    const data = await getDocs(eventCollectionRef);
    setEvents(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
  };

  useEffect(() => {
    getEvents();
  }, []);

  return (
    <>
      <Header />
      <EventsContainer>
        <EventsTable>
          {events.length > 0 ? (
            <>
              <thead>
                <tr>
                  <th>Evento</th>
                  <th>Categoria</th>
                  <th>Data e Hora de Início</th>
                  <th>Data e Hora do Término</th>
                </tr>
              </thead>
              <tbody>
                {events.map((event) => {
                  const options = {
                    year: "numeric",
                    month: "numeric",
                    day: "numeric",
                    hour: "numeric",
                    minute: "numeric",
                    second: "numeric",
                  };
                  const myStartDate = new Date(event.startDateTimeEvent);
                  const myEndDate = new Date(event.endDateTimeEvent);
                  const dateFormatter = new Intl.DateTimeFormat(
                    "pt-BR",
                    options
                  );
                  const formattedStartDate = dateFormatter.format(myStartDate);
                  const formattedEndDate = dateFormatter.format(myEndDate);

                  return (
                    <tr key={event.id}>
                      <td>
                        <EditEventModal event={event} getEvents={getEvents} />
                      </td>
                      <td>{event.category}</td>
                      <td>{formattedStartDate}</td>
                      <td>{formattedEndDate}</td>
                    </tr>
                  );
                })}
              </tbody>
            </>
          ) : (
            <RegisterEvent>
              <strong>
                Olá Rafaella, você ainda não tem nenhum evento cadastrado.
              </strong>
              <span>Crie seus Eventos e Organize sua agenda</span>
            </RegisterEvent>
          )}
        </EventsTable>
        <Dialog.Root open={open} onOpenChange={setOpen}>
          <Dialog.Trigger asChild>
            <NewEventButton>Criar Evento</NewEventButton>
          </Dialog.Trigger>
          <NewEventModal getEvents={getEvents} setOpen={setOpen} />
        </Dialog.Root>
      </EventsContainer>
    </>
  );
};
