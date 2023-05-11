import * as Dialog from "@radix-ui/react-dialog";
import { Header } from "../Header/Header";
import {
  EventsContainer,
  EventsTable,
  NewEventButton,
  RegisterEvent,
  NewEventWrapper,
  SearchForm,
} from "./styles";

import { db } from "../../services/firebase";
import { NewEventModal } from "../NewEventModal/NewEventModal";
import { useContext, useEffect, useState } from "react";
import { collection, getDocs, query, where } from "firebase/firestore";
import { EditEventModal } from "../EditEventModal/EditEventModal";
import { AuthEmailContext } from "../../contexts/AuthEmailProvider";
import { MagnifyingGlass, Plus } from "phosphor-react";

export const Event = () => {
  const [events, setEvents] = useState([]);
  const [open, setOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const { userId } = useContext(AuthEmailContext);

  const eventCollectionRef = collection(db, userId);
  const q = query(eventCollectionRef, where("category", "==", searchTerm));

  const getEvents = async () => {
    const data = await getDocs(eventCollectionRef);
    setEvents(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
  };

  useEffect(() => {
    getEvents();
  }, []);

  useEffect(() => {
    const handleSearchEvents = async () => {
      // event.preventDefault();
      if (searchTerm.trim() === "") {
        getEvents();
      } else {
        const querySnapshot = await getDocs(q);
        setEvents(
          querySnapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id }))
        );
      }
    };

    handleSearchEvents();
  }, [searchTerm])
  
  const handleSearchEvents = async (event) => {
    event.preventDefault();
    if (searchTerm.trim() === "") {
      getEvents();
    } else {
      const querySnapshot = await getDocs(q);
      setEvents(
        querySnapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id }))
      );
    }
  };

  function getsearchTerm(e) {
    console.log(e.target.value);
    setSearchTerm(e.target.value);
  }

  return (
    <>
      <Header />
      <SearchForm>
        <div className="search-input-wrapper">
          <input
            type="text"
            value={searchTerm}
            placeholder="Busca por categoria"
            onChange={(e) => getsearchTerm(e)}
          />
          <MagnifyingGlass size={24} weight="bold" />
        </div>
      </SearchForm>
      <EventsContainer>
        <NewEventWrapper>
          <div className="event-wrapper-inner">
            <Dialog.Root open={open} onOpenChange={setOpen}>
              <Dialog.Trigger asChild>
                <NewEventButton>
                  <Plus size={24} weight="bold" />
                </NewEventButton>
              </Dialog.Trigger>
              <NewEventModal getEvents={getEvents} setOpen={setOpen} />
            </Dialog.Root>
          </div>
        </NewEventWrapper>
        {events.length > 0 ? (
          <EventsTable>
            <thead>
              <tr>
                <th>Evento</th>
                <th>Categoria</th>
                <th>Início</th>
                <th>Término</th>
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
                  // second: "numeric",
                };
                const myStartDate = new Date(event.startDateTimeEvent);
                const myEndDate = new Date(event.endDateTimeEvent);
                const dateFormatter = new Intl.DateTimeFormat("pt-BR", options);
                const formattedStartDate = dateFormatter.format(myStartDate);
                const formattedEndDate = dateFormatter.format(myEndDate);

                return (
                  <tr key={event.id}>
                    <td>
                      <EditEventModal event={event} getEvents={getEvents} />
                    </td>
                    <td>{event.category}</td>
                    <td>{formattedStartDate}h</td>
                    <td>{formattedEndDate}h</td>
                  </tr>
                );
              })}
            </tbody>
          </EventsTable>
        ) : (
          <RegisterEvent>
            <strong>Olá, você ainda não tem nenhum evento cadastrado.</strong>
            <span>Crie seus Eventos e Organize sua agenda</span>
          </RegisterEvent>
        )}
      </EventsContainer>
    </>
  );
};
