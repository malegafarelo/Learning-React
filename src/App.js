import React, { Fragment } from "react";
import Input from "./Input";
import { Button } from "./Button";
import { useState } from "react";
import "./App.css";

const App = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const error = validate(email, password);

  console.log(email, password)

  const inputEmail = {
    type: "text",
    placeholder: "Ingrese su Email",
    class: "inputPassword",
    name: "email",
  };

  const inputPassword = {
    type: "text",
    placeholder: "Ingrese su contraseña",
    class: "inputPassword",
    name: "password",
  };

  const button = {
    class: "btn-primary",
    color: "#000000",
    type: "submit",
  };

  return (
    <Fragment>
      <h2 className="h2-titulo">Formulario</h2>
      <form>
        <Input
          estado={email}
          setestado={setEmail}
          class={inputEmail.class}
          type={inputEmail.type}
          placeholder={inputEmail.placeholder}
          onChange={(ev) => setEmail(ev.target.value)}
          name={inputEmail.name}
        />
        <Input
          estado={password}
          setestado={setPassword}
          class={inputPassword.class}
          type={inputPassword.type}
          placeholder={inputPassword.placeholder}
          onChange={(ev) => setPassword(ev.target.value)}
          name={inputPassword.name}
        />

        <Button
          disabled={error}
          name="Enviar"
          class={button.class}
          type={button.type}
        />
      </form>
    </Fragment>
  );
};

const validate = (email, password) => {
  if (!email.includes("@")) return "Email incorrecto";
  if (password.length < 8)
    return "La contraseña debe tener 8 caracteres como minimo.";
};

export default App;
