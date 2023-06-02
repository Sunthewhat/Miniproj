import react, { useEffect, useState } from "react";
import api from "../axios";
import { useNavigate } from "react-router-dom";

export default function Layout(props) {
  const [user, setUser] = useState();
  const navigate = useNavigate();
  useEffect(() => {
    if (props.isProtected) getprofile();
  }, []);
  const getprofile = async () => {
    try {
      const res = await api.get("/profile");
      setUser(res.data);
      console.log(res.data);
    } catch (error) {
      navigate("/login");
    }
  };
  return <div>{props.children}</div>;
}
