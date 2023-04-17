import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { Check, Credit, Play } from "./icons/icons";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
  elevation: 8,
  height: 260,
}));

export default function Conteudo() {
  return (
    <Box>
      <Grid container spacing={2} padding={3}>
        <Grid item xs={12} md={4}>
          <Item>
            <Credit />
            <Typography color={"#4F9A68"} variant="h6">
              Pagamento seguro
            </Typography>
            <Typography variant="subtitle1">
              Ambiente seguro. Seus dados estão protegidos e sua compra é 100%
              segura.
            </Typography>
          </Item>
        </Grid>
        <Grid item xs={12} md={4}>
          <Item>
            <Check />
            <Typography color={"#4F9A68"} variant="h6">
              Livro Completo
            </Typography>
            <Typography variant="subtitle1">
              Aprenda o Truque Da Banana que ativa a queima de gordura
              automática de forma natural.
            </Typography>
          </Item>
        </Grid>
        <Grid item xs={12} md={4}>
          <Item>
            <Play />
            <Typography color={"#4F9A68"} variant="h6">
              Acesso imediato
            </Typography>
            <Typography variant="subtitle1">
              Seu livro digital será enviado ao seu e-mail logo após o
              processamento do pagamento.
            </Typography>
          </Item>
        </Grid>
      </Grid>
    </Box>
  );
}
