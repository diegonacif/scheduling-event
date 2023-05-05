import { useContext } from "react";
import { HeaderContainer, HeaderContent } from "./styles";
import { CalendarX , SignOut} from "phosphor-react";
import { AuthEmailContext } from "../../contexts/AuthEmailProvider";


export const Header = () => {
  const { logoutUser } = useContext(AuthEmailContext);
  return (
    <HeaderContainer>
      <HeaderContent>
        <CalendarX size={60} />
        <strong>Create and Schedule Your Event</strong>
        <SignOut onClick={() => logoutUser()} size={35}/>
      </HeaderContent>
      
    </HeaderContainer>
  );
}
