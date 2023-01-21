import { useNavigate } from "react-router-dom";
function NavigateComp({ comp, user }) {
  const history = useNavigate();
  return user ? history("/") : comp;
}

export default NavigateComp;
