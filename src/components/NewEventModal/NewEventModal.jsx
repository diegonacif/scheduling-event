import * as Dialog from "@radix-ui/react-dialog";
import { CloseButton, Content, Overlay } from "./styles";

import {  addDoc,collection} from "firebase/firestore"
import { db } from "../../services/firebase";
import {useForm} from "react-hook-form"

export const NewEventModal = () => {
const {register,handleSubmit}= useForm()


 async function handleCreateEvent(data){
  const event = {
    event:data.event,
    category:data.category,
    startDateEvent:data.startDateEvent,
    startTimeEvent:data.startTimeEvent,
    endTimeEvent:data.endTimeEvent,
    location:data.location,
    description:data.description,
  };

  try {
    const docRef = await addDoc(collection(db,"events"),event)
    console.log("Evento adicionado com sucesso", docRef.id)
  } catch(error){
    console.log("Erro ao adiconar o evento",error)
  }
 }

 addDoc("events", {id: "teste"})
  return (
    <Dialog.Portal>
      <Overlay />
      <Content>
        <Dialog.Title>Novo Evento</Dialog.Title>
        <CloseButton>X</CloseButton>
        <form onSubmit={handleSubmit((data)=>handleCreateEvent(data))}>
          <input type="text"  placeholder="Nome do Evento" ref={ register({required:true})} name="event"/>
          <input type="text"  placeholder="Categoria" ref={ register({required:true})} name="category"/>
          <input type="date"  placeholder="Data" ref={ register({required:true})} name="startDateEvent"/>
          <input type="time"  placeholder="Horário de início" ref={ register({required:true})} name="startTimeEvent"/>
          <input type="time"  placeholder="Horário de término" name=" endTimeEvent"/>
          <input type="text"  placeholder="Local" ref={ register({required:true})} name="location"/>
          <input type="text"  placeholder="Descrição" name="description"/>
          <button type="submit" >Criar Evento</button>
        </form>
      </Content>
    </Dialog.Portal>
  );
};
