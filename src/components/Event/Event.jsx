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


export const Event = () => {
const[events, setEvents] = useState([]);
const eventCollectionRef = collection(db, "events");
const [refresh, setRefresh] = useState(false);

useEffect(()=> {
  const getEvents = async () => {
    const data = await getDocs(eventCollectionRef)
    setEvents(data.docs.map((doc) => ({...doc.data(), id:doc.id})))
  };
  getEvents();
},[refresh]);


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
            {events.map(event => { return(
              <tr key={event.id}>
              <td>
                {event.event}
              </td>
              <td>{event.category}</td>
              <td>{event.startDateTimeEvent}</td>
              <td>{event.endDateTimeEvent}</td>
            </tr>
            )
            })}
           
           
          </tbody>
        </EventsTable>

        <Dialog.Root>
          <Dialog.Trigger asChild>
            <NewEventButton>Criar Evento</NewEventButton>
          </Dialog.Trigger>
          <NewEventModal setRefresh={setRefresh} />
        </Dialog.Root>
      </EventsContainer>
    </>
  );
};
