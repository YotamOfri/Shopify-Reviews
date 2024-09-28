import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { WebsiteContext } from "../../context/WebsiteContext";
export default function UnAuthenticatedRoute({ children }) {
  const { user } = useContext(WebsiteContext);
  const navigate = useNavigate();
  if (user) return navigate("/admin/overview");
  return <>{children}</>;
}
