import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { WebsiteContext } from "../../context/WebsiteContext";
export default function AuthenticatedRoute({ children }) {
  const { user } = useContext(WebsiteContext);
  const navigate = useNavigate();
  if (!user) return navigate("/");
  return <>{children}</>;
}
