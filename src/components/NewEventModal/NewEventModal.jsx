import * as Dialog from "@radix-ui/react-dialog";
import { CloseButton, Content, Overlay } from "./styles";
import { Loading } from "../Loading/Loading";
import { addDoc, collection } from "firebase/firestore";
import { db } from "../../services/firebase";
import { useForm } from "react-hook-form";
import { useContext } from "react";
import { AuthEmailContext } from "../../contexts/AuthEmailProvider";
import { useState } from "react";

export const NewEventModal = ({ getEvents, setOpen }) => {
  const { register, handleSubmit, reset } = useForm();
  const { userId } = useContext(AuthEmailContext);
  const [loading, setLoading] = useState(false);

  async function handleCreateEvent(data) {
    const event = {
      event: data.event,
      category: data.category,
      startDateTimeEvent: data.startDateTimeEvent,
      endDateTimeEvent: data.endDateTimeEvent,
      location: data.location,
      description: data.description,
    };

    try {
      setLoading(true);
      const docRef = await addDoc(collection(db, userId), event);
      console.log("Evento adicionado com sucesso", docRef.id);
      getEvents();
      reset();
      setOpen(false);
      setLoading(false);
    } catch (error) {
      console.log("Erro ao adiconar o evento", error);
    }
  }

  return (
    <Dialog.Portal>
      <Overlay />
      <Content>
        <Dialog.Title>Novo Evento</Dialog.Title>
        <CloseButton>X</CloseButton>
        <form onSubmit={handleSubmit((data) => handleCreateEvent(data))}>
          <input
            type="text"
            placeholder="Nome do Evento"
            {...register("event", { required: true })}
          />
          <select
            {...register("category", { required: true })}
            placeholder="Categoria">
            <option value="">--Selecione a Categoria--</option>
            <option value="festa">festa</option>
            <option value="cultura">cultura</option>
            <option value="corporativo">corporativo</option>
            <option value="esportivo">esportivo</option>
            <option value="caridade">caridade</option>
            <option value="religioso">religioso</option>
            <option value="moda">moda</option>
            <option value="saúde">saúde</option>
            <option value="viagem">viagem</option>
            <option value="gastronomia">gastronomia</option>
            <option value="tecnologia">tecnologia</option>
            <option value="educação">educação</option>
          </select>

          <input
            type="datetime-local"
            placeholder="Data"
            {...register("startDateTimeEvent", { required: true })}
          />
          <input
            type="datetime-local"
            placeholder="Horário de término"
            {...register("endDateTimeEvent", { required: true })}
          />
          <input
            type="text"
            placeholder="Local"
            {...register("location", { required: true })}
          />
          <input
            type="text"
            placeholder="Descrição"
            {...register("description")}
          />
          {loading ? <Loading /> : <button type="submit">Criar Evento</button>}
        </form>
      </Content>
    </Dialog.Portal>
  );
};
