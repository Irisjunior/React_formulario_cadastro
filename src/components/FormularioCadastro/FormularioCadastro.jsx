import React, { Fragment, useState } from "react";
import DadosPessoais from "./DadosPessoais";
import DadosUsuario from "./DadosUsuario";
import DadosEntrega from "./DadosEntrega";

function FormularioCadastro({ aoEnviar, validarCPF }) {
  return (
    <Fragment>
      <DadosPessoais aoEnviar={aoEnviar} validarCPF={validarCPF} />
      <DadosUsuario />
      <DadosEntrega />
    </Fragment>
  );
}

export default FormularioCadastro;
