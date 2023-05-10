import img from "../../assets/Spinner.svg";
import { LoadingContainer } from "./styles";
export const Loading = () => {
  return (
    <LoadingContainer>
      <img src={img} alt="loading" />
    </LoadingContainer>
  );
};
