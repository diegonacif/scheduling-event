import { HeaderContainer, HeaderContent } from "./styles";
import { CalendarX , SignOut} from "phosphor-react";


export const Header = () => {
  return (
    <HeaderContainer>
      <HeaderContent>
        <CalendarX size={60} />
        <strong>Create and Schedule Your Event</strong>
        <SignOut size={35}/>
      </HeaderContent>
      
    </HeaderContainer>
  );
}
