import "../assets/css/Login.css";
import imagen from "../assets/img/Password.jpg"
import { useState } from "react";
import Alerta from "./Alert";

export default function Login() {
  const [email, setEmail] = useState("");
  const [clave, setClave] = useState("");
  const [show, setShow] = useState(false);
  const [color, setColor] = useState("");
  let [mensajeDeError, setMensajeDeError] = useState("");


  const validarFormulario = () => {
    mensajeDeError = "";
    setColor("warning")
    if (email.includes(" ") || clave.includes(" ")) {
      mensajeDeError = "Ni el e-mail ni la clave deben contener espacio en blanco";
    } else if (!email.includes("@")) {
      mensajeDeError = "El e-mail debe contener un arroba";
    } else if (!email.includes(".")) {
      mensajeDeError = "El e-mail debe contener un punto";
    } else if (clave.length < 6) {
      mensajeDeError = "La password debe tener minimo 6 caracteres";
    } else {
      mensajeDeError = "Autenticación exitosa";
      setColor("success")
    }

    // e.target.setCustomValidity(mensajeDeError)

    if (mensajeDeError) {
      setShow(true);
      setMensajeDeError(mensajeDeError);
    }
  };

  const eventoSubmit = (e) => {
    e.preventDefault();

    validarFormulario()
  };

  return (
    <>
      <div className="encabezado">
        <img src={imagen}></img>
        <p>
          <h2 className="h">DESAFÍO</h2>
          <h3 className="h">Estados y Eventos de Componentes </h3>
        </p>
      </div>
      <form onSubmit={eventoSubmit}>
        <label className="mt-4 ">E-mail</label>
        <input
          className="form-control mb-2"
          placeholder="Ingrese su e-mail"
          onChange={(e) => setEmail(e.target.value)}
        />
        <label>Password</label>
        <input
          type="password"
          className="form-control mb-2"
          placeholder="Ingrese su contraseña"
          onChange={(e) => setClave(e.target.value)}
        />
        <div>
          {color == "warning" && <span style={{ color: "red" }}>La contraseña debe contener mínimo 6 caracteres</span>}
        </div>
        <button
          type="submit"
          className="btn btn-primary mb-4"
          disabled={!email.trim() || !clave.trim()}
        >
          Iniciar sesión
        </button>
      </form>
      {show && <Alerta texto={mensajeDeError} color={color} />}
    </>
  );
}
