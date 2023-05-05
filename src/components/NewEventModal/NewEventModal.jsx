import * as Dialog from "@radix-ui/react-dialog";
import { CloseButton, Content, Overlay } from "./styles";

import {  addDoc,collection} from "firebase/firestore"
import { db } from "../../services/firebase";
import {useForm} from "react-hook-form"

export const NewEventModal = () => {
const { register, handleSubmit }= useForm()


 async function handleCreateEvent(data){
  const event = {
    event:data.event,
    category:data.category,
    startDateTimeEvent:data.startDateTimeEvent,
    endDateTimeEvent:data.endDateTimeEvent,
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

  return (
    <Dialog.Portal>
      <Overlay />
      <Content>
        <Dialog.Title>Novo Evento</Dialog.Title>
        <CloseButton>X</CloseButton>
        <form onSubmit={handleSubmit((data)=>handleCreateEvent(data))}>
          <input type="text"  placeholder="Nome do Evento"  {...register("event",{required:true})}/>
          <input type="text"  placeholder="Categoria" {...register("category",{required:true})}/>
          <input type="datetime-local"  placeholder="Data" {...register("startDateTimeEvent",{required:true})}/>
          <input type="datetime-local"  placeholder="Horário de término" {...register("endDateTimeEvent",{required:true})}/>
          <input type="text"  placeholder="Local"  {...register("location",{required:true})} /> 
          <input type="text"  placeholder="Descrição" {...register("description")} /> 
          <button type="submit" >Criar Evento</button>
        </form>
      </Content>
    </Dialog.Portal>
  );
};
