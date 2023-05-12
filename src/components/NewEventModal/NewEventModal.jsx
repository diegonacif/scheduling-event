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
