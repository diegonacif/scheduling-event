import * as Dialog from "@radix-ui/react-dialog";
import { Overlay, Content, CloseButton, EditButton } from "./styles";
import { db } from "../../services/firebase";
import { doc, deleteDoc, updateDoc } from "firebase/firestore";
import { useForm } from "react-hook-form";
import { useState } from "react";

export const EditEventModal = ({ event, getEvents }) => {
  console.log(event);
  const { register, handleSubmit } = useForm();
  const [openEditModal, setOpenEditModal] = useState(false);

  async function handleUpdateEvent(data) {
    const newEvent = {
      event: data.event,
      category: data.category,
      startDateTimeEvent: data.startDateTimeEvent,
      endDateTimeEvent: data.endDateTimeEvent,
      location: data.location,
      description: data.description,
    };

    try {
      const docRef = doc(db, "events", event.id);
      await updateDoc(docRef, newEvent);
      console.log("Evento atualizado com sucesso!");
      getEvents();
      setOpenEditModal(false);
    } catch (error) {
      console.log("Erro ao atualizar o evento", error);
    }
  }

  async function handleDeleteEvent(id) {
    console.log(id);
    const eventDoc = doc(db, "events", id);
    await deleteDoc(eventDoc);
    getEvents();
    setOpenEditModal(false);
  }
  return (
    <Dialog.Root open={openEditModal} onOpenChange={setOpenEditModal}>
      <Dialog.Trigger asChild>
        <EditButton>{event.event}</EditButton>
      </Dialog.Trigger>
      <Dialog.Portal>
        <Overlay />
        <Content>
          <Dialog.Title>Evento</Dialog.Title>
          <CloseButton>X</CloseButton>
          <form onSubmit={handleSubmit((data) => handleUpdateEvent(data))}>
            <input
              type="text"
              placeholder="Nome do Evento"
              {...register("event", { required: true })}
              defaultValue={event.event}
            />
            <input
              type="text"
              placeholder="Categoria"
              {...register("category", { required: true })}
              defaultValue={event.category}
            />
            <input
              type="datetime-local"
              placeholder="Data/Horário de início"
              {...register("startDateTimeEvent", { required: true })}
              defaultValue={event.startDateTimeEvent}
            />
            <input
              type="datetime-local"
              placeholder="Data/Horário de término"
              {...register("endDateTimeEvent", { required: true })}
              defaultValue={event.endDateTimeEvent}
            />
            <input
              type="text"
              placeholder="Local"
              {...register("location", { required: true })}
              defaultValue={event.location}
            />
            <input
              type="text"
              placeholder="Descrição"
              {...register("description")}
              defaultValue={event.description}
            />

            <button type="submit">Editar Evento</button>
          </form>
          <button onClick={() => handleDeleteEvent(event.id)}>deletar</button>
        </Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
};
