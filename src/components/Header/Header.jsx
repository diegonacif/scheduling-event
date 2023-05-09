import { useContext } from "react";
import { HeaderContainer, HeaderContent } from "./styles";
import { CalendarX , SignOut} from "phosphor-react";
import { AuthEmailContext } from "../../contexts/AuthEmailProvider";
import logoImg from "../../assets/event-logo-only.png";


export const Header = () => {
  const { logoutUser } = useContext(AuthEmailContext);
  return (
    <HeaderContainer>
      <HeaderContent>
        <div className="logo-img-wrapper">
          <img src={logoImg} alt="" id="logoImgBg" />
          <img src={logoImg} alt="" id="logoImg" />
        </div>
        <span id="logo-title">EVENT SCHEDULER</span>
        <div className="logout-wraper">
          <SignOut onClick={() => logoutUser()} weight="bold" size={28}/>
        </div>
        {/* <CalendarX size={60} /> */}
        {/* <strong>Create and Schedule Your Event</strong> */}
      </HeaderContent>
      
    </HeaderContainer>
  );
}
