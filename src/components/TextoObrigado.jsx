import * as React from "react";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

export default function TextoObrigado() {
  return (
    <div
      style={{
        textAlign: "center",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
      }}
    >
      <Box>
        <Typography variant="h5" fontWeight="bold">
          <br />
          <br />
          PARABÉNS! VAGA GARANTIDA COM SUCESSO!
          <br />
          <br />
          Estou muito feliz por você ter tomado esta decisão!
          <br />
          <br />
          Garanto que vamos superar todas as suas expectativas.
          <br />
          <br />
          O acesso foi enviado ao e-mail que você cadastrou na hora da compra.
          <br />
          <br />
          Caso não ache de primeira, verifique se não caiu na caixa de
          SPAM/LIXEIRA do seu e-mail.
          <br />
          <br />
        </Typography>
        <Typography color={"#4F9A68"} variant="h4">
          OBRIGADO
          <br />
          <br />
        </Typography>
      </Box>
    </div>
  );
}
