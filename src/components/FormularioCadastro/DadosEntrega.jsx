import React from "react";
import { TextField, Button } from "@material-ui/core/";

function DadosEntrega() {
  return (
    <form>
      <TextField
        id="cep"
        label="CEP"
        variant="outlined"
        margin="normal"
        type="number"
      />

      <TextField
        id="endereco"
        label="Endereço"
        variant="outlined"
        margin="normal"
        type="text"
        fullWidth
      />

      <TextField
        id="numero"
        label="Numero"
        variant="outlined"
        margin="normal"
        type="number"
      />

      <TextField
        id="estado"
        label="Estado"
        variant="outlined"
        margin="normal"
        type="texto"
      />

      <TextField
        id="cidade"
        label="Cidade"
        variant="outlined"
        margin="normal"
        type="texto"
        fullWidth
      />

      <Button type="submit" variant="contained" color="primary" fullWidth>
        Cadastrar
      </Button>
    </form>
  );
}

export default DadosEntrega;
