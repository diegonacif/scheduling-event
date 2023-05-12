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
import { Loading } from "../Loading/Loading";

export const Event = () => {
  const [events, setEvents] = useState([]);
  const [open, setOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const { userId, authLoading } = useContext(AuthEmailContext);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(true);

  const eventCollectionRef = userId ? collection(db, userId) : null;
  const q = query(
    eventCollectionRef,
    where("category", ">=", searchTerm.toLowerCase()),
    where("category", "<=", searchTerm.toLowerCase() + "uf8ff")
  );

  const getEvents = async () => {
    const data = await getDocs(eventCollectionRef);
    const eventsList = data.docs.map((doc) => ({ ...doc.data(), id: doc.id }));

    setEvents(eventsList);
    setError("");
    setLoading(false);
  };

  useEffect(() => {
    setLoading(true);
    getEvents();
  }, [userId]);

  const handleSearchEvents = async (term) => {
    console.log({ term, isTrue: !term.trim() });
    if (!term.trim()) {
      await getEvents();
    } else {
      const querySnapshot = await getDocs(q);
      const filteredEvents = querySnapshot.docs
        .map((doc) => ({ ...doc.data(), id: doc.id }))
        .filter((event) =>
          event.category.toLowerCase().includes(term.toLowerCase())
        );
      if (filteredEvents.length === 0) {
        setEvents([]);
        setError("Não há eventos nesta categoria.");
      } else {
        setEvents(filteredEvents);
        setError("");
      }
    }
  };

  function getsearchTerm(e) {
    handleSearchEvents(e.target.value.toLowerCase());
    setSearchTerm(e.target.value.toLowerCase());
  }

  return (
    <>
      <Header />
      {!eventCollectionRef ? (
        <span>Loading</span>
      ) : (
        <>
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
            {error !== "" ? (
              <RegisterEvent>
                <strong>{error}</strong>
              </RegisterEvent>
            ) : loading ? (
              <div className="LoadingField">
                <Loading />
              </div>
            ) : events.length > 0 ? (
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
                    const dateFormatter = new Intl.DateTimeFormat(
                      "pt-BR",
                      options
                    );
                    const formattedStartDate =
                      dateFormatter.format(myStartDate);
                    const formattedEndDate = dateFormatter.format(myEndDate);

                    const category = event.category;
                    const categoryFirstLetterUpperCase =
                      category.charAt(0).toUpperCase() + category.slice(1);

                    return (
                      <tr key={event.id}>
                        <td>
                          <EditEventModal event={event} getEvents={getEvents} />
                        </td>
                        <td>{categoryFirstLetterUpperCase}</td>
                        <td>{formattedStartDate}h</td>
                        <td>{formattedEndDate}h</td>
                      </tr>
                    );
                  })}
                </tbody>
              </EventsTable>
            ) : (
              <RegisterEvent>
                <strong>
                  Olá, você ainda não tem nenhum evento cadastrado.
                </strong>
                <span>Crie seus Eventos e Organize sua agenda</span>
              </RegisterEvent>
            )}
          </EventsContainer>
        </>
      )}
    </>
  );
};
