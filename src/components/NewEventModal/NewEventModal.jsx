import * as Dialog from "@radix-ui/react-dialog";
import { CloseButton, Content, Overlay } from "./styles";

export const NewEventModal = () => {
  return (
    <Dialog.Portal>
      <Overlay />
      <Content>
        <Dialog.Title>Novo Evento</Dialog.Title>
        <CloseButton>X</CloseButton>
        <form>
          <input type="text" placeholder="Nome do Evento" required />
          <input type="text" placeholder="Categoria" required />
          <input type="date" placeholder="Data" required />
          <input type="time" placeholder="Horário de início" required />
          <input type="time" placeholder="Horário de término" />
          <input type="text" placeholder="Local" required />
          <input type="text" placeholder="Descrição" />

          <button type="submit">Criar Evento</button>
        </form>
      </Content>
    </Dialog.Portal>
  );
};
