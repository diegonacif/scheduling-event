import * as Dialog from "@radix-ui/react-dialog";
import { Overlay, Content, CloseButton, EditButton, Button } from "./styles";
import { db } from "../../services/firebase";
import { doc, deleteDoc, updateDoc } from "firebase/firestore";
import { useForm } from "react-hook-form";
import { useContext, useState } from "react";
import { AuthEmailContext } from "../../contexts/AuthEmailProvider";
import { Trash } from "phosphor-react";
import { Loading } from "../Loading/Loading";

export const EditEventModal = ({ event, getEvents }) => {
  // console.log(event);
  const { register, handleSubmit } = useForm();
  const [openEditModal, setOpenEditModal] = useState(false);
  const [loading, setLoading] = useState(false);

  const { userId } = useContext(AuthEmailContext);

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
      setLoading(true);
      const docRef = doc(db, userId, event.id);
      await updateDoc(docRef, newEvent);
      console.log("Evento atualizado com sucesso!");
      getEvents();
      setLoading(false);
      setOpenEditModal(false);
    } catch (error) {
      console.log("Erro ao atualizar o evento", error);
    }
  }

  async function handleDeleteEvent(id) {
    const confirmed = window.confirm(
      "Tem certeza que deseja deletar este evento"
    );
    if (!confirmed) {
      return;
    }
    setLoading(true);
    const eventDoc = doc(db, userId, id);
    await deleteDoc(eventDoc);
    getEvents();
    setOpenEditModal(false);
    setLoading(false);
  }
  return (
    <Dialog.Root open={openEditModal} onOpenChange={setOpenEditModal}>
      <Dialog.Trigger asChild>
        <EditButton>{event.event}</EditButton>
      </Dialog.Trigger>
      <Dialog.Portal>
        <Overlay />
        <Content>
          <div className="MenuModal">
            <Dialog.Title>Evento</Dialog.Title>
            {loading ? (
              <Loading />
            ) : (
              <button onClick={() => handleDeleteEvent(event.id)}>
                <Trash size={22} />
              </button>
            )}
          </div>
          <CloseButton>X</CloseButton>
          <form onSubmit={handleSubmit((data) => handleUpdateEvent(data))}>
            <input
              type="text"
              placeholder="Nome do Evento"
              {...register("event", { required: true })}
              defaultValue={event.event}
            />
            <select
              {...register("category", { required: true })}
              placeholder="Categoria"
              defaultValue={event.category}>
              <option value="">--Selecione a Categoria--</option>
              <option value="festa">Festa</option>
              <option value="cultura">Cultura</option>
              <option value="corporativo">Corporativo</option>
              <option value="esportivo">Esportivo</option>
              <option value="caridade">Caridade</option>
              <option value="religioso">Religioso</option>
              <option value="moda">Moda</option>
              <option value="saúde">Saúde</option>
              <option value="viagem">Viagem</option>
              <option value="gastronomia">Gastronomia</option>
              <option value="tecnologia">Tecnologia</option>
              <option value="educação">Educação</option>
              <option value="beleza">Beleza</option>
            </select>
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
            {loading ? (
              <Loading />
            ) : (
              <Button type="submit">Editar Evento</Button>
            )}
          </form>
        </Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
};
